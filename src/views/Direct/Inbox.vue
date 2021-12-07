<template>
  <div class="inbox">
    <div class="icon"/>
    <div class="titlebar">
      <div class="header">Mesajların</div>
    <div class="title">Bir arkadaşına veya gruba gizli fotoğraflar ve mesajlar gönder.</div>
    </div>
    <div>
      <Button backgroundColor="blue" textColor="white" >
        Mesaj Gönder
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';

export default Vue.extend({
  components: {
    Button,
  },
});
</script>

<style lang="scss" scoped>
  .inbox {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .titlebar {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap:5px;

      .header {
        font-size: 22px;
        font-weight: 300;
      }

      .title {
        font-size: 14px;
        color: rgba(0, 0, 0,0.3);
      }
    }

    .icon {
      width:96px;
      height:96px;
      background: url('/sprite2.png');
      background-size: 569px 521px;
      background-position: -330px 0;
    }
  }
</style>
