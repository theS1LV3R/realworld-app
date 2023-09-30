<script setup lang="ts">
import usePreferenceStore from '@/stores/preferences';
import { clamp } from '@vueuse/shared';
import { ref } from 'vue';

const isDragging = ref(false);
const preferenceStore = usePreferenceStore();

function resize(e: MouseEvent) {
  preferenceStore.sidebarWidth = clamp(e.pageX, 200, 500);
}

function onDragStart(e: MouseEvent) {
  e.preventDefault();
  isDragging.value = true;
  document.body.addEventListener('mousemove', resize);
  document.body.addEventListener('mouseup', onDragEnd);
}

function onDragEnd(e: MouseEvent) {
  isDragging.value = false;
  document.body.removeEventListener('mousemove', resize);
}
</script>

<template>
  <div
    id="sidebar-wrapper"
    :style="`width: ${preferenceStore.sidebarWidth}px;`"
    :class="`absolute top-0 left-0 w-full h-full md:relative md:w-auto
    bg-white flex flex-row ${isDragging ? 'opacity-100' : ''}`"
  >
    <div class="w-full m-3">
      <h1>Sidebar</h1>
    </div>
    <div
      id="dragbar"
      :class="`right-0 w-[5px] border-l-[1px] cursor-col-resize
      transition-all ease-in-out duration-300 h-full hidden md:block absolute
      hover:bg-blue-300 ${isDragging ? 'bg-blue-300' : ''}`"
      @mousedown="onDragStart"
      @mouseup="onDragEnd"
    ></div>
  </div>
</template>

<style scoped lang="scss">
#sidebar-wrapper {
  @media (max-width: 767px) {
    & {
      width: 100% !important;
    }
  }
}
</style>
