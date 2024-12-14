// router.js
import AboutPage from '@/views/AboutPage.vue';
import WelcomePage from '@/views/WelcomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'welcome', component: WelcomePage },
  { path: '/about', name: 'about', component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
