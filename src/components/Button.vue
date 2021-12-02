<template>
  <button :class="`${backgroundColor} text-${textColor}  ${truncate && 'truncate'}`">
    <slot />
  </button>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      backgroundColor: {
        type: String,
        required: true,
      },

      textColor: {
        type: String,
        required: true,
      },

      truncate: {
        type: Boolean,
        default: false,
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
    width:100%;
    height: 100%;
  }

  .truncate {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow:hidden;
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
