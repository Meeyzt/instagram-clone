<template>
  <div class="message-section">
    <div class="header">
      <div class="avatar">
        <div class="avatar-img">
          <user-picture src="https://picsum.photos/200/200" :size="24" />
        </div>

        <router-link :to="`/${$route.params.id}`" class="avatar-name">
          {{ $route.params.id }}
        </router-link>
      </div>

      <div class="info-btn">
        <icon-base :width="24" :height="24">
          <info-icon />
        </icon-base>
      </div>
    </div>

    <div class="content">
      <div :class="message.isMe ? 'message-box-by-me' : 'message-box-by-opposite'" v-for="message in messages" :key="message.id">
        <user-picture src="https://picsum.photos/200/200" :size="24"  v-if="!message.isMe"/>

        <message
          :isMe="message.isMe"
          :text="message.text"
        />
      </div>
    </div>

    <div class="footer">
      <div class="footer-margin">

        <div class="emoji">
        <icon-base :width="24" :height="24">
          <emoji-icon />
        </icon-base>
      </div>

      <div class="message-input">
        <input placeholder="Mesaj" type="text" />
      </div>

      <div class="add-photo">
        <icon-base :width="24" :height="24">
          <gallery-icon />
        </icon-base>
      </div>

      <div class="send-heart">
          <icon-base :width="24" :height="24">
            <like-icon />
          </icon-base>
      </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Message from '@/components/Message.vue';
import UserPicture from '@/components/UserPicture.vue';
import IconBase from '@/components/IconBase.vue';
import InfoIcon from '@/components/icons/InfoIcon.vue';
import LikeIcon from '@/components/icons/LikeIcon.vue';
import GalleryIcon from '@/components/icons/GalleryIcon.vue';
import EmojiIcon from '@/components/icons/EmojiIcon.vue';

export default Vue.extend({
  components: {
    Message,
    UserPicture,
    IconBase,
    InfoIcon,
    EmojiIcon,
    GalleryIcon,
    LikeIcon,
  },

  data() {
    return {
      messages: [
        {
          id: 0, text: 'asd', isMe: true,
        },
        {
          id: 1, text: 'asd', isMe: false,
        },
        {
          id: 2, text: 'asd', isMe: true,
        },
        {
          id: 3, text: 'asd', isMe: true,
        },
        {
          id: 4, text: 'asd', isMe: true,
        },
        {
          id: 5, text: 'asd', isMe: true,
        },
        {
          id: 6, text: 'asd', isMe: false,
        },
        {
          id: 7, text: 'asd', isMe: true,
        },
        {
          id: 8, text: 'asd', isMe: true,
        },
        {
          id: 9, text: 'asd', isMe: true,
        },
        {
          id: 10, text: 'asd', isMe: false,
        },
        {
          id: 11, text: 'asd', isMe: true,
        },
        {
          id: 12, text: 'asd', isMe: true,
        },
      ],
    };
  },
});
</script>
