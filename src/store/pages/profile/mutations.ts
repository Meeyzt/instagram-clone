import { MutationTree } from 'vuex';
import { IHighlight, IPost, IProfile, IProfileState, ISaveds, ITagged, IVideos } from './types';

export const mutations: MutationTree<IProfileState> = {
  setHighlights(state, payload: IHighlight) {
    state.highlights = payload;
  },

  setPosts(state, payload: Array<IPost>) {
    state.posts = payload;
  },

  setProfile(state, payload: IProfile) {
    state.profile = payload;
  },

  setSaveds(state, payload: Array<ISaveds>) {
    state.saveds = payload;
  },

  setTagged(state, payload: Array<ITagged>) {
    state.tagged = payload;
  },

  setVideos(state, payload: Array<IVideos>) {
    state.videos = payload;
  },
};

export default mutations;
