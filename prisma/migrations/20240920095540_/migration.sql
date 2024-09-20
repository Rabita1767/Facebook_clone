/*
  Warnings:

  - Added the required column `reactionType` to the `commentReactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "commentReactions" ADD COLUMN     "reactionType" "reactionType" NOT NULL;
