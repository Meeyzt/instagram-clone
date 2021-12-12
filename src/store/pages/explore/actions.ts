import { ActionTree } from 'vuex';
import axios from 'axios';

import { RootState } from '@/store/types';
import { IExplore } from './types';

export const actions: ActionTree<IExplore, RootState> = {
  getExplore({ commit }): void {
    axios.get('/api/explore.json').then((response) => {
      commit('setExplore', response.data);
    });
  },
};

export default actions;
