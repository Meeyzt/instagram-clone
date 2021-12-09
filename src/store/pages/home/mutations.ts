import { MutationTree } from 'vuex';
import { IHomeState, IProfile } from './types';

// eslint-disable-next-line import/prefer-default-export
export const mutations: MutationTree<IHomeState> = {
  setPosts(state, payload: Array<JSON>) {
    state.posts = payload;
  },
  setProfiles(state, payload: Array<IProfile>) {
    state.profiles = payload;
  },
};
