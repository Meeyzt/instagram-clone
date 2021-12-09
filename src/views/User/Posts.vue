<template>
  <div class="grid">
    <grid-post class="grid-item" :post="post" v-for="post in posts.data" :key="post.username"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import GridPost from '@/components/GridPost.vue';

import posts from '../../../public/api/users/_meeyzt/posts.json';

export default Vue.extend({
  components: {
    GridPost,
  },

  data() {
    return {
      posts,
    };
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
