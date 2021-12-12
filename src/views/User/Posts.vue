<template>
  <div class="grid">
    <grid-post class="grid-item" :post="post" v-for="post in posts" :key="post.username"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import GridPost from '@/components/GridPost.vue';
import { IPost } from '@/store/pages/profile/types';

export default Vue.extend({
  components: {
    GridPost,
  },

  created() {
    this.$store.dispatch('getPosts', null, { root: true });
  },

  computed: {
    posts(): Array<IPost> {
      return this.$store.state.profile.posts;
    },
  },
});
</script>

<style lang="scss" scoped>
  .grid {
    width: 100%;
    padding-top:10px;
    margin-right: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 28px;
  }
</style>
