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
          <router-link active-class="active" tag="li" :to="`/direct/t/${message.username}`" v-for="message in inbox" :key="message.username" class="message">
            <div class="item">
              <div>
                <user-picture class="picture" :src="message.pic" :size="56" />
              </div>
              <div class="text">
                <div>{{message.username}}</div>
                <div class="sub-text text-gray">
                  <div class="message-text">{{message.lastMessage}}</div>
                  <span>·</span>
                  <span class="duration">{{durationTime(message.releaseDate)}}</span>
                </div>
              </div>
            </div>
          </router-link>
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
    .holder {
      .messages {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;

        .sidebar {
          display: none;
        }
      }
    }
  }

  @media only screen and (min-width: 735px) {
    .holder {
      .messages {
        margin-left:72px;
        margin-right: 72px;
        margin-top: 30px;

        .sidebar {
          display: block;
        }
      }
    }
  }

.holder {
  background: #fafafa;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;

  .messages {
    height:100%;
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: white;
    overflow: hidden;

    .sidebar {
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      width: 350px;

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

        .active {
            background: rgba(0, 0, 0, 0.05);
          }
        .message {
          cursor: pointer;

          &:hover {
            background: rgba(0, 0, 0, 0.05);
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

              .duration {
                white-space: nowrap;
              }
            }
          }

        }
      }
    }

    .content {
      height: 100%;
      width: 100%;
    }
  }
}

</style>

<script lang="ts">
import Vue from 'vue';
import dayjs from 'dayjs';

import IconBase from '@/components/IconBase.vue';
import NewMessageIcon from '@/components/icons/NewMessageIcon.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import UserPicture from '@/components/UserPicture.vue';
import Headbar from '@/components/Headbar.vue';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/tr');

dayjs.extend(relativeTime);
dayjs.locale('tr');

export default Vue.extend({
  components: {
    IconBase,
    NewMessageIcon,
    ArrowIcon,
    UserPicture,
    Headbar,
  },

  props: {
    inbox: {
      type: Array,
      required: true,
    },
  },

  created() {
    this.durationTime('2021-12-07T10:25:02');
  },

  methods: {
    durationTime(date:string):string {
      return dayjs().to(date);
    },
  },
});
</script>
