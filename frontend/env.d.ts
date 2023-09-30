/// <reference types="vite/client" />

// https://github.com/microsoft/TypeScript/issues/47663#issuecomment-1270716220
/// <reference types="@vueuse/shared" />

import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    showSidebar?: boolean;
  }
}
