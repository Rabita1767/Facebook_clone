export interface IPOST {
  userId: string;
  postId?: string;
  content?: string;
  media?: string;
  checkIn?: string;
  lifeEvent?: string;
  privacy?: Privacy;
}
enum Privacy {
  PUBLIC = "PUBLIC",
  FRIENDS_OF_FRIENDS = "FRIENDS_OF_FRIENDS",
  CUSTOM = "CUSTOM",
  FRIENDS = "FRIENDS",
  ONLY_ME = "ONLY_ME",
}
export interface IUPDATEPOST {
  content?: string;
  media?: string;
  checkIn?: string;
  lifeEvent?: string;
  privacy?: Privacy;
}
