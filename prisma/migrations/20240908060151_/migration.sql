/*
  Warnings:

  - A unique constraint covering the columns `[userId,friendsId]` on the table `friendsExcept` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "friendsExcept_userId_friendsId_key" ON "friendsExcept"("userId", "friendsId");
