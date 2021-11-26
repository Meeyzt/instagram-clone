<template>
  <div class="headbar">
    <logo
      link="/"
      src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
    />

    <search-bar/>

    <navbar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SearchBar from './Input.vue';
import Logo from './Logo.vue';
import Navbar from './Navbar.vue';

export default Vue.extend({
  components: {
    SearchBar,
    Logo,
    Navbar,
  },
});
</script>

<style lang="scss" scoped>
  .headbar {
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    align-items: center;
  }
</style>
