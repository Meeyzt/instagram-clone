import { ActionTree } from 'vuex';
import axios from 'axios';

import { RootState } from '@/store/types';
import { IProfileState } from './types';

export const actions: ActionTree<IProfileState, RootState> = {
  getHighlights({ commit }): void {
    axios.get('//localhost:8080/api/users/_meeyzt/highlights.json').then((response) => {
      commit('setHighlights', response.data.data);
    });
  },

  getPosts({ commit }): void {
    axios.get('//localhost:8080/api/users/_meeyzt/posts.json').then((response) => {
      commit('setPosts', response.data.data);
    });
  },

  getProfile({ commit }): void {
    axios.get('//localhost:8080/api/users/_meeyzt/profile.json').then((response) => {
      commit('setProfile', response.data.data);
    });
  },

  getSaveds({ commit }): void {
    axios.get('//localhost:8080/api/users/_meeyzt/saveds.json').then((response) => {
      commit('setSaveds', response.data.data);
    });
  },

  getTagged({ commit }): void {
    axios.get('//localhost:8080/api/users/_meeyzt/tagged.json').then((response) => {
      commit('setTagged', response.data.data);
    });
  },

  getVideos({ commit }): void {
    axios.get('//localhost:8080/api/users/_meeyzt/videos.json').then((response) => {
      commit('setVideos', response.data.data);
    });
  },
};

export default {
  actions,
};
