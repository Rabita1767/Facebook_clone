/*
  Warnings:

  - You are about to drop the column `userId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `commentReactions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[commentBy]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[reactedBy]` on the table `commentReactions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `commentBy` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reactedBy` to the `commentReactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "commentReactions" DROP CONSTRAINT "commentReactions_userId_fkey";

-- DropIndex
DROP INDEX "Comment_userId_key";

-- DropIndex
DROP INDEX "commentReactions_userId_key";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "userId",
ADD COLUMN     "commentBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "commentReactions" DROP COLUMN "userId",
ADD COLUMN     "reactedBy" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Comment_commentBy_key" ON "Comment"("commentBy");

-- CreateIndex
CREATE UNIQUE INDEX "commentReactions_reactedBy_key" ON "commentReactions"("reactedBy");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_commentBy_fkey" FOREIGN KEY ("commentBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentReactions" ADD CONSTRAINT "commentReactions_reactedBy_fkey" FOREIGN KEY ("reactedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
