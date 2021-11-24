<template>
  <button> {{text}} </button>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      text: {
        type: String,
        required: true,
      },
    },
  });
</script>

<style lang="scss" scoped>
  button {
    border-radius: 6px;
    border:0;
    cursor: pointer;
    background-color: rgb(34, 151, 206);
    color: white;
    padding: 8px;
  }

  button:hover {
    transform:scale(1.1, 1.1);
    transition:all 1sn;
  }
</style>
