<template>
  <div :style="{ width: size+'px', height: size+'px'}" :class="frameStatus">
    <img :src="src" alt="sad"/>
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
  div {
    cursor: pointer;
  }

  .story-circle {
    border-radius: 9999px;
    padding: 2px;
    background: linear-gradient(to right, red, orange, purple);

    img {
      width: 100%;
      height: 100%;
      border-radius: 9999px;
      background: white;
    }
    }

    .watched-story-circle {
      box-shadow: 0 0 0 2px white, 0 0 0 3px rgba($color: #000000, $alpha: 0.3);
      border-radius: 999999px;

      img {
        border-radius: 9999px;
        width: 100%;
        height: 100%;
      }
    }

    .normal {
      border-radius: 999999px;

      img {
        border-radius: 9999px;
        width: 100%;
        height: 100%;
      }
    }
</style>
