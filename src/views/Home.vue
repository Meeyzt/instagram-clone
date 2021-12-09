<template>
  <home-layout :stories="stories" :recommendedUsers="recommendedUsers">
    <post :data="post" v-for="post in timelinePosts" :key="post.username"/>
  </home-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import HomeLayout from '@/layouts/HomeLayout.vue';
import Post from '@/components/Post.vue';
import { ITimelinePosts } from '@/store/pages/home/types';

export default Vue.extend({
  name: 'Home',

  components: {
    HomeLayout,
    Post,
  },

  created() {
    this.$store.dispatch('getTimelinePosts', null, { root: true });
    this.$store.dispatch('getStories', null, { root: true });
    this.$store.dispatch('getRecommendedUsers', null, { root: true });
  },

  computed: {
    timelinePosts(): Array<ITimelinePosts> {
      return this.$store.state.home.timelinePosts;
    },

    stories(): Array<ITimelinePosts> {
      return this.$store.state.home.stories;
    },

    recommendedUsers(): Array<ITimelinePosts> {
      return this.$store.state.home.recommendedUsers;
    },
  },

});
</script>
