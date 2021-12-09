<template>
  <settings-layout>
    <div class="contact-history-page">
      <div class="title">
        Kişileri Yönet
      </div>
      <div class="description">
        <p>
          Burada listelenen kişiler, rehberinden Instagram'a yüklediğin kişilerdir. Senkronize edilen kişilerini kaldırmak için Tümünü Sil'e dokun. Cihaz ayarlarına gidip rehberindeki kişilere erişimi kapatmadığın sürece, Instagram'ın rehberindeki kişilerini bir sonraki senkronize edişinde kişilerin yeniden yüklenecektir.
        </p>
        <p>
          Kişilerini sadece sen görebilirsin ancak Instagram sana ve başkalarına arkadaş önerilerinde bulunmak ve herkes için daha iyi bir deneyim sunmak için kişilerinle ilgili yüklediğin bilgileri kullanır.
        </p>
      </div>
      <div class="list-title">
        <div class="title">
          153 Senkronize Edilen Kişi
        </div>
        <div class="delete-btn">
          <Button backgroundColor="transparent" textColor="blue" > Tümünü sil </Button>
        </div>
      </div>
      <div class="list">
        <div v-for="person in persons" :key="person.no" class="item">
          <div class="name">
            {{ person.name }}
          </div>
          <div class="no">
            {{ person.no }}
          </div>
        </div>
      </div>
      <div class="all-delete-btn">
        <Button backgroundColor="blue" textColor="white" >
          <div class="buton">Tümünü sil</div>
        </Button>
      </div>
    </div>
  </settings-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import SettingsLayout from '@/layouts/SettingsLayout.vue';
import Button from '@/components/Button.vue';

export default Vue.extend({
  components: {
    SettingsLayout,
    Button,
  },

  data() {
    return {
      persons: [
        {
          name: 'Osman', no: '123123123',
        },
        {
          name: 'Osman', no: '1231231232',
        },
        {
          name: 'Osman', no: '1231231233',
        },
        {
          name: 'Osman', no: '1231231234',
        },
        {
          name: 'Osman', no: '1231231235',
        },
        {
          name: 'Osman', no: '1231231236',
        },
        {
          name: 'Osman', no: '1231231237',
        },
        {
          name: 'Osman', no: '1231231238',
        },
        {
          name: 'Osman', no: '1231231239',
        },
        {
          name: 'Osman', no: '12312312321',
        },
      ],
    };
  },
});
</script>
