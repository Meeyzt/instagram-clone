<template>
  <div class="content-section">
    <div class="login-section">
      <div class="box-area">
        <div class="login-form">
          <div class="instagram-logo">
          </div>
          <div class="form">
            <div class="username-input">
              <Input type="text" placeholder="amcan" v-model="username" :isFilled="username !== ''" />
            </div>
            <div class="password-input">
              <Input type="password" placeholder="baban" v-model="password" :isFilled="password !== ''" />
            </div>
            <div class="login-button">
              <Button backgroundColor="blue" textColor="white">Giriş Yap</Button>
            </div>
            <div class="or-area">
              <div class="or-interline"></div>
              <div class="or-text">YA DA</div>
              <div class="or-interline"></div>
            </div>
            <div class="facebook-login">
              <Button class="facebook-login-btn" backgroundColor="transparent" textColor="darkblue">
                <div class="facebook-logo">
                </div>
                Facebook ile Giriş Yap
                </Button>
            </div>
            <div class="forgot-password">
              <router-link :to="'/accounts/password/reset'" class="forgot-link" href="">Şifreni mi unuttun?</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="box-area">
        <div class="register-text">
          <span>Hesabın yok mu? &nbsp; {{username}}</span>
          <router-link :to="'/accounts/emailsignup'" class="register-link" href="">Kaydol</router-link>
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
      username: '',
      password: '',
    };
  },
});
</script>
