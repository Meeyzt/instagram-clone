export interface IPost {
  url: string;
  likeCount: number;
  commentCount: number;
}

export interface IExplore {
  explore: Array<IPost>;
}
