-- AlterTable
ALTER TABLE "ProfileInformationEducation" ALTER COLUMN "degreeName" DROP NOT NULL,
ALTER COLUMN "institution" DROP NOT NULL,
ALTER COLUMN "startedAt" DROP NOT NULL,
ALTER COLUMN "endedAt" DROP NOT NULL,
ALTER COLUMN "setPrivacy" SET DEFAULT 'PUBLIC';
