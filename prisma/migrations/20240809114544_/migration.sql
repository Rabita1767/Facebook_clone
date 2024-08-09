/*
  Warnings:

  - You are about to drop the column `Dob` on the `Auth` table. All the data in the column will be lost.
  - Added the required column `dob` to the `Auth` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Auth" DROP COLUMN "Dob",
ADD COLUMN     "dob" TIMESTAMP(3) NOT NULL;
