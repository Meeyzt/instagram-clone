<template>
  <home-layout :stories="stories" :recommendedUsers="users">
    <post :data="post" v-for="post in posts" :key="post.username"/>
  </home-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import HomeLayout from '@/layouts/HomeLayout.vue';
import Post from '@/components/Post.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    HomeLayout,
    Post,
  },

  data() {
    return {
    };
  },
});
</script>
