import { getPgKeyValue, setPgKeyValue } from "@/lib/postgres";
export type StaffTask = { id: string; title: string; description?: string | null; priority: string; status: string; dueAt?: string | null; assigneeId?: string | null; createdBy: string; createdAt: string; completedAt?: string | null };
export function parseTaskPriority(v: unknown) { return v === "LOW" || v === "HIGH" ? v : "NORMAL"; }
export function parseTaskStatus(v: unknown) { return v === "OPEN" || v === "DONE" || v === "CANCELLED" ? v : null; }
export async function listTasks(): Promise<StaffTask[]> { return (await getPgKeyValue<StaffTask[]>("feature_states", "staff_tasks")) ?? []; }
export async function saveTasks(tasks: StaffTask[]) { await setPgKeyValue("feature_states", "staff_tasks", tasks); }
