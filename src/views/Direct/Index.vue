<template>
    <messages-layout>
      <router-view/>
  </messages-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import MessagesLayout from '@/layouts/MessagesLayout.vue';

export default Vue.extend({
  components: {
    MessagesLayout,
  },
});
</script>
