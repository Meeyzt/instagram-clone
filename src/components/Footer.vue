<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-content-links">
        <div class="footer-content-links-group">
          <div v-for="link in links" :key="link.id" class="footer-content-link">
            {{ link.text }}
          </div>
        </div>
      </div>
      <div class="footer-content-language-and-brand">
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

  data() {
    return {
      links: [
        {
          id: 1, text: 'Meta', link: '',
        },
        {
          id: 2, text: 'Hakkında', link: '',
        },
        {
          id: 3, text: 'Blog', link: '',
        },
        {
          id: 4, text: 'İş Fırsatları', link: '',
        },
        {
          id: 5, text: 'Yardım', link: '',
        },
        {
          id: 5, text: 'API', link: '',
        },
        {
          id: 5, text: 'Gizlilik', link: '',
        },
        {
          id: 5, text: 'Koşullar', link: '',
        },
        {
          id: 5, text: 'Başlıca Hesaplar', link: '',
        },
        {
          id: 5, text: 'Konu Etiketleri', link: '',
        },
        {
          id: 5, text: 'Konumlar', link: '',
        },
        {
          id: 5, text: 'Instagram Lite', link: '',
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
  background-color: white;
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
  color: rgba(142, 142, 142,1);
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  box-sizing: border-box;
  cursor: pointer;
}

.footer-content-language-and-brand {
  display: flex;
  margin: 12px 0;
  justify-content: center;
  width: 100%;
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

.arrow-icon {
  transform: rotate(180deg);
  width: 100%;
  height: 100%;
}
</style>
