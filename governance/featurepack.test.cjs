const test=require("node:test"); const assert=require("node:assert/strict"); const fs=require("node:fs");
test("featurepack fallback labelled + tasks auth",()=>{
 const fp=fs.readFileSync(require("path").join(__dirname,"../frontend/src/lib/featurepack.ts"),"utf8");
 assert.ok(fp.includes("aiGenerated: false")); assert.ok(fp.includes("deterministic-fallback")); assert.ok(fp.includes("go-live-readiness"));
 const tasks=fs.readFileSync(require("path").join(__dirname,"../frontend/src/app/api/tasks/route.ts"),"utf8");
 assert.ok(tasks.includes("requireSession")); assert.ok(tasks.includes("title is required"));
 const serverCheck=fs.readFileSync(require("path").join(__dirname,"../frontend/src/app/api/entities/[slug]/route.ts"),"utf8");
 assert.ok(serverCheck.includes("filterRows"));
});
test("display preserves false/0/empty via source contract",()=>{
 const fp=fs.readFileSync(require("path").join(__dirname,"../frontend/src/lib/featurepack.ts"),"utf8");
 assert.ok(fp.includes('v === false')); assert.ok(fp.includes('v === 0')); assert.ok(fp.includes('"—"'));
});
