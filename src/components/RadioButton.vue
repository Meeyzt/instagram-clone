<template>
  <div class="radio-button">
    <input type="radio" :id="id" :checked="isChecked" :name="name">
    <label :for="id">{{ title }}</label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      id: 0,
    };
  },

  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },

    title: {
      type: String,
    },

    name: {
      type: String,
      required: true,
    },
  },

  created() {
    this.id = Math.floor(Math.random() * 10000);
  },
});
</script>

<style lang="scss" scoped>

.radio-button {
  display: flex;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  gap: 8px;
  align-items: center;
}

</style>
