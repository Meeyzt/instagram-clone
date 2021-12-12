import { MutationTree } from 'vuex';
import { IHomeState, IRecommendedUsers, IStories, ITimelinePosts } from './types';

export const mutations: MutationTree<IHomeState> = {
  setTimelinePosts(state, payload: Array<ITimelinePosts>) {
    state.timelinePosts = payload;
  },

  setStories(state, payload: Array<IStories>) {
    state.stories = payload;
  },

  setRecommendedUsers(state, payload: Array<IRecommendedUsers>) {
    state.recommendedUsers = payload;
  },
};

export default mutations;
