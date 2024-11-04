/*
  Warnings:

  - Added the required column `userId1` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId2` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "PostReactions_reactedBy_key";

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "userId1" TEXT NOT NULL,
ADD COLUMN     "userId2" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId1_fkey" FOREIGN KEY ("userId1") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId2_fkey" FOREIGN KEY ("userId2") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
