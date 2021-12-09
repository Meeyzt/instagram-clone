import { ActionTree } from 'vuex';
import axios from 'axios';

import { RootState } from '@/store/types';
import { IMessages } from './types';

export const actions: ActionTree<IMessages, RootState> = {
  getInbox({ commit }, id: string): void {
    axios.get(`//localhost:8080/api/messages/${id}/inbox.json`).then((data) => {
      commit('setInbox', data.data.data);
    });
  },

  getUserInbox({ commit }): void {
    axios.get('//localhost:8080/api/messages/userInbox.json').then((data) => {
      commit('setUserInbox', data.data.data);
    });
  },
};

export default actions;
