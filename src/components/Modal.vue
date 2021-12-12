<template>
  <div class="modal-container">
    <div id="slot" v-click-outside="hide">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ClickOutside from 'vue-click-outside';

export default Vue.extend({
  data() {
    return {
      first: true,
    };
  },

  methods: {
    hide() {
      if (!this.first) {
        this.first = true;

        this.$emit('close');
      } else {
        this.first = false;
      }
    },
  },

  mounted() {
    this.popupItem = document.getElementById('slot');
  },

  directives: {
    ClickOutside,
  },
});
</script>

<style lang="scss" scoped>

  .modal-container {
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    z-index: 99999;

    #slot{
      width: 100%;
      margin: 0 90px;
    }
  }
</style>
