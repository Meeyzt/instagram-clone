<template>
  <div class="info-bar">
    <div class="info-item danger">
      Şikayet Et
    </div>

    <div class="info-item danger">
      Takibi Bırak
    </div>

    <div class="info-item">
      Gönderiye git
    </div>

    <div class="info-item">
      Paylaş...
    </div>

    <div class="info-item">
      Bağlantıyı Kopyala
    </div>

    <div class="info-item">
      Sitene Göm
    </div>

    <div class="info-item">
      Cancel
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

@media screen and (max-width: 700px){
  .info-bar {
    width: 260px;
  }
}

@media screen and (min-width: 700px){
  .info-bar {
    width: 400px;
  }
}

  .info-bar {
    border: 1px solid rgba(0,0,0,0.3);
    background: white;
    border-radius: 10px;
    color: black;
    font-size: 14px;

    .info-item {
      padding: 16px 0;
      text-align: center;
      width: 100%;
      cursor:pointer;
    }

    .info-item + .info-item {
      border-top: 1px solid $instagram-gray;
    }

    .danger{
      color: $danger-color;
      font-weight: 700;
    }
  }
</style>
