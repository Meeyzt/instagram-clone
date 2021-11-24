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

  .content {
    display: flex;
    justify-content: flex-end;
    gap: 40px;
    padding-right: 100px;
  }
</style>
