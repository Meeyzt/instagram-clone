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
      <div :class="message.isMe ? 'message-box-by-me' : 'message-box-by-opposite'" v-for="message in messages[0].message" :key="message.id">
        <user-picture src="https://picsum.photos/200/200" :size="24"  v-if="!message.isMe"/>

        <message
          :isMe="message.isMe"
          :text="message.message"
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

import messages from '../../../public/Messages.json';

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
      messages,
    };
  },
});
</script>
