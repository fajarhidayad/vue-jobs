<script setup lang="ts">
import HeaderNav from './components/layouts/HeaderNav.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <HeaderNav />
    <main class="container flex-1">
      <RouterView />
    </main>
    <footer class="text-center py-5">
      <p class="text-gray-500">&copy; {{ new Date().getFullYear() }} Github Job Board</p>
    </footer>
  </div>
</template>
