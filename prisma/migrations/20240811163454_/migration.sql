-- CreateEnum
CREATE TYPE "friendRequestPrivacy" AS ENUM ('PUBLIC', 'FRIENDS_OF_FRIENDS');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "friendRequestPrivacy" "friendRequestPrivacy" NOT NULL DEFAULT 'PUBLIC';
