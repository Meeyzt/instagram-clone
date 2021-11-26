<template>
  <div :style="{ width: size+'px', height: size+'px'}" :class="story ? 'story-circle' : 'normal'">
    <img src="https://picsum.photos/150/150" alt="sad">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    story: {
      type: Boolean,
      default: false,
    },

    size: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
  .story-circle {
      display: flex;
      align-items: center;
      border-radius: 9999px;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, red, orange, purple);

      img {
        width: 90%;
        height: 90%;
        border-radius: 9999px;
      }
    }

    .normal {
      width: 100%;
      height: 100%;

      img {
        border-radius: 9999px;
        width: 100%;
        height: 100%;
      }
    }
</style>
