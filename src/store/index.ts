import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { home } from './pages/home';
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    home,
  },
};

export default new Vuex.Store<RootState>(store);
