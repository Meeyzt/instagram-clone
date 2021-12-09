<template>
  <home-layout>
    <post/>
    <post/>
    <post/>
    <post/>
    <post/>
    <post/>
    <post/>
    <post/>
    <post/>
    <post/>
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
  created(): void {
    console.log(this.$store.dispatch('posts'));
  },
});
</script>
