<template>
  <div class="container">
    <Headbar/>
    <div class="grid">
      <div class="grid-items" v-for="index in 5" :key="index">
        <grid-post class="grid-item"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Headbar from '@/components/Headbar.vue';
import GridPost from '@/components/GridPost.vue';

export default Vue.extend({
  components: {
    Headbar,
    GridPost,
  },
});
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;

    .grid {
    width: 100%;
    padding-top:10px;
    margin-right: 40px;
    gap: 28px;
    display: flex;
    gap: 28px;
    flex-wrap: wrap;

    .grid-items {
      height: 300px;
      width: 300px;
    }
  }
  }
</style>
