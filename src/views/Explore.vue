<template>
  <div class="container">
    <Headbar/>

    <div class="grid">
      <div class="grid-items" v-for="post in explore" :key="post.url">
        <grid-post :post="post"/>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Headbar from '@/components/Headbar.vue';
import GridPost from '@/components/GridPost.vue';
import { IPost } from '@/store/pages/profile/types';

export default Vue.extend({
  components: {
    Headbar,
    GridPost,
  },

  created() {
    this.$store.dispatch('getExplore', null, { root: true });
  },

  computed: {
    explore(): Array<IPost> {
      return this.$store.state.explore.explore;
    },
  },
});
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .grid {
      width: 100%;
      height: 100%;
      padding-top:10px;
      margin-right: 40px;
      margin-left: auto;
      margin-right: auto;
      gap: 28px;
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      grid-template-rows: auto;
      overflow: auto;

      .grid-items {
        grid-column: span 4 / span 4;
        grid-row: span 1 / span 1;

        &:nth-child(4),
        &:nth-child(14) {
          grid-column: span 8 / span 8;
          grid-row: span 2 / span 2;
        }
      }
    }
  }
</style>
