import { ActionTree } from 'vuex';
import axios from 'axios';

import { RootState } from '@/store/types';
import { IMessages } from './types';

export const actions: ActionTree<IMessages, RootState> = {
  getInbox({ commit }, id: string): void {
    axios.get(`/api/messages/${id}/inbox.json`).then((response) => {
      commit('setInbox', response.data.data);
    });
  },

  getUserInbox({ commit }): void {
    axios.get('/api/messages/userInbox.json').then((response) => {
      commit('setUserInbox', response.data.data);
    });
  },
};

export default actions;
