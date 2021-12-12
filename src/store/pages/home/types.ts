export interface IOwner {
  username: string;
  picture: string;
}

export interface IPictures {
  src: string;
}

export interface IUsers {
  username: string;
  comments: string;
  releaseDate: string;
}

export interface IComments {
  users: Array<IUsers>;
  length: number;
}

export interface ILikesUsers {
  users: string;
}

export interface ILikes {
  users: Array<ILikesUsers>;
  length: number;
}

export interface ITimelinePosts {
  id: number;
  owner: IOwner;
  description: string;
  pictures: Array<IPictures>;
  comments: IComments;
  likes: ILikes;
  releaseDate: string;
}

export interface IStories {
  url: string;
  username: string;
}

export interface IRecommendedUsers {
  username: string;
  pic: string;
  request: boolean;
  details: string;

}

export interface IHomeState {
  timelinePosts: Array<ITimelinePosts>;
  stories: Array<IStories>;
  recommendedUsers: Array<IRecommendedUsers>;
}
