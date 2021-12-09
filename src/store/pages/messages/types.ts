export interface IUserInbox {
  username: string;
  pic: string;
  lastMessage: string;
  releaseDate: string;
}

export interface IInbox {
  id: string;
  message: string;
  isMe: boolean;
}

export interface IMessages {
  userInbox: Array<IUserInbox>;
  inbox: Array<IInbox>
}
