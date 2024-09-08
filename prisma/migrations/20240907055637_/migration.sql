-- CreateTable
CREATE TABLE "friendsExcept" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "friendsId" TEXT NOT NULL,

    CONSTRAINT "friendsExcept_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "friendsExcept" ADD CONSTRAINT "friendsExcept_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendsExcept" ADD CONSTRAINT "friendsExcept_friendsId_fkey" FOREIGN KEY ("friendsId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
