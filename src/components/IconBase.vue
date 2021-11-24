<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${viewBoxSize} ${viewBoxSize}`"
    fill="currentColor"
  >
    <slot/>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 16,
    },

    height: {
      type: Number,
      default: 16,
    },

    viewBoxSize: {
      type: Number,
      default: 48,
    },
  },
};
</script>
