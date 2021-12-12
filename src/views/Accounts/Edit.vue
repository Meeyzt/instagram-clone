<template>
  <settings-layout>
    <div v-if="profile">
      <div class="profile-edit-section">
        <div class="profile-photo">
          <div class="photo">
            <user-picture :src="profile.pic" :size="38" />
          </div>
          <div class="username-area">
            <div class="text">{{profile.name}}</div>
            <div class="button">
              <Button backgroundColor="transparent" textColor="blue" > Profil Fotoğrafını Değiştir </Button>
            </div>
          </div>
        </div>
        <SettingsEdit
          :title="'Adın'"
          :placeholder="'Adın'"
          :inputHeight="32"
          :description="'Adın ve soyadın, takma adın veya işletmenin adı gibi tanındığın bir adı kullanarak insanların hesabını keşfetmesine yardımcı ol.\n \nAdını 14 gün içinde sadece iki kez değiştirebilirsin.'"
          :value="profile.name"
        />

        <SettingsEdit
          :title="'Kullanıcı Adı'"
          :placeholder="'Kullanıcı Adı'"
          :inputHeight="32"
          :description="'Çoğu durumda, kullanıcı adını 14 gün içinde yeniden değiştirip hsnnakn yapabileceksin.'"
          :linkUrl="'/'"
          :linkText="'Daha Fazla Bilgi Al'"
          :value="profile.username"
        />
        <SettingsEdit
          :title="'İnternet Sitesi'"
          :placeholder="'İnternet Sitesi'"
          :inputHeight="32"
          :value="profile.website ? profile.website : ''"
        />
        <SettingsEdit
          :title="'Biyografi'"
          :placeholder="'Biyografi'"
          :inputHeight="32"
          :descriptionTitle="'Kişisel Bilgiler'"
          :description="'Hesap bir işletme, evcil hayvan veya başka bir şey için kullanılıyor olsa da kişiler bilgilerini gir. Bu kısımlar herkese açık profilinde görünmeyecek.'"
          :value="profile.biography"
        />
        <SettingsEdit
          :title="'E-posta'"
          :placeholder="'E-posta'"
          :inputHeight="32"
          :value="profile.email"
        />
        <SettingsEdit
          :title="'Telefon Numarası'"
          :placeholder="'Telefon Numarası'"
          :inputHeight="32"
          :value="profile.phoneNumber"
        />
        <SettingsEdit
          :title="'Cinsiyet'"
          :placeholder="'Cinsiyet'"
          :inputHeight="32"
          :value="profile.sex"
        />

        <div class="suggest">
          <div class="title">
            Benzer Hesap Önerileri
          </div>
          <div class="content">
            <div class="checkbox-area">
              <input name="chx" class="checkbox" type="checkbox" />

              <label name="chx" class="description">
                <span>İnsanlara takip etmek isteyebilecekleri benzer hesaplar tavsiye edilirken hesabını tavsiyeler arasına ekle.</span>
                <span class="link"> [?]</span>
            </label>
            </div>
          </div>
        </div>
      </div>
      <div class="controller">
        <div class="blue-btn">
          <Button backgroundColor="blue" textColor="white" > Gönder </Button>
        </div>
        <div>
          <Button backgroundColor="transparent" textColor="blue" > Hesabımı geçici olarak kapat </Button>
        </div>
      </div>
    </div>
  </settings-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import UserPicture from '@/components/UserPicture.vue';
import Button from '@/components/Button.vue';
import SettingsEdit from '@/components/SettingsEdit.vue';
import SettingsLayout from '@/layouts/SettingsLayout.vue';
import { IProfile } from '@/store/pages/profile/types';

export default Vue.extend({
  components: {
    UserPicture,
    Button,
    SettingsEdit,
    SettingsLayout,
  },

  created() {
    this.$store.dispatch('getProfile', null, { root: true });
  },

  computed: {
    profile(): Array<IProfile> {
      return this.$store.state.profile.profile;
    },
  },
});
</script>
