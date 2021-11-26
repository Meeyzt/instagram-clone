<template>
  <div :style="{height: (height-2)+'px', fontSize: font+'px'}" class="search-bar text-gray">
    <input type="text">

    <div class="text-gray search-placeholder">
      {{placeholder}}
    </div>
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
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius:1vh;
    background-color: #fafafa;
    display:flex;
    align-items: center;
    width: 100%;
    margin-right: 10px;
    padding-right: 15px;
    position: relative;

    input {
      width: 100%;
      height: 100%;
      background: transparent;
      padding-left: 10px;
      border: 0px;
      outline: none;
    }

    div {
      box-sizing: border-box;
      padding-left: 10px;
      position:absolute;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;

      span {
        width: 100%;
      }
    }

  .search-bar:focus-within {
    .search-placeholder > div{
      display:none;
    }
  }
}
</style>
