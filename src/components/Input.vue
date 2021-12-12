<template>
  <label
  class="search-bar"
  :class="{
    'halfopacity' : isDisabled,
  }">
    <label
      :class="{
        'text-sm': !isFilled,
        'text-xs -translate-y-2': isFilled,
      }"
      class="placeholder"
      v-if="placeholder && value !== null"
    >
      {{ placeholder }}
    </label>

    <input
      :class="{
        'topten': isFilled
      }"
      :type="type"
      :value="value"
      :disabled="isDisabled"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="$event.srcElement.blur(), $emit('keyup-enter')"
    />
  </label>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    value: {
      type: String,
      default: () => null,
    },

    type: {
      type: String,
      default: () => 'text',
    },

    placeholder: {
      type: String,
      default: () => null,
    },

    isFilled: {
      type: Boolean,
      default: () => false,
    },

    isDisabled: {
      type: Boolean,
      default: () => false,
    },
  },
});
</script>

<style lang="scss" scoped>

  .search-bar {
    width: 100%;
    height: 40px;
    display: flex;
    position: relative;
    background-color: #fafafa;
    border-radius: 4px;
    border: 1px solid rgba(229, 231, 235, 1);
    align-items: center;

    .text-sm {
      font-size: 14px;
      line-height: 20px;
    }

    .text-xs {
      font-size: 10px;
      line-height: 14px;
      transform: translateY(-12px);
    }

    .placeholder {
      position: absolute;
      right: 0;
      left: -5px;
      display: flex;
      align-items: center;
      height: 40px;
      padding-left: 12px;
      color: rgba(107, 114, 128,1);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: none;
      pointer-events: none;
      transition: all 1s ease-in-out;
      transform-origin: top;
      transition-duration: 200ms;
    }

    input {
      width: 100%;
      height: 40px;
      background: transparent;
      padding: 12px 8px;
      outline: none;
      border: 0;
    }

    .topten {
      padding-top: -40px;
    }
  }
</style>
