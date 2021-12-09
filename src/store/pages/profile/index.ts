import { Module } from 'vuex';

import { RootState } from '@/store/types';
import { IProfileState } from './types';
import { mutations } from './mutations';
import { actions } from './actions';

const state: IProfileState = {
  highlights: {
    url: '',
    text: '',
  },
  posts: [],
  profile: {
    username: '',
    name: '',
    pic: '',
    postsCount: 0,
    followers: 0,
    following: 0,
    details: '',
    request: false,
    biography: '',
  },
  saveds: [],
  tagged: [],
  videos: [],
};

export const profile: Module<IProfileState, RootState> = {
  state,
  mutations,
  actions,
};

export default profile;
