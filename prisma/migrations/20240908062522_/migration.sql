/*
  Warnings:

  - You are about to drop the column `isRemoved` on the `friendsExcept` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "friendsExcept" DROP COLUMN "isRemoved",
ADD COLUMN     "isdeleted" BOOLEAN NOT NULL DEFAULT false;
