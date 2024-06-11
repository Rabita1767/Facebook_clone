-- CreateTable
CREATE TABLE "Friends" (
    "id" TEXT NOT NULL,
    "friendOfId" TEXT NOT NULL,
    "friendId" TEXT NOT NULL,

    CONSTRAINT "Friends_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlockList" (
    "id" TEXT NOT NULL,
    "isBlockedBy" TEXT NOT NULL,
    "isBlocked" TEXT NOT NULL,

    CONSTRAINT "BlockList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Share" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "sharedBy" TEXT NOT NULL,

    CONSTRAINT "Share_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Friends_friendOfId_key" ON "Friends"("friendOfId");

-- CreateIndex
CREATE UNIQUE INDEX "Friends_friendId_key" ON "Friends"("friendId");

-- CreateIndex
CREATE UNIQUE INDEX "BlockList_isBlocked_key" ON "BlockList"("isBlocked");

-- CreateIndex
CREATE UNIQUE INDEX "Share_postId_key" ON "Share"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "Share_sharedBy_key" ON "Share"("sharedBy");

-- AddForeignKey
ALTER TABLE "Friends" ADD CONSTRAINT "Friends_friendOfId_fkey" FOREIGN KEY ("friendOfId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friends" ADD CONSTRAINT "Friends_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlockList" ADD CONSTRAINT "BlockList_isBlockedBy_fkey" FOREIGN KEY ("isBlockedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlockList" ADD CONSTRAINT "BlockList_isBlocked_fkey" FOREIGN KEY ("isBlocked") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_sharedBy_fkey" FOREIGN KEY ("sharedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
