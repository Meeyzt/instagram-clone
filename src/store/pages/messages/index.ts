import { Module } from 'vuex';

import { RootState } from '@/store/types';
import { IMessages } from './types';
import { mutations } from './mutations';
import { actions } from './actions';

const state: IMessages = {
  userInbox: [],
  inbox: [],
};

export const messages: Module<IMessages, RootState> = {
  state,
  mutations,
  actions,
};

export default messages;
