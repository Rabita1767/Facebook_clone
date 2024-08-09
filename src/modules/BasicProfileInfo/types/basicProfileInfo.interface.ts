import { genderType, privacy, relationship } from "@prisma/client";

export default interface profileInfo {
  gender?: string;
  genderPrivacy?: genderType;
  relationshipStatus?: relationship;
  relationPrivacy?: privacy;
}
