<template>
<div class="home-layout">
  <headbar/>
  <div class="main">
    <div class="content">
      <slot />
    </div>
    <div class="sidebar">
      <div class="header">
        <user-picture type="watched-story" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6b3516d5-6103-411e-ab1b-f94a9403d510-profile_image-70x70.png" :size="56"/>
        <div class="title">
          <div class="username">_meeyzt</div>
          <div class="name">Mehmet</div>
        </div>
        <div>
          <Button class="btn-bar" backgroundColor="transparent" textColor="blue" > Geçiş Yap </Button>
        </div>
      </div>
      <div class="suggested-acc-header">
        <div class="suggested-text">Senin İçin Önerilen</div>
        <div>
          <Button class="btn-bar" backgroundColor="transparent" textColor="black"> Tümünü Gör </Button>
        </div>
      </div>
      <div class="suggested-acc" v-for="(user, index) in userInfo" :key="index+99">
        <div class="user">
          <user-picture :src="user.pic" :size="32"/>
          <div class="title">
            <div class="username">{{user.username}}</div>
            <div class="name">{{user.detail}}</div>
          </div>
        </div>
        <div>
          <Button v-if="!user.request" class="btn-bar" backgroundColor="transparent" textColor="blue" > Takip Et </Button>
          <Button v-else class="btn-bar" backgroundColor="transparent" textColor="black" > İstek Gönderildi </Button>
        </div>
      </div>
      <Footer :isHome="true" class="footer"/>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

import Footer from '@/components/Footer.vue';
import UserPicture from '@/components/UserPicture.vue';
import Button from '@/components/Button.vue';
import Headbar from '@/components/Headbar.vue';

export default Vue.extend({
  components: {
    Footer,
    UserPicture,
    Button,
    Headbar,
  },

  data() {
    return {
      userInfo: [{
        username: '_meeyzt',
        pic: 'https://static-cdn.jtvnw.net/jtv_user_pictures/6b3516d5-6103-411e-ab1b-f94a9403d510-profile_image-70x70.png',
        request: true,
        detail: 'Senin İçin Öneriliyor',
      },
      {
        username: 'osmnbrk',
        pic: 'https://i.pinimg.com/236x/4a/11/91/4a1191144a10a1e6beccfa44842584ca.jpg',
        request: false,
        detail: 'tahirakbas takip ediyor',
      },
      {
        username: 'tayfun',
        pic: 'https://i.ytimg.com/vi/l8dvHzmBHgI/hqdefault.jpg',
        request: false,
        detail: 'Instagram\'da Yeni',
      },
      {
        username: 'mehmethakkioglu',
        pic: 'https://i.pinimg.com/736x/c5/f9/a1/c5f9a1d44c2521abb99a47dba627e8a0.jpg',
        request: false,
        detail: 'Senin İçin Öneriliyor',
      },
      {
        username: 'sexijojukberat',
        pic: 'https://fastly.4sqi.net/img/user/130x130/457421368_1VYEbuOp_qB-RQdgGX8_keysrA3014GQ5-VTNCDCu7Ks-KLOMuGjUR-Gv8Chj1ME2TekLK5Z1.jpg',
        request: false,
        detail: 'Senin İçin Öneriliyor',
      }],
    };
  },
});
</script>

<style lang="scss" scoped>
  @media screen and (min-width: 1000px){
    .main {
      padding: 32px 5vw 0 4vw ;

      .content {
        width: 600px;
      }
      .sidebar {
        display: block;
      }
    }
  }

  @media screen and (max-width: 1000px){
    .main {
      padding: 32px 0 0 0;

      .content {
        width: 600px;
      }
      .sidebar {
        display: none;
      }
    }
  }

  .home-layout {
    height: 100%;

    .main {
      display: flex;
      gap:20px;
      background: #fafafa;
      overflow: hidden;
      height: 93.33%;
      justify-content: center;

      .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        overflow-y: auto;
      }

      .sidebar {
        min-width: 290px;
        max-width: 290px;
        flex: 1;
        margin-bottom: 10px;
        margin-top: 18px;

        .btn-bar {
          font-size: 12px;
          font-weight: 600;
        }

        .header {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: start;
          font-size: 14px;

          img {
            flex:1;
          }

          .title {
            padding-left: 10px;
            font-size: 14px;
            gap: 10px;
            flex: 1;

            .username {
              font-weight: bold;
              cursor: pointer;
            }

            .name {
              color: rgba(0, 0, 0, 0.7);
              white-space: nowrap;
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
            white-space: nowrap;
          }
        }

        .suggested-acc {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 6px 0;
          font-size: 14px;

          .user {
            display: flex;
          }

          .title {
            padding-left: 10px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 5px;

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
              white-space: nowrap;
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
