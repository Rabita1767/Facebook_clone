export default interface IPOST {
  userId: string;
  content?: string;
  media?: string;
  checkIn?: string;
  lifeEvent?: string;
  privacy: Privacy;
}
enum Privacy {
  PUBLIC = "PUBLIC",
  FRIENDS_OF_FRIENDS = "FRIENDS_OF_FRIENDS",
  CUSTOM = "CUSTOM",
  FRIENDS = "FRIENDS",
  ONLY_ME = "ONLY_ME",
}
