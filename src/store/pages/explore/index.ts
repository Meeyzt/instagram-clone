import { Module } from 'vuex';

import { RootState } from '@/store/types';
import { IExplore } from './types';
import { mutations } from './mutations';
import { actions } from './actions';

const state: IExplore = {
  explore: [],
};

export const home: Module<IExplore, RootState> = {
  state,
  mutations,
  actions,
};

export default home;