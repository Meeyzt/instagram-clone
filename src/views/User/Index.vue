<template>
<profile-layout :profile="{}">
  <router-view/>
</profile-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import ProfileLayout from '@/layouts/ProfileLayout.vue';

export default Vue.extend({
  components: {
    ProfileLayout,
  },

  data() {
    return {
    };
  },
});
</script>
