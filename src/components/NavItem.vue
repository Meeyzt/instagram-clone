<template>
  <router-link :to="link">
    <icon-base :width="width" :height="height">
      <slot />
    </icon-base>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';

import IconBase from '@/components/IconBase.vue';

export default Vue.extend({
  components: {
    IconBase,
  },

  props: {
    link: {
      type: String,
      required: true,
    },

    height: {
      type: Number,
      default: 16,
    },

    width: {
      type: Number,
      default: 16,
    },
  },
});
</script>

<style lang="scss" scoped>
  a:visited {
    color: black;
    text-decoration: none;
  }
</style>
