import { ActionTree } from 'vuex';
import axios from 'axios';

import { RootState } from '@/store/types';
import { IProfileState } from './types';

export const actions: ActionTree<IProfileState, RootState> = {
  getHighlights({ commit }): void {
    axios.get('//localhost:8080/api/users/_meeyzt/highlights.json').then((data) => {
      commit('setHighlights', data.data.data);
    });
  },

  getPosts({ commit }): void {
    axios.get('//localhost:8080/api/users/_meeyzt/posts.json').then((data) => {
      commit('setPosts', data.data.data);
    });
  },

  getProfile({ commit }): void {
    axios.get('//localhost:8080/api/users/_meeyzt/profile.json').then((data) => {
      commit('setProfile', data.data.data);
    });
  },

  getSaveds({ commit }): void {
    axios.get('//localhost:8080/api/users/_meeyzt/saveds.json').then((data) => {
      commit('setSaveds', data.data.data);
    });
  },

  getTagged({ commit }): void {
    axios.get('//localhost:8080/api/users/_meeyzt/tagged.json').then((data) => {
      commit('setTagged', data.data.data);
    });
  },

  getVideos({ commit }): void {
    axios.get('//localhost:8080/api/users/_meeyzt/videos.json').then((data) => {
      commit('setVideos', data.data.data);
    });
  },
};

export default {
  actions,
};
