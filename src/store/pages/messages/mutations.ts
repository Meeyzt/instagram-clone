import { MutationTree } from 'vuex';
import { IInbox, IMessages, IUserInbox } from './types';

export const mutations: MutationTree<IMessages> = {
  setUserInbox(state, payload: Array<IUserInbox>) {
    state.userInbox = payload;
  },

  setInbox(state, payload: Array<IInbox>) {
    state.inbox = payload;
  },
};

export default mutations;
