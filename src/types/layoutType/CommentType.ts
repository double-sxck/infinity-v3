export interface CommentType {
  userResult: {
    nickname: string;
  };
  novelResult: {
    uid: number;
    user_uid: number;
    title: string;
    content: string;
    thumbnail: string;
    category: string;
    views: number;
    novel_likes: { user_uid: number; novel_uid: number }[];
    like?: boolean;
    likeCount: number;
  }[];
}
