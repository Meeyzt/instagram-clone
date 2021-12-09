<template>
<profile-layout :profile="usersProfile[0]">
  <router-view/>
</profile-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import ProfileLayout from '@/layouts/ProfileLayout.vue';

import usersProfile from '../../../public/users.json';

export default Vue.extend({
  components: {
    ProfileLayout,
  },

  data() {
    return {
      usersProfile,
    };
  },
});
</script>
