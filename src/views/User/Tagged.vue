<template>
  <div class="grid">
    <grid-post class="grid-item" :post="tagged" v-for="tagged in taggeds.data" :key="tagged.username"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import GridPost from '@/components/GridPost.vue';

import taggeds from '../../../public/api/users/_meeyzt/tagged.json';

export default Vue.extend({
  components: {
    GridPost,
  },

  data() {
    return {
      taggeds,
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

    .grid-items {
      width: 300px;
      height: 300px;
    }
  }
</style>
