export interface IHighlight {
  url: string;
  text: string;
}

export interface IPost {
  url: string;
  likeCount: number;
  commentCount: number;
}

export interface IProfile {
  username: string;
  name: string;
  pic: string;
  postsCount: number;
  followers: number;
  following: number;
  details: string;
  request: boolean;
  biography: string;
}

export interface ISaveds {
  url: string;
  likeCount: number;
  commentCount: number;
}

export interface ITagged {
  url: string;
  likeCount: number;
  commentCount: number;
}

export interface IVideos {
  url: string;
  likeCount: number;
  commentCount: number;
}

export interface IProfileState {
  highlights: IHighlight,
  posts: Array<IPost>,
  profile: IProfile,
  saveds: Array<ISaveds>,
  tagged: Array<ITagged>,
  videos: Array<IVideos>,
}
