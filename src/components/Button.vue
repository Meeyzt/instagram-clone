<template>
  <button :class="`${backgroundColor} text-${textColor}`">
    <slot />
  </button>
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
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow:hidden;
    width:100%;
  }

  .text-black {
    color:black;
  }

  .transparent {
    background: transparent;
  }

  .text-white {
    color:white;
  }

  .text-blue {
    color: rgb(34, 151, 206);
  }

  .text-darkblue {
    color: #385185;
  }

  .white {
    background-color: white;
    border: 1px solid rgba(0,0,0,0.2);
    opacity: 1;

    &:disabled {
      opacity: .3;
    }
  }

  .blue {
    background-color: rgb(34, 151, 206);
    opacity: 1;

    &:disabled {
      opacity: .3;
    }
  }
</style>
