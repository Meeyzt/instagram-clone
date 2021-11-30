<template>
<div class="home-layout">
  <div class="main">
    <slot />
    <div class="sidebar">
      <div class="header">
        <user-picture size="56"/>
        <div class="title">
          <div class="username">_meeyzt</div>
          <div class="name">Mehmet</div>
        </div>
        <Button backgroundColor="transparent" textColor="blue" text="geçiş yap" />
      </div>
      <div class="suggested-acc-header">
        <div class="suggested-text">Senin İçin Önerilen</div>
        <Button backgroundColor="transparent" textColor="black" text="tümünü gör"/>
      </div>
      <div class="suggested-acc" v-for="index in 3" :key="index+99">
        <div class="user">
          <user-picture size="32"/>
          <div class="title">
            <div class="username">ayseclk</div>
            <div class="name">Senin İçin Öneriliyor</div>
          </div>
        </div>
        <Button backgroundColor="transparent" textColor="blue" text="takip et"/>
      </div>
      <Footer class="footer" :isHome="true"/>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

import Footer from '@/components/Footer.vue';
import UserPicture from '@/components/UserPicture.vue';
import Button from '@/components/Button.vue';

export default Vue.extend({
  components: {
    Footer,
    UserPicture,
    Button,
  },
});
</script>

<style lang="scss" scoped>
  .home-layout {

    .main {
      display: flex;
      padding: 32px 72px;
      gap:20px;
      background: #fafafa;

      .sidebar {
        min-width: 290px;
        max-width: 290px;

        .header {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: start;

          .title {
            padding-left: 10px;
            font-size: 14px;
            gap: 10px;
            flex: 1;

            .username {
              font-weight: bold;
            }

            .name {
              color: rgba(0, 0, 0, 0.7);
            }
          }
        }

        .suggested-acc-header {
          width: 100%;
          padding-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;

          .suggested-text {
            color: rgba(0, 0, 0, 0.3);
            font-weight: 600;
          }
        }

        .suggested-acc {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 4px 0;
          font-size: 14px;

          .user {
            display: flex;
          }

          .title {
            padding-left: 5px;
            display: flex;
            justify-content: center;
            flex-direction: column;

            .username {
              font-weight: 600;
              cursor: pointer;

              &:hover {
                text-decoration: underline;
              }
            }

            .name {
              color: rgba(0, 0, 0, 0.4);
              font-size: 12px;
            }
          }
        }

        .footer {
          padding-top: 16px;
        }
      }
    }
  }

</style>
