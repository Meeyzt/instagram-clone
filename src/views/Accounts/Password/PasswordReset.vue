<template>
  <div class="password-reset-page">
    <div class="password-reset-area">
      <div class="content">
        <div class="lock-icon" />
        <div class="header">
          Giriş Yaparken Sorun mu Yaşıyorsun?
        </div>
        <div class="help-text">
          E-posta adresini, telefon numaranı veya kullanıcı adını gir ve hesabına yeniden girebilmen için sana bir bağlantı gönderelim.
        </div>
        <div class="mail-input">
          <Input placeholder="E-posta, Telefon veya Kullanıcı Adı" :height="40"/>
        </div>
        <div class="send-mail-btn">
          <Button backgroundColor="blue" textColor="white">Giriş Bağlantısı Gönder</Button>
        </div>
        <div class="or-area">
          <div class="or-interline"></div>
          <div class="or-text">YA DA</div>
          <div class="or-interline"></div>
        </div>
        <div class="new-account-link">
          <router-link class="link" :to="'/accounts/emailsignup'">Yeni Hesap Oluştur</router-link>
        </div>
        <div class="return-login-link">
          <router-link class="link" :to="'/accounts/login'">Giriş Ekranına Dön</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

export default Vue.extend({
  components: {
    Button,
    Input,
  },
});
</script>
