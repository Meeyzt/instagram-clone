<template>
  <div class="setting-checkbox">
    <div class="title">
      <div class="checkbox-area">
        <input class="checkbox" :id="id" type="checkbox" :checked="isChecked">
        <label :for="id">{{ title }}</label>
      </div>
    </div>
    <div class="description">
      {{ description }}
    </div>
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

    description: {
      type: String,
    },
  },

  created() {
    this.id = Math.floor(Math.random() * 10000);
  },
});
</script>

<style lang="scss" scoped>
.setting-checkbox {
  display: flex;
  flex-direction: column;
  gap: 6px;

  .title {
    .checkbox-area {
      display: flex;
      color: rgb(38, 38, 38);
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;

      .checkbox {
        margin-right: 5px;
      }
    }
  }

  .description {
    color: rgb(142, 142, 142);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
}
</style>
