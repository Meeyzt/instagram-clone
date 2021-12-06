<template>
  <div class="headbar">
    <logo
      link="/"
      src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
    />

    <div v-if="isEnterPage" class="search-bar text-gray">
      <input type="text" placeholder="Ara..." />

      <div class="search-placeholder">
        <span class="input-group"></span>
        <div class="close-btn"></div>
      </div>
    </div>

    <navbar v-if="isEnterPage" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Logo from './Logo.vue';
import Navbar from './Navbar.vue';

export default Vue.extend({
  components: {
    Logo,
    Navbar,
  },

  props: {
    isEnterPage: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style lang="scss" scoped>
  .headbar {
    background: white;
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    align-items: center;

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
      padding-left:20px;
      outline: none;
    }

    span {
      font-size: 13px;
      font-weight: 200;
      margin-left: 17px;
    }

    .search-placeholder {
      display: flex;
      align-items: center;
      width: 213px;

      .input-group {
        width: 10px;
        height: 10px;
        background-image: url('https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png');
        background-repeat: no-repeat;
        background-size: 440px 411px;
        background-position: -428px -241px;
        margin-left: 5px;
      }

      .close-btn {
        display: none;
        width: 20px;
        height: 20px;
        background-image: url('https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png');
        background-repeat: no-repeat;
        background-size: 440px 411px;
        background-position: -380px -96px;
        right: 5px;
      }
    }
  }

  .search-bar:focus-within {
    input {
      padding-left:5px;
    }

    .search-placeholder > .input-group {
      display:none;
    }

    .search-placeholder > .close-btn {
      display:block;
    }
  }
  }
</style>
