-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "parentId" TEXT;

-- CreateIndex
CREATE INDEX "User_parentId_idx" ON "public"."User"("parentId");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "public"."User"("role");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
