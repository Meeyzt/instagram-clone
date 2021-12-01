<template>
  <div :style="{ width: size+'px', height: size+'px'}" :class="frameStatus">
    <img :src="src" alt="sad">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'normal',
    },

    src: {
      type: String,
      required: true,
    },

    size: {
      type: Number,
      required: true,
    },
  },

  computed: {
    frameStatus() {
      if (this.type === 'story-circle') {
        return 'story-circle';
      }
      if (this.type === 'watched-story') {
        return 'watched-story-circle';
      }
        return 'normal';
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

    .watched-story-circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border: 1px solid rgba(0, 0, 0, 0.4);
      border-radius: 999999px;

      img {
        border: 2px solid white;
        border-radius: 9999px;
        width: 100%;
        height: 100%;
      }
    }

    .normal {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: 999999px;

      img {
        border-radius: 9999px;
        width: 100%;
        height: 100%;
      }
    }
</style>
