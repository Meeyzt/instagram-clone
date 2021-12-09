import { ActionTree } from 'vuex';
import axios from 'axios';

import { RootState } from '@/store/types';
import { IExplore } from './types';

export const actions: ActionTree<IExplore, RootState> = {
  getExplore({ commit }): void {
    axios.get('//localhost:8080/api/explore.json').then((data) => {
      commit('setExplore', data.data);
    });
  },
};

export default actions;
