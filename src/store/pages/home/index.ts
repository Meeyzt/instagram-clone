import { Module } from 'vuex';

import { RootState } from '@/store/types';
import { IHomeState } from './types';
import { mutations } from './mutations';
import { actions } from './actions';

const state: IHomeState = {
  posts: [],
  profiles: [],
};

// eslint-disable-next-line import/prefer-default-export
export const home: Module<IHomeState, RootState> = {
  state,
  mutations,
  actions,
};
