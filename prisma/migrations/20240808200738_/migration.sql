/*
  Warnings:

  - You are about to drop the column `permanentAddress` on the `ProfileInformationBasic` table. All the data in the column will be lost.
  - You are about to drop the column `presentAddress` on the `ProfileInformationBasic` table. All the data in the column will be lost.
  - Added the required column `dob` to the `ProfileInformationBasic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProfileInformationBasic" DROP COLUMN "permanentAddress",
DROP COLUMN "presentAddress",
ADD COLUMN     "dob" TEXT NOT NULL,
ALTER COLUMN "genderPrivacy" SET DEFAULT 'PUBLIC',
ALTER COLUMN "relationPrivacy" SET DEFAULT 'PUBLIC';
