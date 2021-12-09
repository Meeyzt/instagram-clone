export interface IStory {
  url: string;
  text: string;
}

export interface IPost {
  url: string;
}

export interface IVideo {
  url: string;
}

export interface ISaved {
  url: string;
}

export interface ITagged {
  url: string;
}

export interface IProfile {
  username: string;
  pic: string;
  postsCount: number;
  followers: number;
  following: number;
  biography: string;
  stories: Array<IStory>;
  posts: Array<IPost>;
  saveds: Array<ISaved>;
  tagged: Array<ITagged>;
}

export interface IHomeState {
  posts: Array<JSON>;
  profiles: Array<IProfile>;
}
