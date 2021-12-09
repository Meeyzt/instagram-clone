import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import profile from './pages/profile';
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    profile,
  },
};

export default new Vuex.Store<RootState>(store);
