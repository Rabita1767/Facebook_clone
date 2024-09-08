/*
  Warnings:

  - You are about to drop the column `postedBy` on the `PostReactions` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "PostReactions_postedBy_key";

-- AlterTable
ALTER TABLE "PostReactions" DROP COLUMN "postedBy";
