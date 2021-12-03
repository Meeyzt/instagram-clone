<template>
  <div class="password-reset">
    <div v-if="title" class="title">
      {{ title }}
    </div>
    <div class="content">
      <div v-if="inputHeight" class="input">
        <Input type="text" v-model="inputData" :isFilled="inputData !== ''"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Input from '@/components/Input.vue';

export default Vue.extend({
  components: {
    Input,
  },

  data() {
    return {
      inputData: '',
    };
  },

  props: {
    title: {
      type: String,
    },
    inputHeight: {
      type: Number,
    },
  },
});
</script>

<style lang="scss" scoped>
.password-reset {
  display: flex;
  flex-direction: column;
  max-width: 449px;

  @media screen and (min-width: 736px) {
    flex-direction: row;
    align-items: center;
  }

  .title {
    display: flex;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    height: 25px;
    align-items: center;

    @media screen and (min-width: 736px) {
      padding-right: 32px;
      width: 194px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;

    .input {

    }
  }
}
</style>
