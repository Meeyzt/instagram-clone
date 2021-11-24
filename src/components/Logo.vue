<template>
  <router-link :to="link">
    <img :src="src" alt="logo" />
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    link: {
      type: String,
      required: true,
    },

    src: {
      type: String,
      required: true,
    },
  },
});
</script>
