<template>
  <div :class="isMe ? 'message-sended-by-me' : 'message-sended-by-opponent'">
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    isMe: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
  .message-sended-by-me {
    display: flex;
    background-color: rgba($color: #000000, $alpha: 0.1);
    max-width: 234px;
    padding: 16px;
    border-radius: 20px;
  }

  .message-sended-by-opponent {
    display: flex;
    border: 1px solid rgba($color: #000000, $alpha: 0.1);
    max-width: 234px;
    padding: 16px;
    border-radius: 20px;
  }
</style>
