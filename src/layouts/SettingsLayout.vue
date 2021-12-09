<template>
  <div class="settings-layout">
    <Headbar/>

    <div class="container">
      <div class="main">

        <div class="sidebar">

          <div class="sidebar-items" v-if="tabs">
            <router-link
              active-class="active"
              v-for="tab in tabs"
              :to="tab.url"
              :key="tab.key"
              class="item"
            >
              {{tab.text}}
            </router-link>

            <router-link
              active="active"
              to="/accounts/convert-to-professional-account"
              class="prof bluebtn"
            >
              Profesyonel Hesaba Geçiş Yap
            </router-link>
          </div>

          <div class="banner">
            <icon-base :width="60" :height="12" :viewBoxSize="500" :viewBoySize="100">
              <meta-icon/>
            </icon-base>

            <router-link to="/" class="bluebtn"> Hesaplar Merkezi </router-link>

            <div class="text">
              Hikaye ve gönderi paylaşımı ve giriş yapma dahil Instagram, Facebook uygulaması ve Messenger arasındaki bağlantılı deneyimler için ayarları kontrol et.
            </div>
          </div>

        </div>

        <div class="content">
          <slot/>
        </div>

      </div>

      <Footer/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Headbar from '@/components/Headbar.vue';
import Footer from '@/components/Footer.vue';
import IconBase from '@/components/IconBase.vue';
import MetaIcon from '@/components/icons/MetaIcon.vue';

export default Vue.extend({
  components: {
    Headbar,
    Footer,
    IconBase,
    MetaIcon,
  },

  data() {
    return {
      tabs: [{
        url: '/accounts/edit',
        text: 'Profili Düzenle',
      },
      {
        url: '/accounts/password/change',
        text: 'Şifreyi Değiştir',
      },
      {
        url: '/accounts/manage-access',
        text: 'Uygulamalar ve İnternet Siteleri',
      },
      {
        url: '/emails/settings',
        text: 'E-posta ve SMS',
      },
      {
        url: '/push/web/settings',
        text: 'Anında İlet Bildirimleri',
      },
      {
        url: '/accounts/contact-history',
        text: 'Kişileri Yönet',
      },
      {
        url: '/accounts/privacy-and-security',
        text: 'Gizlilik ve Güvenlik',
      },
      {
        url: '/session/login-activity',
        text: 'Giriş Hareketleri',
      },
      {
        url: '/emails/emails-sent',
        text: 'Instagram\'dan E-postalar',
      }],
    };
  },
});
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 735px) {
    .container {
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;

      .sidebar {
        display: none;
      }
    }
  }

  @media only screen and (min-width: 735px) {
    .container {
      padding-left:72px;
      padding-right: 72px;
      padding-top: 30px;

      .sidebar {
        display: flex;
      }
    }
  }

  .settings-layout {
    width: 100%;
    height: 100%;
    background: white;
    overflow: hidden;

    .container {
      background: #fafafa;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: auto;

      a {
        color:black;
        text-decoration: none;
      }

      .main {
        border: 1px solid #dbdbdb;
        display: flex;
        gap:5px;
        background: white;
        width: 100%;

        .sidebar {
          flex-direction: column;
          justify-content: space-between;
          min-width: 237px;
          max-width: 237px;
          font-size: 16px;
          border-right: 1px solid #dbdbdb;
          flex: 0;
          height: 100%;

          .bluebtn {
            color: #0095f6;
            font-weight: 600;
            cursor: pointer;
          }

          .prof {
            padding: 16px;
            margin-left: 16px;
          }

          .sidebar-items {
            display: flex;
            flex-direction: column;

            .active {
              border-left: 2px solid black;
              font-weight: 600;
            }

            .item {
              padding: 16px;
              padding-left: 30px;
              flex: 1;
              cursor: pointer;
              height: 56px;

              .break {
                width: 100%;
                white-space: break-word;
              }

              &:hover {
                border-left: 2px solid rgba(0, 0, 0, 0.5);
                background: rgba(100, 100, 100, 0.1);
              }
            }
          }

          .banner {
            display: flex;
            flex-direction: column;
            gap: 16px;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            padding-top: 28px;
            padding-bottom: 28px;
            padding-left: 32px;
            padding-right: 20px;

            .text {
              font-size: 12px;
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }

        .content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
</style>
