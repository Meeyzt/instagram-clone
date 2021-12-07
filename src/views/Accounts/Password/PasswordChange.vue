<template>
  <settings-layout>
    <div class="change">
      <div class="profile">
        <div class="photo">
          <user-picture src="https://picsum.photos/150/150" size="38" />
        </div>
        <div class="username-area">
          <div class="text">name</div>
        </div>
      </div>
      <PasswordReset
        :inputHeight="40"
        :title="'Eski Şifre'"
      />
      <PasswordReset
        :inputHeight="40"
        :title="'Yeni Şifre'"
      />
      <PasswordReset
        :inputHeight="40"
        :title="'Yeni Şifreyi Tekrar Gir'"
      />
      <div class="submit-btn">
        <Button backgroundColor="blue" :disabled="true" textColor="white" > Şifreyi Değiştir </Button>
      </div>
      <div class="forgot-password-link">
        <Button backgroundColor="transparent" textColor="blue" > Şifreni mi Unuttun? </Button>
      </div>
    </div>
  </settings-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import UserPicture from '@/components/UserPicture.vue';
import PasswordReset from '@/components/PasswordReset.vue';
import Button from '@/components/Button.vue';
import SettingsLayout from '@/layouts/SettingsLayout.vue';

export default Vue.extend({
  components: {
    UserPicture,
    PasswordReset,
    Button,
    SettingsLayout,
  },
});
</script>
