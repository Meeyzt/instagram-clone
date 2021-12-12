<template>
  <div class="grid">
    <grid-post class="grid-item" :post="tag" v-for="tag in tagged" :key="tag.username"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import GridPost from '@/components/GridPost.vue';
import { ITagged } from '@/store/pages/profile/types';

export default Vue.extend({
  components: {
    GridPost,
  },

  created() {
    this.$store.dispatch('getTagged', null, { root: true });
  },

  computed: {
    tagged(): Array<ITagged> {
      return this.$store.state.profile.tagged;
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

    .grid-item {
      width: 300px;
      height: 300px;
    }
  }
</style>
