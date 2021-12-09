<template>
  <div class="container">
    <headbar/>

    <div class="main">
      <div class="user-container">
        <div class="picture">

          <user-picture
            :src="profile.pic"
            type="watched-story"
            :size="150"
          />

        </div>

        <div class="title">
          <div class="user-actions">
            <div class="username">{{profile.name}}</div>

            <div class="action">
              <Button
                :backgroundColor="$route.params.id === '_meeyzt' ? 'white':'blue'"
                :textColor="$route.params.id === '_meeyzt' ? 'black':'white'"
              >
                {{$route.params.id === '_meeyzt' ? 'Profili Düzenle' : 'Takip Et'}}
              </Button>
            </div>

            <div class="settings">
              <icon-base
                :width="24"
                :height="24"
                :viewBoxSize="$route.params.id !== '_meeyzt' ? 24 : 48"
                :viewBoySize="$route.params.id !== '_meeyzt' ? 24 : 48"
              >
                <component :is="$route.params.id === '_meeyzt' ? 'settings-icon' : 'details-icon'"/>
              </icon-base>
            </div>
          </div>

          <div class="user-details">
            <div class="post-count">
              <div class="bold">{{profile.postsCount}}</div>

              <div>gönderi</div>
            </div>

            <div class="followers-count">
              <div class="bold">{{profile.followers}}</div>

              <div>takipçi</div>
            </div>

            <div class="following-count">
              <div class="bold">{{profile.following}}</div>

              <div>takip</div>
            </div>
          </div>

          <div class="biography">
            <div class="name">
              {{profile.name}}
            </div>

            <div class="bio" v-html="profile.biography"/>
          </div>
        </div>

      </div>

      <div class="stories">
        <div class="story" v-for="story in profile.stories" :key="story.url">
          <user-picture
            type="watched-story"
            :src="story.url"
            :size="77"
          />

          <div>
            {{story.text}}
          </div>
        </div>
      </div>

      <div class="tabs">
        <router-link active-class="active" exact class="tab" :to="`/${$route.params.id}/${tab.link}`" replace v-for="tab in tabs" :key="tab.link">
            <div>
              <icon-base :width="16" :height="16" :viewBoxSize="tab.vx" :viewBoySize="tab.vy">
                <component :is="tab.component"/>
              </icon-base>
            </div>

            <div>
              {{tab.text }}
            </div>
        </router-link>
      </div>

      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Headbar from '@/components/Headbar.vue';
import UserPicture from '@/components/UserPicture.vue';
import Button from '@/components/Button.vue';
import IconBase from '@/components/IconBase.vue';
import SettingsIcon from '@/components/icons/SettingsIcon.vue';
import DetailsIcon from '@/components/icons/DetailsIcon.vue';
import GridIcon from '@/components/icons/GridIcon.vue';
import VideosIcon from '@/components/icons/VideosIcon.vue';
import CollectionIcon from '@/components/icons/CollectionIcon.vue';
import TagIcon from '@/components/icons/TagIcon.vue';

export default Vue.extend({
  components: {
    Headbar,
    UserPicture,
    Button,
    IconBase,
    SettingsIcon,
    DetailsIcon,
    GridIcon,
    VideosIcon,
    CollectionIcon,
    TagIcon,
  },

  data() {
    return {
      tabs: [{
        link: '',
        text: 'GÖNDERİLER',
        component: 'grid-icon',
        vx: 48,
        vy: 48,
      },
      {
        link: 'channel',
        text: 'VİDEOLAR',
        component: 'videos-icon',
        vx: 24,
        vy: 24,
      },
      {
        link: 'saved',
        text: 'KAYDEDİLENLER',
        component: 'collection-icon',
        vx: 48,
        vy: 48,
      },
      {
        link: 'tagged',
        text: 'ETİKETLENENLER',
        component: 'tag-icon',
        vx: 48,
        vy: 48,
      }],
    };
  },

  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .main {
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 30px;
      padding-top: 60px;
      height: 100%;
      overflow: auto;

      .user-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        width: 100%;

        .picture {
          flex-grow: 1;
          flex-basis: 0;
          flex-shrink: 0;
          justify-content: flex-end;
          display: flex;
        }

        .title {
          flex:2;

          .bold {
            font-weight: 600;
          }

          .user-actions {
            display: flex;
            gap:20px;
            align-items: center;

            .username {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 28px;
            }
            .action {
              font-size: 14px;
            }
            .settings {
              cursor: pointer;
            }
          }

          .user-details {
            padding-top: 20px;
            display: flex;
            gap: 40px;

            .post-count {
              display: flex;
              gap:5px;
            }

            .followers-count {
              display: flex;
              gap:5px;
              cursor: pointer;
            }

            .following-count {
              display: flex;
              gap:5px;
              cursor: pointer;
            }
          }
          .biography {
            padding-top:20px;

            .name {
              font-weight: 600;
            }
            .bio {
              font-size: 16px;
              line-height: 24px;
              word-wrap: break-word;
            }
          }
        }
      }

      .stories {
        display: flex;
        padding-top: 15px;
        overflow: auto;
        gap:20px;
        margin-bottom: 44px;
        justify-content: center;

        .story {
          padding: 10px 15px;
          width: 115px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
      }

      .tabs {
        border-top: 1px solid rgba(0,0,0,0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 60px;

        .tab {
          padding-top: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: gray;
          text-decoration: none;
          font-weight: 600;

          &:visited {
            text-decoration: none;
          }
        }

        .active {
          border-top: 1px solid rgba(0, 0, 0, 0.8);
        }
      }

    }
  }
</style>
