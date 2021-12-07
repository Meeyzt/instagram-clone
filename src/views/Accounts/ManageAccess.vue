<template>
  <settings-layout>
    <div class="manage-access-page">
      <div class="header">
        Uygulamalar ve İnternet Siteleri
      </div>
      <div class="button-group">
        <button
          v-for="tab in tabs"
          v-bind:key="tab.component"
          v-bind:class="['tab-button', { active: currentTab === tab.component }]"
          v-on:click="currentTab = tab.component"
        >
          {{ tab.name }}
        </button>
      </div>
      <component :is="currentTabComponent" class="tab"></component>
    </div>
  </settings-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import SettingsLayout from '@/layouts/SettingsLayout.vue';
import ManageAccessActive from '@/components/ManageAccessActive.vue';
import ManageAccessTimeout from '@/components/ManageAccessTimeout.vue';
import ManageAccessDeleted from '@/components/ManageAccessDeleted.vue';

export default Vue.extend({
  components: {
    SettingsLayout,
    ManageAccessActive,
    ManageAccessTimeout,
    ManageAccessDeleted,
  },

  data() {
    return {
      currentTab: 'ManageAccessActive',
      tabs: [
        {
          component: 'ManageAccessActive',
          name: 'Aktif',
        },
        {
          component: 'ManageAccessTimeout',
          name: 'Süresi Dolanlar',
        },
        {
          component: 'ManageAccessDeleted',
          name: 'Kaldırılanlar',
        },
      ],
    };
  },

  computed: {
    currentTabComponent():string {
      return this.currentTab;
    },
  },
});
</script>
