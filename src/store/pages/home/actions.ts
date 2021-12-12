import { ActionTree } from 'vuex';
import axios from 'axios';

import { RootState } from '@/store/types';
import { IHomeState } from './types';

export const actions: ActionTree<IHomeState, RootState> = {
  getTimelinePosts({ commit }): void {
    axios.get('/api/timeline-posts.json').then((response) => {
      commit('setTimelinePosts', response.data);
    });
  },

  getStories({ commit }): void {
    axios.get('/api/stories.json').then((response) => {
      commit('setStories', response.data);
    });
  },

  getRecommendedUsers({ commit }): void {
    axios.get('/api/recommended-users.json').then((response) => {
      commit('setRecommendedUsers', response.data);
    });
  },
};

export default actions;
