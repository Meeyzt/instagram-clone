import { Module } from 'vuex';

import { RootState } from '@/store/types';
import { HomeState } from './types';

const state: HomeState = {
  Hello: '',
};

// eslint-disable-next-line import/prefer-default-export
export const home: Module<HomeState, RootState> = {
  state,
};
