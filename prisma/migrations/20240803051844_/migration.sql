/*
  Warnings:

  - Added the required column `content` to the `coverPhoto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `profilePicture` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "coverPhoto" ADD COLUMN     "content" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "profilePicture" ADD COLUMN     "content" TEXT NOT NULL;
