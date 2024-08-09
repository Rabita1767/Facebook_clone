-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "isTaggedBy" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "isTaggedPost" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ProfileInformationBooks" ALTER COLUMN "isDeleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "ProfileInformationEducation" ALTER COLUMN "isDeleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "ProfileInformationJobs" ALTER COLUMN "isDeleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "ProfileInformationMovies" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ProfileInformationMusic" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "coverPhoto" ALTER COLUMN "isDeleted" SET DEFAULT false;

-- AlterTable
ALTER TABLE "profilePicture" ALTER COLUMN "isDeleted" SET DEFAULT false;
