import { NextRequest, NextResponse } from "next/server";
import { requireSession } from "@/lib/requestAuth";
import { getEntitySet } from "@/lib/entityStore";
import { domainInsights } from "@/lib/featurepack";
export async function GET(request: NextRequest) { const s = await requireSession(request); if (s instanceof NextResponse) return s; const slug = request.nextUrl.searchParams.get("slug") || "implementation-plan"; const set = await getEntitySet(slug); const rows = (set?.rows ?? []) as unknown as Record<string, unknown>[]; return NextResponse.json({ aiGenerated: false, slug, insights: domainInsights(rows) }); }
