/*
  Warnings:

  - You are about to drop the column `reqestAccepted` on the `Friends` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Friends" DROP COLUMN "reqestAccepted",
ADD COLUMN     "requestAccepted" BOOLEAN NOT NULL DEFAULT false;
