<template>
  <div class="post-container">
    <div class="post-titlebar">
      <div class="post-title">
        <router-link :to="`/${data.owner.username}`" class="post-profile-image">
          <user-picture :size="32" :src="data.owner.picture" />
        </router-link>

        <router-link class="link" :to="`/${data.owner.username}`">
          <span class="username">{{data.owner.username}}</span>
        </router-link>
        </div>

        <div class="button" @click="toggleDetailModal">
          <icon-base :width="32" :height="32" :viewBoxSize="24" :viewBoySize="24">
            <details-icon/>
        </icon-base>
        </div>
    </div>

    <div class="post-image">
      <img :src="data.pictures[0].src" alt="asd">
    </div>

    <div class="post-description">
      <div class="post-description-buttons">
        <div class="post-description-buttons-left">

          <div class="button">
            <icon-base :width="24" :height="24">
              <like-icon/>
            </icon-base>
          </div>

          <div class="button" @click="toggleShowWidePost">
            <icon-base :width="24" :height="24">
              <comment-icon/>
            </icon-base>
          </div>

          <div class="button">
            <icon-base :width="24" :height="24">
              <share-icon/>
            </icon-base>
          </div>

        </div>

        <div class="post-description-buttons-right">
          <div class="button">
            <icon-base :width="24" :height="24">
              <collection-icon/>
            </icon-base>
          </div>
        </div>
      </div>

      <div class="post-description-text">
        <span>{{data.likes.length}} beğenme</span>
      </div>

      <div class="post-description-subText">
        <router-link :to="`/${data.owner.username}`" class="username">{{data.owner.username}}</router-link> <span class="description"> {{data.description}}</span>
      </div>

      <div class="post-description-comments">
        <span>{{data.comments.length}} yorumun tümünü gör</span>
      </div>
    </div>

    <div class="post-comment">
      <div class="left">
        <icon-base :width="24" :height="24">
          <emoji-icon/>
        </icon-base>

        <input type="text" placeholder="Yorum ekle..."/>
      </div>
      <div class="right">
        <button>
          Paylaş
        </button>
      </div>
    </div>

    <modal @close="showDetailModal = false" v-if="showDetailModal">
      <post-info/>
    </modal>

    <modal @close="showWidePost = false" v-if="showWidePost">
      <wide-post/>
    </modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import UserPicture from '@/components/UserPicture.vue';
import DetailsIcon from '@/components/icons/DetailsIcon.vue';
import IconBase from '@/components/IconBase.vue';
import LikeIcon from '@/components/icons/LikeIcon.vue';
import CommentIcon from '@/components/icons/CommentIcon.vue';
import ShareIcon from '@/components/icons/ShareIcon.vue';
import CollectionIcon from '@/components/icons/CollectionIcon.vue';
import EmojiIcon from '@/components/icons/EmojiIcon.vue';
import Modal from '@/components/Modal.vue';
import PostInfo from '@/components/PostInfo.vue';
import WidePost from '@/components/WidePost.vue';

export default Vue.extend({
  components: {
    UserPicture,
    DetailsIcon,
    IconBase,
    LikeIcon,
    CommentIcon,
    ShareIcon,
    CollectionIcon,
    EmojiIcon,
    Modal,
    PostInfo,
    WidePost,
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  methods: {
    toggleDetailModal() {
      this.showDetailModal = true;
    },

    toggleShowWidePost() {
      this.showWidePost = true;
    },
  },

  data() {
    return {
      showDetailModal: false,
      showWidePost: false,
    };
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

  .post-container {
    width: 100%;
    background: white;
    border: 1px solid rgba(0,0,0,0.1);
  }

  .button{
    cursor: pointer;

    &:hover {
      color: $instagram-gray;
    }
  }

  .post-titlebar {
    display:flex;
    justify-content: space-between;
    height: 60px;
    background: white;
    align-items: center;
    padding-right: 16px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    width: 100%;

    .post-title {
      box-sizing: border-box;
      padding: 14px;
      padding-left: 16px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      width: 100%;

      .link {
        text-decoration: none;
        color: black;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .post-profile-image {
        box-sizing: border-box;
        cursor: pointer;
      }

      span {
        cursor:pointer;
        font-weight: 600;
        font-size: 14px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .post-image {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    overflow: hidden;

    img{
      width: 100%;
      height: 100%;
    }
  }

  .post-description {
    font-size: 14px;
    padding-left: 16px;
    padding-bottom: 16px;
    border-top: 1px solid rgba(0,0,0,0.1);

    button {
    border: none;
    background: transparent;
    cursor: pointer;
    color: black;

    :hover {
      color: rgba(0,0,0,0.6);
    }
  }

    .post-description-buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 4px;
      padding-top: 6px;
      padding-bottom: 8px;
      padding-right: 16px;

      .post-description-buttons-left {
        display: flex;
        gap: 10px;
      }
    }

    .post-description-text {
      span {
        font-weight: 600;
        color: rgba(0, 0, 0, 0.9);
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .post-description-subText {
      padding-top: 8px;

      .username {
        font-weight: 600;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .post-description-comments {

      span {
        color: rgba(0, 0, 0, 0.6);
        padding-top: 8px;
        cursor: pointer;
      }
    }
  }

  .post-comment {
    box-sizing: border-box;
    padding-top: 8px;
    padding-left: 16px;
    padding-bottom: 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    width: 100%;

    .left {
      display: flex;
      gap:16px;
      width: 100%;
      font-size: 14px;

      svg {
        cursor: pointer;
      }

      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
      }
    }

    .right {
      button {
        color: #0095f6;
        border: none;
        background: transparent;
        cursor: pointer;
        opacity: 30%;
        padding-right: 16px;
      }

      :hover {
        opacity: 100%;
      }
    }
  }
</style>
