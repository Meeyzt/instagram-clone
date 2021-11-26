<template>
  <div :style="{width: width+'px', height: height+'px'}" class="search-bar text-gray">
    <input type="text" :placeholder="placeholder">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    placeholder: {
      type: String,
      required: true,
    },

    width: {
      type: Number,
      default: 32,
    },

    height: {
      type: Number,
      default: 32,
    },
  },
});
</script>

<style lang="scss" scoped>

  .search-bar {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius:1vh;
    background-color: #fafafa;
    height:25px;
    display:flex;
    align-items: center;

    input {
      width: 100%;
      height: 100%;
      background: transparent;
      border: 0px;
    }
  }
</style>
