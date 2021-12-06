<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-content-links">
        <div v-if="!isHome" class="footer-content-links-group">
          <div v-for="link in links" :key="link.id" class="footer-content-link">
            {{ link.text }}
          </div>
        </div>
        <div v-if="isHome" class="footer-content-links-group-for-home">
          <div v-for="link in links" :key="link.id" class="footer-content-link-for-home">
            {{ link.text }}
            <div v-if="link.point" class="point">·</div>
          </div>
        </div>
      </div>
      <div v-if="!isHome" class="footer-content-language-and-brand">
        <div class="language-area">
          Türkçe
          <div class="language-arrow">
            <icon-base class="arrow-icon">
              <arrow-icon />
            </icon-base>
          </div>
        </div>
        <span class="brand-area">
          © 2021 Instagram from Meta
        </span>
      </div>
      <div v-if="isHome" class="footer-content-language-and-brand-for-home">
        <span class="brand-area-for-home">
          © 2021 Instagram from Meta
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ArrowIcon from './icons/ArrowIcon.vue';
import IconBase from './IconBase.vue';

export default Vue.extend({
  components: {
    ArrowIcon,
    IconBase,
  },

  props: {
    isHome: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      links: [
        {
          id: 'Foo1', text: 'Meta', link: '', point: true,
        },
        {
          id: 'Foo2', text: 'Hakkında', link: '', point: true,
        },
        {
          id: 'Foo3', text: 'Blog', link: '', point: true,
        },
        {
          id: 'Foo4', text: 'İş Fırsatları', link: '', point: true,
        },
        {
          id: 'Foo5', text: 'Yardım', link: '', point: true,
        },
        {
          id: 'Foo6', text: 'API', link: '', point: true,
        },
        {
          id: 'Foo7', text: 'Gizlilik', link: '', point: true,
        },
        {
          id: 'Foo8', text: 'Koşullar', link: '', point: true,
        },
        {
          id: 'Foo9', text: 'Başlıca Hesaplar', link: '', point: true,
        },
        {
          id: 'Foo10', text: 'Konu Etiketleri', link: '', point: true,
        },
        {
          id: 'Foo11', text: 'Konumlar', link: '', point: true,
        },
        {
          id: 'Foo12', text: 'Instagram Lite', link: '', point: false,
        },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>

.footer {
  display: flex;
  padding: 0 16px;
  background-color: transparent;
  width: 100%;
  box-sizing: border-box;
}

.footer-content {
  display: flex;
  margin-bottom: 52px;
  justify-content: flex-start;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
}

.footer-content-links {
  display: flex;
  margin-top: 24px;
  width: 100%;
}

.footer-content-links-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.footer-content-link {
  margin-bottom: 12px;
  margin-left: 8px;
  margin-right: 8px;
  color: rgb(142, 142, 142);
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  box-sizing: border-box;
  cursor: pointer;
}

.footer-content-links-group-for-home {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
}

.footer-content-link-for-home {
  display: flex;
  margin-bottom: 5px;
  color: rgb(199, 199, 199);
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  box-sizing: border-box;
  cursor: pointer;
}

.point {
  display: flex;
  margin: 0 2px;
  padding-top: 1px;
  align-items: center;
  justify-content: center;
}

.footer-content-language-and-brand {
  display: flex;
  margin: 12px 0;
  width: 100%;
  justify-content: center;
}

.footer-content-language-and-brand-for-home {
  display: flex;
  margin: 12px 0;
  width: 100%;
  justify-content: flex-start;
}

.language-area {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  color: rgba(142, 142, 142, 1);
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  justify-content: center;
  align-items: center;
}

.language-arrow {
  margin-left: 4px;
  width: 12px;
  height: 12px;
}

.brand-area {
  display: flex;
  margin-left: 16px;
  cursor: pointer;
  color: rgba(142, 142, 142, 1);
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  overflow: hidden;
  white-space: nowrap;
}

.brand-area-for-home {
  display: flex;
  cursor: pointer;
  color: rgba(199, 199, 199, 1);
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  overflow: hidden;
  white-space: nowrap;
  text-transform: uppercase;
}

.arrow-icon {
  transform: rotate(180deg);
  width: 100%;
  height: 100%;
}
</style>
