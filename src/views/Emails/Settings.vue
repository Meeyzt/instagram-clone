<template>
  <settings-layout>
    <div class="emails-settings">
      <div class="title">
        Abone ol:
      </div>
      <SettingCheckbox
        :isChecked="true"
        :title="'Görüş E-postaları'"
        :description="'Instagram hakkında görüş bildir.'"
      />
      <SettingCheckbox
        :isChecked="true"
        :title="'Hatırlatma e-postaları'"
        :description="'Kaçırmış olabileceğin bildirimleri al.'"
      />
      <SettingCheckbox
        :isChecked="true"
        :title="'Ürün e-postaları'"
        :description="'Instagram\'ın araçları hakkında ipuçları al.'"

      />
      <SettingCheckbox
        :isChecked="true"
        :title="'Haber e-postaları'"
        :description="'Yeni Instagram özellikleri hakkında bilgi al.'"
      />
    </div>
  </settings-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import SettingCheckbox from '../../components/SettingCheckbox.vue';
import SettingsLayout from '@/layouts/SettingsLayout.vue';

export default Vue.extend({
  components: {
    SettingCheckbox,
    SettingsLayout,
  },
});
</script>
