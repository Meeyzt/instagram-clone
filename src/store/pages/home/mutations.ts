import { MutationTree } from 'vuex';
import { HomeState } from './types';

// eslint-disable-next-line import/prefer-default-export
export const mutations: MutationTree<HomeState> = {
  setHello(state, payload: string) {
    state.Hello = payload;
  },
};
