import { privacy } from "@prisma/client";

export default interface educationInfo {
  degreeName?: string;
  institution?: string;
  startedAt?: string;
  endedAt?: string;
  setPrivacy?: privacy;
}
