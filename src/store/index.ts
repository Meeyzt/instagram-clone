import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import exploreModule from './pages/explore';
import homeModule from './pages/home';
import profileModule from './pages/profile';
import messagesModule from './pages/messages';
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    profile: profileModule,
    home: homeModule,
    explore: exploreModule,
    messages: messagesModule,
  },
};

export default new Vuex.Store<RootState>(store);
