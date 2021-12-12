<template>
<profile-layout :profile="profile">
  <router-view/>
</profile-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import ProfileLayout from '@/layouts/ProfileLayout.vue';
import { IProfile } from '@/store/pages/profile/types';

export default Vue.extend({
  components: {
    ProfileLayout,
  },

  created() {
    this.$store.dispatch('getProfile', null, { root: true });
  },

  computed: {
    profile(): Array<IProfile> {
      return this.$store.state.profile.profile;
    },
  },
});
</script>
