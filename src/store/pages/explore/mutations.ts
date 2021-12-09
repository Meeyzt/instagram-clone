import { MutationTree } from 'vuex';
import { IExplore, IPost } from './types';

export const mutations: MutationTree<IExplore> = {
  setExplore(state, payload: Array<IPost>) {
    state.explore = payload;
  },

};

export default mutations;
