/*
  Warnings:

  - You are about to drop the column `userId` on the `Story` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[postedBy]` on the table `Story` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postedBy` to the `Story` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Story" DROP CONSTRAINT "Story_userId_fkey";

-- DropIndex
DROP INDEX "Story_userId_key";

-- AlterTable
ALTER TABLE "Story" DROP COLUMN "userId",
ADD COLUMN     "postedBy" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Story_postedBy_key" ON "Story"("postedBy");

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_postedBy_fkey" FOREIGN KEY ("postedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
