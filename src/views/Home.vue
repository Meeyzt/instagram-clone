<template>
  <home-layout :stories="stories" :recommendedUsers="users">
    <post :data="post" v-for="post in posts" :key="post.username"/>
  </home-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import HomeLayout from '@/layouts/HomeLayout.vue';
import Post from '@/components/Post.vue';
import stories from '../../public/api/stories.json';
import users from '../../public/api/recommended-users.json';
import posts from '../../public/api/timeline-posts.json';

export default Vue.extend({
  name: 'Home',
  components: {
    HomeLayout,
    Post,
  },

  data() {
    return {
      stories,
      users,
      posts,
    };
  },
});
</script>
