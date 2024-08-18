/*
  Warnings:

  - You are about to drop the column `coverPhoto` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profilePic` on the `User` table. All the data in the column will be lost.
  - Added the required column `genderPrivacy` to the `ProfileInformationBasic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `permanentAddress` to the `ProfileInformationBasic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `presentAddress` to the `ProfileInformationBasic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relationPrivacy` to the `ProfileInformationBasic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDeleted` to the `ProfileInformationBooks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDeleted` to the `ProfileInformationEducation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `setPrivacy` to the `ProfileInformationEducation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDeleted` to the `ProfileInformationJobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `setPrivacy` to the `ProfileInformationJobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProfileInformationBasic" ADD COLUMN     "genderPrivacy" "privacy" NOT NULL,
ADD COLUMN     "permanentAddress" TEXT NOT NULL,
ADD COLUMN     "presentAddress" TEXT NOT NULL,
ADD COLUMN     "relationPrivacy" "privacy" NOT NULL;

-- AlterTable
ALTER TABLE "ProfileInformationBooks" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "ProfileInformationEducation" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL,
ADD COLUMN     "setPrivacy" "privacy" NOT NULL;

-- AlterTable
ALTER TABLE "ProfileInformationJobs" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL,
ADD COLUMN     "setPrivacy" "privacy" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "coverPhoto",
DROP COLUMN "profilePic";

-- CreateTable
CREATE TABLE "profilePicture" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "privacy" "privacy" NOT NULL,
    "image" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,

    CONSTRAINT "profilePicture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coverPhoto" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "privacy" "privacy" NOT NULL,
    "image" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,

    CONSTRAINT "coverPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profilePicture_userId_key" ON "profilePicture"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "coverPhoto_userId_key" ON "coverPhoto"("userId");

-- AddForeignKey
ALTER TABLE "profilePicture" ADD CONSTRAINT "profilePicture_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coverPhoto" ADD CONSTRAINT "coverPhoto_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
