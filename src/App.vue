<template>
  <div class="main-container">
    <router-view  />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
  },
});
</script>

<style scoped>
  .main-container {
    width: 100vw;
    height: 100vh;
  }
</style>
