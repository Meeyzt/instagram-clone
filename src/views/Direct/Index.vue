<template>
    <messages-layout :messageData="Messages">
      <router-view/>
  </messages-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import MessagesLayout from '@/layouts/MessagesLayout.vue';
import Messages from '../../../public/Messages.json';

export default Vue.extend({
  components: {
    MessagesLayout,
  },

  data() {
    return {
      Messages,
    };
  },
});
</script>
