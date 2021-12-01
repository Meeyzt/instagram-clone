<template>
  <div class="navbar-router">

    <router-link
    to="/"
    >
      <icon-base :width="22" :height="22">
        <home-icon :filled="true"/>
      </icon-base>
    </router-link>

    <router-link
    to="/"
    >
      <icon-base :width="22" :height="22">
        <messenger-icon/>
      </icon-base>
    </router-link>

    <router-link
    to="/"
    >
      <icon-base :width="22" :height="22">
        <add-post-icon/>
      </icon-base>
    </router-link>

    <router-link
    to="/"
    >
      <icon-base :width="22" :height="22">
        <explore-icon/>
      </icon-base>
    </router-link>

    <router-link
    to="/"
    >
      <icon-base :width="22" :height="22">
        <like-icon/>
      </icon-base>
    </router-link>

    <router-link
    to="/"
    >
      <user-picture src="https://static-cdn.jtvnw.net/jtv_user_pictures/6b3516d5-6103-411e-ab1b-f94a9403d510-profile_image-70x70.png" size="22"/>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import IconBase from '@/components/IconBase.vue';
import UserPicture from '@/components/UserPicture.vue';

import MessengerIcon from '@/components/icons/MessengerIcon.vue';
import HomeIcon from '@/components/icons/HomeIcon.vue';
import ExploreIcon from '@/components/icons/ExploreIcon.vue';
import AddPostIcon from '@/components/icons/AddPostIcon.vue';
import LikeIcon from '@/components/icons/LikeIcon.vue';

export default Vue.extend({
  components: {
    IconBase,
    UserPicture,
    MessengerIcon,
    HomeIcon,
    ExploreIcon,
    AddPostIcon,
    LikeIcon,
  },
});
</script>

<style lang="scss" scoped>
  .navbar-router {
    display: flex;
    gap: 24px;
    color:black;
    align-items: center;

    a:visited {
      color: black;
      text-decoration: none;
    }
  }
</style>
