<template>
  <div class="components">

    <div class="component">
      <h1>SearchInput</h1>

      <SearchInput />
    </div>

    <div class="component">
      <h1>Icon</h1>

      <div class="nav-items">

        <icon-base :width="32" :height="32">
          <home-icon/>
        </icon-base>

        <icon-base :width="32" :height="32">
          <home-icon :filled="true"/>
        </icon-base>

        <icon-base :width="32" :height="32">
          <messenger-icon/>
        </icon-base>

        <icon-base :width="32" :height="32">
          <messenger-icon :filled="true"/>
        </icon-base>

        <icon-base :width="32" :height="32">
          <add-post-icon />
        </icon-base>

        <icon-base :width="32" :height="32">
          <add-post-icon :filled="true"/>
        </icon-base>

        <icon-base :width="32" :height="32">
          <explore-icon/>
        </icon-base>

        <icon-base :width="32" :height="32">
          <explore-icon :filled="true"/>
        </icon-base>

        <icon-base :width="32" :height="32">
          <like-icon/>
        </icon-base>

        <icon-base :width="32" :height="32">
          <like-icon :filled="true"/>
        </icon-base>

        <icon-base :width="32" :height="32">
          <comment-icon />
        </icon-base>

        <icon-base :width="32" :height="32">
          <share-icon />
        </icon-base>

        <icon-base :width="32" :height="32">
          <collection-icon />
        </icon-base>

        <icon-base :width="32" :height="32">
          <collection-icon :filled="true" />
        </icon-base>

      </div>
    </div>

    <div class="component">
      <h1>Button</h1>

      <Button text="Ben minnak bir butonum" />
    </div>

    <div class="component">
      <h1>UserPicture</h1>

      <div class="flex-row gap">
        <user-picture class="userPicture-small" />
        <user-picture class="userPicture-small" :story="true" />
      </div>
    </div>

    <div class="component">
      <h1>Post</h1>

      <div class="post">
        <post />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SearchInput from '@/components/SearchInput.vue';
import UserPicture from '@/components/UserPicture.vue';
import IconBase from '@/components/IconBase.vue';
import Post from '@/components/Post.vue';
import Button from '@/components/Button.vue';

import HomeIcon from '@/components/icons/HomeIcon.vue';
import MessengerIcon from '@/components/icons/MessengerIcon.vue';
import AddPostIcon from '@/components/icons/AddPostIcon.vue';
import ExploreIcon from '@/components/icons/ExploreIcon.vue';
import LikeIcon from '@/components/icons/LikeIcon.vue';
import CommentIcon from '@/components/icons/CommentIcon.vue';
import ShareIcon from '@/components/icons/ShareIcon.vue';
import CollectionIcon from '@/components/icons/CollectionIcon.vue';

export default Vue.extend({
  components: {
    SearchInput,
    Button,
    MessengerIcon,
    AddPostIcon,
    ExploreIcon,
    LikeIcon,
    Post,
    UserPicture,
    IconBase,
    CommentIcon,
    ShareIcon,
    HomeIcon,
    CollectionIcon,
  },
});
</script>

<style lang="scss" scoped>
  .components{
    width: 100%;
    height: 100%;

      .nav-items {
        display: flex;
        flex-direction: row;
        gap: 31px;
        align-items: center;
      }

    .component {
      padding: 10px;
      background: #995f99;

      &:nth-child(odd) {
        background: #beb;
      }
    }

    .userPicture-small {
      width: 100px;
      height: 100px;
    }

    .post {
      width: 600px;
    }

    .flex-row {
      display: flex;
    }

    .gap {
      gap: 10px;
    }
  }
</style>
