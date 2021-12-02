<template>
  <div class="edit">
      <div v-if="title" class="title">
        {{ title }}
      </div>
      <div class="content">
        <div v-if="inputHeight" class="input">
          <Input :placeholder="placeholder" :height="inputHeight"/>
        </div>
        <div class="description-area">
          <div v-if="descriptionTitle" class="title">{{ descriptionTitle }}
          </div>
          <div>
            <span v-if="description">{{ description }}
            <a v-if="linkUrl" class="link" :href="linkUrl">{{ linkText }}</a>
            </span>
          </div>
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

  props: {
    title: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    inputHeight: {
      type: Number,
    },
    descriptionTitle: {
      type: String,
    },
    description: {
      type: String,
    },
    linkUrl: {
      type: String,
    },
    linkText: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.edit {
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    height: 25px;
  }

  .content {
    display: flex;
    flex-direction: column;

    .input {

    }

    .description-area {
      flex-direction: column;
      display: flex;
      margin: 16px 0 8px 0;
      gap: 8px;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      color: rgb(142, 142, 142);
      white-space:pre-wrap;

      .title {
        font-size: 14px;
        font-weight: 600;
      }

      .link {
        text-decoration: none;
        color: rgb(0, 149, 246);
      }
    }
  }
}
</style>
