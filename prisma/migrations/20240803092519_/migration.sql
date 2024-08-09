/*
  Warnings:

  - A unique constraint covering the columns `[postId]` on the table `coverPhoto` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[postId]` on the table `profilePicture` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postId` to the `coverPhoto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postId` to the `profilePicture` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "coverPhoto" ADD COLUMN     "postId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "profilePicture" ADD COLUMN     "postId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "coverPhoto_postId_key" ON "coverPhoto"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "profilePicture_postId_key" ON "profilePicture"("postId");
