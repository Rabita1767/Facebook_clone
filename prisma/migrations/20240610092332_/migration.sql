/*
  Warnings:

  - You are about to drop the column `confirmPassword` on the `Auth` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "genderType" AS ENUM ('MALE', 'FEMALE', 'OTHERS');

-- CreateEnum
CREATE TYPE "relationship" AS ENUM ('SINGLE', 'IN_A_RELATIONSHIP', 'MARRIED', 'WIDOWED', 'ITS_COMPLICATED');

-- CreateEnum
CREATE TYPE "privacy" AS ENUM ('PUBLIC', 'FRIENDS_OF_FRIENDS', 'CUSTOM', 'FRIENDS', 'ONLY_ME');

-- CreateEnum
CREATE TYPE "reactionType" AS ENUM ('LIKE', 'LOVE', 'HAHA', 'WOW', 'CARE', 'ANGRY', 'SAD');

-- AlterTable
ALTER TABLE "Auth" DROP COLUMN "confirmPassword";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "ProfileInformationBasic" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gender" "genderType" NOT NULL,
    "relationshipStatus" "relationship" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProfileInformationBasic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileInformationEducation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "degreeName" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProfileInformationEducation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileInformationJobs" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProfileInformationJobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileInformationBooks" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bookName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProfileInformationBooks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileInformationMovies" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "movieName" TEXT,
    "tvShowName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProfileInformationMovies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileInformationMusic" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "music" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProfileInformationMusic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT,
    "media" TEXT,
    "privacy" "privacy" NOT NULL,
    "checkIn" TEXT,
    "lifeEvent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostReactions" (
    "id" TEXT NOT NULL,
    "reactedBy" TEXT NOT NULL,
    "postedBy" TEXT NOT NULL,
    "type" "reactionType" NOT NULL,
    "postId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PostReactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "commentReactions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "commentReactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Story" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT,
    "media" TEXT,
    "privacy" "privacy" NOT NULL,

    CONSTRAINT "Story_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProfileInformationBasic_userId_key" ON "ProfileInformationBasic"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileInformationEducation_userId_key" ON "ProfileInformationEducation"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileInformationJobs_userId_key" ON "ProfileInformationJobs"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileInformationBooks_userId_key" ON "ProfileInformationBooks"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileInformationMovies_userId_key" ON "ProfileInformationMovies"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileInformationMusic_userId_key" ON "ProfileInformationMusic"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_userId_key" ON "Post"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PostReactions_reactedBy_key" ON "PostReactions"("reactedBy");

-- CreateIndex
CREATE UNIQUE INDEX "PostReactions_postedBy_key" ON "PostReactions"("postedBy");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_userId_key" ON "Comment"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_postId_key" ON "Comment"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "commentReactions_userId_key" ON "commentReactions"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "commentReactions_commentId_key" ON "commentReactions"("commentId");

-- CreateIndex
CREATE UNIQUE INDEX "Story_userId_key" ON "Story"("userId");

-- AddForeignKey
ALTER TABLE "ProfileInformationBasic" ADD CONSTRAINT "ProfileInformationBasic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileInformationEducation" ADD CONSTRAINT "ProfileInformationEducation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileInformationJobs" ADD CONSTRAINT "ProfileInformationJobs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileInformationBooks" ADD CONSTRAINT "ProfileInformationBooks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileInformationMovies" ADD CONSTRAINT "ProfileInformationMovies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileInformationMusic" ADD CONSTRAINT "ProfileInformationMusic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostReactions" ADD CONSTRAINT "PostReactions_reactedBy_fkey" FOREIGN KEY ("reactedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostReactions" ADD CONSTRAINT "PostReactions_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentReactions" ADD CONSTRAINT "commentReactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentReactions" ADD CONSTRAINT "commentReactions_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
