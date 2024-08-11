/*
  Warnings:

  - You are about to drop the column `friendId` on the `Friends` table. All the data in the column will be lost.
  - You are about to drop the column `friendOfId` on the `Friends` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId1]` on the table `Friends` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId2]` on the table `Friends` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId1` to the `Friends` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId2` to the `Friends` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Friends" DROP CONSTRAINT "Friends_friendId_fkey";

-- DropForeignKey
ALTER TABLE "Friends" DROP CONSTRAINT "Friends_friendOfId_fkey";

-- DropIndex
DROP INDEX "Friends_friendId_key";

-- DropIndex
DROP INDEX "Friends_friendOfId_key";

-- AlterTable
ALTER TABLE "Friends" DROP COLUMN "friendId",
DROP COLUMN "friendOfId",
ADD COLUMN     "userId1" TEXT NOT NULL,
ADD COLUMN     "userId2" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Friends_userId1_key" ON "Friends"("userId1");

-- CreateIndex
CREATE UNIQUE INDEX "Friends_userId2_key" ON "Friends"("userId2");

-- AddForeignKey
ALTER TABLE "Friends" ADD CONSTRAINT "Friends_userId1_fkey" FOREIGN KEY ("userId1") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friends" ADD CONSTRAINT "Friends_userId2_fkey" FOREIGN KEY ("userId2") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
