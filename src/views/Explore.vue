<template>
  <div class="container">
    <Headbar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Headbar from '@/components/Headbar.vue';

export default Vue.extend({
  components: {
    Headbar,
  },
});
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
  }
</style>
