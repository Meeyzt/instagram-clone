<template>
  <div class="wide-post">
    <div class="img">
      <img src="https://picsum.photos/700/900" alt="asd">
    </div>

    <div class="container">

      <div class="header">

        <div class="left">
          <user-picture src="https://picsum.photos/150/150" :size="32"/>

          <div class="title">thefunmarvel</div>

          <div class="dot" />

          <div>Takiptesin</div>
        </div>

        <div class="right">
          <icon-base :width="24" :height="24" :viewBoxSize="24" :viewBoySize="24">
            <details-icon/>
          </icon-base>
        </div>

      </div>

      <div class="comments">

        <div class="comment" v-for="index in 20" :key="index">

          <div class="base">
            <div class="picture">
              <user-picture src="https://picsum.photos/150/150" :size="32"/>
            </div>

            <div class="title">
              <div class="text">
                <span>thefunmarvel</span> Spiderman yeni fragman
              </div>

              <div class="date">1g</div>
            </div>
          </div>

          <button>
            <icon-base :width="14" :height="14">
              <like-icon/>
            </icon-base>
          </button>

        </div>

      </div>

      <div class="footer">

        <div class="head">

          <div class="actions">
            <div class="left">
              <button>
                <icon-base :width="24" :height="24">
                  <like-icon/>
                </icon-base>
              </button>

              <button>
                <icon-base :width="24" :height="24">
                  <comment-icon/>
                </icon-base>
              </button>

              <button>
                <icon-base :width="24" :height="24">
                  <share-icon/>
                </icon-base>
              </button>
            </div>

            <div class="right">
              <button>
              <icon-base :width="24" :height="24">
                  <collection-icon/>
                </icon-base>
              </button>
            </div>

          </div>

          <div class="like">
            <user-picture src="https://picsum.photos/150/150" :size="20"/>
            <span>Ayça ve 42.950 diğer kişi</span> beğendi
          </div>

          <div class="date">
            1 GÜN ÖNCE
          </div>
        </div>
        <div class="bottom">
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import IconBase from './IconBase.vue';
import UserPicture from './UserPicture.vue';
import DetailsIcon from './icons/DetailsIcon.vue';
import ShareIcon from './icons/ShareIcon.vue';
import CommentIcon from './icons/CommentIcon.vue';
import LikeIcon from './icons/LikeIcon.vue';
import CollectionIcon from './icons/CollectionIcon.vue';
import EmojiIcon from './icons/EmojiIcon.vue';

export default Vue.extend({
  components: {
    UserPicture,
    DetailsIcon,
    IconBase,
    ShareIcon,
    CommentIcon,
    LikeIcon,
    CollectionIcon,
    EmojiIcon,
  },

});
</script>

<style lang="scss" scoped>
  .wide-post {
    box-sizing: border-box;
    background: white;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;

    .img {
      background: black;
      width: 100%;
      display: flex;
      justify-content: center;

      img {
        min-width: 100px;
        max-width: 100%;
      }
    }

    .container {
      width: 50%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .header {
        padding: 8px 16px;
        display: flex;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        align-items: center;
        justify-content: space-between;

        .left {
          display: flex;
          gap: 10px;
          align-items: center;

          .title {
            font-weight: 600;

            &:hover {
              text-decoration: underline;
            }
          }

          .dot {
            width: 1px;
            height: 0;
            border-radius: 99999px;
            border: 2px solid black;
          }
        }
      }

      .comments {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items: start;
        height: 100%;
        width: 100%;
        padding: 12px 16px;
        overflow: auto;

        .comment {
          width: 100%;
          display: flex;
          padding-top: 12px;
          padding-bottom: 16px;
          justify-content: space-between;
          align-items: center;
          gap: 5px;

          button {
              border: 0;
              background: transparent;
              cursor: pointer;

              &:hover {
                color: rgba(0, 0, 0, 0.6);
              }
            }

          .base {
            height: 100%;
            display: flex;
            align-items: center;
            gap: 5px;

            .picture {
              cursor: pointer;
            }

            .title {
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              gap: 10px;

              .text {
                span {
                  font-weight: 600;
                  cursor: pointer;

                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
              .date {
                color: rgba(0, 0, 0, 0.3);
                font-size: 12px;
              }
            }
          }

        }
      }

      .footer {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;

      .head {
        box-sizing: border-box;
        padding: 8px 16px;
        display: flex;
        gap: 8px;
        flex-direction: column;
        width: 100%;
        padding-bottom: 8px;

        .actions {
          width: 100%;
          display: flex;
          justify-content: space-between;

          button {
              border:0;
              background: transparent;
              cursor:pointer;

              &:hover {
                color: rgba(0, 0, 0, 0.6)
              }
            }

          .left {
            display: flex;
            gap: 10px;
          }
        }

        .like {
          display: flex;
          align-items: center;
          width: 100%;
          gap: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          line-clamp: 2;

          div {
            cursor: pointer;
          }

          span {
            font-weight: 600;

            &:hover {
              cursor:pointer;
              text-decoration: underline
            }
          }
        }

        .date {
          color: rgba(0, 0, 0, 0.5);
          font-size: 10px;
        }

      }

      .bottom {
        box-sizing: border-box;
        padding-top: 10px;
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
    }
    }
}
</style>
