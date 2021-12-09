import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import explore from './pages/explore';
import home from './pages/home';
import profile from './pages/profile';
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    profile,
    home,
    explore,
  },
};

export default new Vuex.Store<RootState>(store);
