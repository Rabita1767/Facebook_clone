/*
  Warnings:

  - Changed the type of `dob` on the `ProfileInformationBasic` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ProfileInformationBasic" DROP COLUMN "dob",
ADD COLUMN     "dob" TIMESTAMP(3) NOT NULL;
