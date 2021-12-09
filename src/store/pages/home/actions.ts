import { ActionTree } from 'vuex';
import axios from 'axios';

import { RootState } from '@/store/types';
import { IHomeState } from './types';

export const actions: ActionTree<IHomeState, RootState> = {
  posts({ commit }): void {
    axios.get('//localhost:8080/api/posts.json').then((data) => {
      commit('setPosts', data.data.posts);
    });
  },

  userProfiles({ commit }): void {
    axios.get('//localhost:8080/api/usersProfile.json').then((data) => {
      commit('setPosts', data.data.posts);
    });
  },
};

export default {
  actions,
};
