<template>
  <button :class="`${backgroundColor} text-${textColor}`"> {{text}} </button>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      text: {
        type: String,
        required: true,
      },

      backgroundColor: {
        type: String,
        required: true,
      },

      textColor: {
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
    padding: 8px;
  }

  .text-black {
    color:black;
  }

  .text-white {
    color:white;
  }

  .white {
    background-color: white;
    border: 1px solid rgba(0,0,0,0.2);
  }

  .blue {
    background-color: rgb(34, 151, 206);
  }
</style>
