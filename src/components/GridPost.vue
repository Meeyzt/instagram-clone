<template>
  <div class="gridPost">
    <div class="photo">
      <img src="https://picsum.photos/300/300" alt="wqd" />
      <div class="front">
        <div>
          <icon-base :width="24" :height="24">
            <like-icon :filled="true"/>
          </icon-base>
          52
        </div>

        <div>
          <icon-base :width="24" :height="24">
            <comment-icon :filled="true"/>
          </icon-base>
          69
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import IconBase from '@/components/IconBase.vue';
import LikeIcon from '@/components/icons/LikeIcon.vue';
import CommentIcon from '@/components/icons/CommentIcon.vue';

export default Vue.extend({
  components: {
    IconBase,
    LikeIcon,
    CommentIcon,
  },
});
</script>

<style lang="scss" scoped>
  .gridPost {
    width: 100%;
    height: 100%;
    position: relative;

    .photo {
      width: 100%;
      height: 100%;
      color: white;
      cursor: pointer;

      &:hover {
        .front {
          display: flex;
        }
      }

      .front {
        display: none;
        align-items: center;
        justify-content: center;
        position: absolute;
        gap: 10px;
        width: 100%;
        height: 100%;
        background: rgba(128, 128, 128, 0.5);
        top:0;
        left:0;
      }
    }
  }
</style>
