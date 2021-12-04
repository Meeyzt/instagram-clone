<template>
  <div class="holder">
    <Headbar/>
    <div class="messages">
      <div class="sidebar">
        <div class="head">
          <div class="left"></div>
          <div class="mid">
            <div>_meeyzt</div>

            <icon-base :width="20" :height="20">
              <arrow-icon />
            </icon-base>
          </div>

          <div class="right">
            <icon-base :width="24" :height="24">
              <new-message-icon />
            </icon-base>
          </div>
        </div>

        <ul class="message-list">
          <li v-for="message in messageData" :key="message.username" class="message">
            <div class="item">
              <div>
                <user-picture class="picture" :src="message.pic" :size="56" />
              </div>
              <div class="text">
                <div>{{message.username}}</div>
                <div class="sub-text text-gray">
                  <div class="message-text">{{message.message}}</div>
                  <span>·</span>
                  <span>{{message.duration}}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>

      </div>

      <div class="content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @media only screen and (max-width: 735px) {
    .messages {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;

      .sidebar {
        display: none;
      }
    }
  }

  @media only screen and (min-width: 735px) {
    .messages {
      margin-left:72px;
      margin-right: 72px;
      margin-top: 30px;

      .sidebar {
        display: block;
      }
    }
  }

.holder {
  background: #fafafa;
  height: 100%;

  .messages {
    height:100%;
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: white;

    .sidebar {
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      width: 300px;

      .head {
        padding-left: 20px;
        padding-right: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        gap: 8px;
        height: 60px;
        font-size: 16px;

        .left {
          width: 32px;
        }

        .mid {
          flex: 1;
          display: flex;
          justify-content: center;
          font-weight: 600;
          gap: 5px;
          cursor: pointer;
          align-items: center;

          svg {
            transform: rotate(180deg);
          }
        }

        .right {
          flex: 0;
        }
      }

      .message-list {
        text-decoration: none;
        list-style-type: none;
        padding: 0;
        overflow-y: auto;
        width: 100%;
        font-size: 14px;

        .message {
          cursor: pointer;

          &:hover {
            background: rgba(0, 0, 0, 0.01);
          }

          .item {
            display: flex;
            align-items: center;
            gap:12px;
            padding: 8px 20px;
            width: 100%;

            .sub-text {
              display: flex;
              gap: 3px;
              max-width: 200px;
              overflow: hidden;
              text-overflow: ellipsis;

              .message-text {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }

        }
      }
    }
  }
}

</style>

<script lang="ts">
import Vue from 'vue';
import IconBase from '@/components/IconBase.vue';
import NewMessageIcon from '@/components/icons/NewMessageIcon.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import UserPicture from '@/components/UserPicture.vue';
import Headbar from '@/components/Headbar.vue';

export default Vue.extend({
  components: {
    IconBase,
    NewMessageIcon,
    ArrowIcon,
    UserPicture,
    Headbar,
  },

  data() {
    return {
      messageData: [{
        username: '_meeyzt',
        pic: 'https://static-cdn.jtvnw.net/jtv_user_pictures/6b3516d5-6103-411e-ab1b-f94a9403d510-profile_image-70x70.png',
        message: 'Sana bir hikaye gönderdi',
        duration: '2d',
      },
      {
        username: 'osmnbrk',
        pic: 'https://i.pinimg.com/236x/4a/11/91/4a1191144a10a1e6beccfa44842584ca.jpg',
        message: 'Hikayesinde senden bahsetti',
        duration: '30d',
      },
      {
        username: 'tayfun',
        pic: 'https://i.ytimg.com/vi/l8dvHzmBHgI/hqdefault.jpg',
        message: 'Bir mesaj gönderdi',
        duration: '2g',
      },
      {
        username: 'mehmethakkioglu',
        pic: 'https://i.pinimg.com/736x/c5/f9/a1/c5f9a1d44c2521abb99a47dba627e8a0.jpg',
        message: 'Bir mesaj gönderdin',
        duration: '24g',
      },
      {
        username: 'sexijojukberat',
        pic: 'https://fastly.4sqi.net/img/user/130x130/457421368_1VYEbuOp_qB-RQdgGX8_keysrA3014GQ5-VTNCDCu7Ks-KLOMuGjUR-Gv8Chj1ME2TekLK5Z1.jpg',
        message: 'Selam',
        duration: '1a',
      }],
    };
  },
});
</script>
