export interface MessageItem {
  novel_uid: number;
  review: string;
  uid: number;
  user: {
    uid: number;
    nickname: string;
  };
  user_uid: number;
}
