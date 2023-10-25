import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import DetailJobPage from './pages/DetailJobPage.vue'

const routes: readonly RouteRecordRaw[] = [
  { path: '/', component: HomePage },
  { path: '/:jobId', component: DetailJobPage, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
