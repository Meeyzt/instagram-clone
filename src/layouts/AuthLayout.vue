<template>
  <div class="auth-layout">
    <headbar :isEnterPage="false"/>
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Footer from '@/components/Footer.vue';
import Headbar from '@/components/Headbar.vue';

export default Vue.extend({
  components: {
    Footer,
    Headbar,
  },

});
</script>

<style lang="scss" scoped>
.auth-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fafafa;
}

</style>
