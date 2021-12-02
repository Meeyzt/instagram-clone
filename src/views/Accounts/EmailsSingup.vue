<template>
  <div class="register-page">
    <div class="register-section">
      <div class="box-area">
        <div class="register-form">
          <div class="instagram-logo" />
          <div class="form">
            <div class="header">
              Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.
            </div>
            <div class="facebook-login">
              <Button :truncate="true" class="facebook-login-btn" backgroundColor="blue" textColor="white">
                <div class="facebook-logo"/>
                Facebook ile Giriş Yap
              </Button>
            </div>
            <div class="or-area">
              <div class="or-interline"></div>
              <div class="or-text">YA DA</div>
              <div class="or-interline"></div>
            </div>
            <div class="form-input">
              <Input type="text" placeholder="Cep Telefonu Numarası veya E-posta" v-model="email" :isFilled="email !== ''" />
            </div>
            <div class="form-input">
              <Input type="text" placeholder="Adı Soyadı" v-model="name" :isFilled="name !== ''" />
            </div>
            <div class="form-input">
              <Input type="text" placeholder="Kullanıcı Adı" v-model="username" :isFilled="username !== ''" />
            </div>
            <div class="form-input">
              <Input type="password" placeholder="Şifre" v-model="passowrd" :isFilled="password !== ''" />
            </div>
            <div class="register-button">
              <Button class="register-btn" backgroundColor="blue" textColor="white">Kaydol</Button>
            </div>
            <div class="terms-area">
              Kaydolarak, <a class="terms-link">Koşullar</a>'ı, <a class="terms-link">Veri İlkesi</a>'ni ve <a class="terms-link">Çerezler İlkesi</a>'ni kabul etmiş olursun.
            </div>
          </div>
        </div>
      </div>
      <div class="box-area">
        <div class="login-text">
          <span>Hesabın var mı? &nbsp;</span>
          <router-link :to="'/accounts/login'" class="login-link" href="">Giriş Yap</router-link>
        </div>
      </div>
      <div class="app-download">
        <div class="app-download-text">
          Uygulamayı indir.
        </div>
        <div class="download-icons">
          <a class="appstore">
            <img class="appstore-img" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png">
          </a>
          <a class="playstore">
            <img class="playstore-img" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/no-unused-components */
import Vue from 'vue';

import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

export default Vue.extend({
  components: {
    Button,
    Input,
  },

  data() {
    return {
      email: '',
      username: '',
      password: '',
      name: '',
    };
  },
});
</script>
