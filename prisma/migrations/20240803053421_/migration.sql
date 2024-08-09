/*
  Warnings:

  - Added the required column `postType` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "postType" AS ENUM ('OWN', 'TAGGED', 'PROFILEPICTURE', 'COVERPHOTO');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "postType" "postType" NOT NULL;
