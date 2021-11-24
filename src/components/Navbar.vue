<template>
  <div class="navbar-router">
    <nav-item :component="HomeIcon" link="/" />

    <router-link
    to="/"
    >
      <component :is="'MessengerIcon'" :width="20" :height="20"/>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import MessengerIcon from './icons/MessengerIcon.vue';

export default Vue.extend({
  components: {
    MessengerIcon,
  },
});
</script>

<style lang="scss" scoped>
  .navbar-router {
    display: flex;
    gap: 10px;
    color:black;

    a:visited {
      color: black;
      text-decoration: none;
    }
  }
</style>
