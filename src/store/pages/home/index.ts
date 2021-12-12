import { Module } from 'vuex';

import { RootState } from '@/store/types';
import { IHomeState } from './types';
import { mutations } from './mutations';
import { actions } from './actions';

const state: IHomeState = {
  timelinePosts: [],
  stories: [],
  recommendedUsers: [],
};

export const home: Module<IHomeState, RootState> = {
  state,
  mutations,
  actions,
};

export default home;
