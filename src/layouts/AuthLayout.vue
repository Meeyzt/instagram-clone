<template>
  <div class="auth-layout">
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Footer from '@/components/Footer.vue';

export default Vue.extend({
  components: { Footer },

});
</script>

<style lang="scss" scoped>
.auth-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fafafa;
}

</style>
