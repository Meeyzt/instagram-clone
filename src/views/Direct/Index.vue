<template>
    <messages-layout :inbox="inbox">
      <router-view/>
  </messages-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import MessagesLayout from '@/layouts/MessagesLayout.vue';
import { IUserInbox } from '@/store/pages/messages/types';

export default Vue.extend({
  components: {
    MessagesLayout,
  },

  created() {
    this.$store.dispatch('getUserInbox', null, { root: true });
  },

  computed: {
    inbox(): Array<IUserInbox> {
      return this.$store.state.messages.userInbox;
    },
  },
});
</script>
