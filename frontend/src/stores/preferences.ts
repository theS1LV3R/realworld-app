import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

const preferenceStore = defineStore('preferences', {
  state: () => ({
    sidebarWidth: useLocalStorage('preferences:sidebar_width', 300),
  }),
  getters: {},
  actions: {},
});

export default preferenceStore;
