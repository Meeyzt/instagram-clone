<template>
  <div :style="{height: (height-2)+'px', borderRadius: height/100}" class="search-bar text-gray">
    <input :style="{fontSize: font+'px'}" type="text" placeholder="asdasdasdasdsadsadas" />
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

    height: {
      type: Number,
      default: 32,
    },

    font: {
      type: Number,
      default: 14,
    },
  },
});
</script>

<style lang="scss" scoped>

  .search-bar {
    position: relative;
    background-color: #fafafa;
    border-radius:1vh;
    border: 1px solid rgba(0, 0, 0, 0.3);
    width: 100%;

    input {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      background: transparent;
      border: 0px;
      outline: none;

      ::placeholder {
        text-overflow: ellipsis;
      }
    }
  }
</style>
