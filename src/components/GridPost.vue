<template>
  <div class="gridPost">
    <div class="photo">
      <img src="https://picsum.photos/900/900" alt="wqd" />
      <div class="hover">
        <div class="hover-item-center">
          <icon-base :width="19" :height="19">
            <like-icon :filled="true"/>
          </icon-base>
          52
        </div>

        <div class="hover-item-center">
          <div class="commenticon"/>
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

export default Vue.extend({
  components: {
    IconBase,
    LikeIcon,
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
        .hover {
          display: flex;
        }
      }

      img {
        object-fit: center;
        width: 100%;
        height: 100%;
      }

      .hover {
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

        .hover-item-center {
          display: flex;
          align-items: center;
          gap:5px;
          font-size: 14px;
        }

        .commenticon {
          background-image: url('https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png');
          background-repeat: no-repeat;
          background-size: 415px 365px;
          background-position: -360px -233px;
          height: 19px;
          width: 19px;
        }
      }
    }
  }
</style>
