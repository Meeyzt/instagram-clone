<template>
  <settings-layout>
    <div class="web-push-settings-page">
      <div v-for="item in items" :key="item.id" class="notification-area">
        <div class="title">
          {{ item.title }}
        </div>
        <div v-for="button in item.buttons" :key="button.id" class="radio-buttons-group">
          <radio-button
          :isChecked="button.isChecked"
          :title="button.title"
          :name="item.title"
          />
        </div>
        <div class="description">
          {{ item.description }}
        </div>
      </div>
    </div>
  </settings-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import RadioButton from '../components/RadioButton.vue';
import SettingsLayout from '@/layouts/SettingsLayout.vue';

export default Vue.extend({
  components: {
    RadioButton,
    SettingsLayout,
  },

  data() {
    return {
      items: [
        {
          id: 0,
          title: 'Beğenmeler',
          buttons: [
            {
              id: 0,
              isChecked: false,
              title: 'Kapalı',
            },
            {
              id: 1,
              isChecked: false,
              title: 'Takip ettiğim kişiler',
            },
            {
              id: 2,
              isChecked: true,
              title: 'Herkesten',
            },
          ],
          description: 'johnappleseed fotoğrafını beğendi.',
        },
        {
          id: 1,
          title: 'Yorumlar',
          buttons: [
            {
              id: 0,
              isChecked: false,
              title: 'Kapalı',
            },
            {
              id: 1,
              isChecked: false,
              title: 'Takip ettiğim kişiler',
            },
            {
              id: 2,
              isChecked: true,
              title: 'Herkesten',
            },
          ],
          description: 'johnappleseed yorum yaptı: "Güzel çekim!"',
        },
        {
          id: 2,
          title: 'Yorum Beğenmeleri',
          buttons: [
            {
              id: 0,
              isChecked: true,
              title: 'Kapalı',
            },
            {
              id: 1,
              isChecked: false,
              title: 'Takip ettiğim kişiler',
            },
          ],
          description: 'johnappleseed yorumunu beğendi: "Güzel çekim!"',
        },
        {
          id: 3,
          title: 'Olduğun Fotoğraflardaki Beğenmeler ve Yorumlar',
          buttons: [
            {
              id: 0,
              isChecked: false,
              title: 'Kapalı',
            },
            {
              id: 1,
              isChecked: false,
              title: 'Takip ettiğim kişiler',
            },
            {
              id: 2,
              isChecked: true,
              title: 'Herkesten',
            },
          ],
          description: 'johnappleseed etiketlendiğin bir gönderiye yorum yaptı.',
        },
        {
          id: 4,
          title: 'Kabul Edilen Takip İstekleri',
          buttons: [
            {
              id: 0,
              isChecked: false,
              title: 'Kapalı',
            },
            {
              id: 1,
              isChecked: true,
              title: 'Herkesten',
            },
          ],
          description: 'John Appleseed (johnappleseed) senin takip isteğini kabul etti.',
        },
        {
          id: 5,
          title: 'Instagram Direct İstekleri',
          buttons: [
            {
              id: 0,
              isChecked: false,
              title: 'Kapalı',
            },
            {
              id: 1,
              isChecked: true,
              title: 'Herkesten',
            },
          ],
          description: 'johnappleseed sana bir mesaj göndermek istiyor.',
        },
        {
          id: 6,
          title: 'Instagram Direct',
          buttons: [
            {
              id: 0,
              isChecked: false,
              title: 'Kapalı',
            },
            {
              id: 1,
              isChecked: true,
              title: 'Herkesten',
            },
          ],
          description: 'johnappleseed sana bir mesaj gönderdi.',
        },
        {
          id: 0,
          title: 'Hatırlatmalar',
          buttons: [
            {
              id: 0,
              isChecked: false,
              title: 'Kapalı',
            },
            {
              id: 1,
              isChecked: true,
              title: 'Herkesten',
            },
          ],
          description: 'Görmediğin bildirimlerin var ve diğer benzer bildirimler.',
        },
      ],
    };
  },
});
</script>
