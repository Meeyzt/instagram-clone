<template>
  <div class="search-bar text-gray">
    <input type="text">

    <div class="text-gray search-placeholder">
      <div class="input-group"></div>

      <span>Ara</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style lang="scss" scoped>

  .search-bar {
    width: 213px;
    min-width: 115px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background-color: #fafafa;
    height:25px;
    display:flex;
    align-items: center;

    div {
      position: absolute;
    }

    input {
      width: 100%;
      height: 100%;
      background: transparent;
      border: 0px;
    }

    span {
      font-size: 13px;
      font-weight: 200;
      margin-left: 17px;
    }

    .search-placeholder {
      display: flex;
      align-items: center;
    }

    .input-group {
      width: 10px;
      height: 10px;
      background-image: url('https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png');
      background-repeat: no-repeat;
      background-size: 440px 411px;
      background-position: -428px -241px;
      margin-left: 5px;
    }
  }

  .search-bar:focus-within {
    input {
      padding-left:20px;
    }

    .search-placeholder > span{
      display:none;
    }
  }
</style>
