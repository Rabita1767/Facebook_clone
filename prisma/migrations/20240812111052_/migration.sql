/*
  Warnings:

  - You are about to drop the column `isCanceled` on the `Friends` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Friends" DROP COLUMN "isCanceled",
ADD COLUMN     "isCancelled" BOOLEAN NOT NULL DEFAULT false;
