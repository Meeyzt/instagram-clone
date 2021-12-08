<template>
  <div class="navbar-router">

    <router-link
      to="/"
      exact
    >
      <icon-base :width="22" :height="22">
        <home-icon :filled="$route.name !== 'Home' ? false : true"/>
      </icon-base>
    </router-link>

    <router-link
      to="/direct/inbox"
    >
      <icon-base :width="22" :height="22">
        <messenger-icon :filled="$route.matched[0].path !== '/direct' ? false : true"/>
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
    to="/explore"
    >
      <icon-base :width="22" :height="22">
        <explore-icon :filled="$route.name !== 'Explore' ? false : true"/>
      </icon-base>
    </router-link>

    <router-link
      to="/"
    >
      <icon-base :width="22" :height="22">
        <like-icon/>
      </icon-base>
    </router-link>

    <button class="user">
      <user-picture
        src="https://static-cdn.jtvnw.net/jtv_user_pictures/6b3516d5-6103-411e-ab1b-f94a9403d510-profile_image-70x70.png"
        :size="26"
        :type="!$route.params.id ? 'normal' : 'watched-story'"
      />

      <div class="acilirmenu">
        <router-link to="/_meeyzt" class="item">
          <icon-base :width="16" :height="16" :viewBoxSize="32" :viewBoySize="32">
            <profile-icon/>
          </icon-base>
          <div>Profil</div>
        </router-link>

        <div class="item">
          <icon-base :width="16" :height="16">
            <collection-icon/>
          </icon-base>
          <div>Kaydedildi</div>
        </div>

        <router-link to="/accounts/edit" class="item">
          <icon-base :width="16" :height="16">
            <settings-icon/>
          </icon-base>
          <div>Ayarlar</div>
        </router-link>

        <div class="item">
          <icon-base :width="16" :height="16" :viewBoxSize="32" :viewBoySize="32">
            <switch-icon/>
          </icon-base>
          <div>Hesap Değiştir</div>
        </div>

        <div class="item">
          <div>Çıkış Yap</div>
        </div>
      </div>
    </button>
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
import ProfileIcon from './icons/ProfileIcon.vue';
import CollectionIcon from './icons/CollectionIcon.vue';
import SettingsIcon from './icons/SettingsIcon.vue';
import SwitchIcon from './icons/SwitchIcon.vue';

export default Vue.extend({
  components: {
    IconBase,
    UserPicture,
    MessengerIcon,
    HomeIcon,
    ExploreIcon,
    AddPostIcon,
    LikeIcon,
    ProfileIcon,
    CollectionIcon,
    SettingsIcon,
    SwitchIcon,
  },
});
</script>

<style lang="scss" scoped>
  .navbar-router {
    display: flex;
    gap: 24px;
    color:black;
    align-items: center;
    height: 100%;

    .user {
      border: 0;
      background: transparent;

      .acilirmenu {
        display: none;
        position: absolute;
        background: white;
        border-radius: 10px 10px 5px 5px;
        box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.3);
        width: 230px;
        right: 20px;
        margin-top: 13px;
        z-index: 999999;

        .item {
          display: flex;
          align-items: center;
          width: 100%;
          font-size: 14px;
          gap: 12px;
          padding: 10px 20px;

          &:nth-child(1) {
            border-radius: 10px 10px 0 0;
          }

          &:nth-child(5) {
            border-top: 1px solid rgba($color: #000000, $alpha: 0.3);
            border-radius: 0 0 3px 3px;
          }

          &:hover {
            background: rgba($color: #000000, $alpha: 0.1);
          }
        }
      }

      &:focus-within{

        .acilirmenu {
          display: block;
        }
      }
    }

    a:visited {
      color: black;
      text-decoration: none;
      height:26px;
    }

    a {
      color: black;
      text-decoration: none;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
</style>
