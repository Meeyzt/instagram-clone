<template>
  <div class="grid">
    <grid-post class="grid-item" v-for="saved in saveds" :post="saved"  :key="saved.username"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import GridPost from '@/components/GridPost.vue';
import { ISaveds } from '@/store/pages/profile/types';

export default Vue.extend({
  components: {
    GridPost,
  },

  created() {
    this.$store.dispatch('getSaveds', null, { root: true });
  },

  computed: {
    saveds(): Array<ISaveds> {
      return this.$store.state.profile.saveds;
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
