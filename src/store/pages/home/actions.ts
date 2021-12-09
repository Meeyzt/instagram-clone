import { ActionTree } from 'vuex';
import axios from 'axios';

import { RootState } from '@/store/types';
import { IHomeState } from './types';

export const actions: ActionTree<IHomeState, RootState> = {
  getTimelinePosts({ commit }): void {
    axios.get('//localhost:8080/api/timeline-posts.json').then((data) => {
      commit('setTimelinePosts', data.data.data);
    });
  },

  getStories({ commit }): void {
    axios.get('//localhost:8080/api/stories.json').then((data) => {
      commit('setStories', data.data.data);
    });
  },

  getRecommendedUsers({ commit }): void {
    axios.get('//localhost:8080/api/recommended-users.json').then((data) => {
      commit('setRecommendedUsers', data.data.data);
    });
  },
};

export default actions;
