<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';

import Sidebar from '@/components/layout/Sidebar.vue';

const route = useRoute();
</script>

<template>
  <div id="app" class="overflow-auto flex flex-col md:flex-row justify-start">
    <Sidebar v-if="route.meta.showSidebar" class="flex-grow-0" />
    <main class="flex-grow m-4">
      <RouterView />
    </main>
  </div>
</template>
