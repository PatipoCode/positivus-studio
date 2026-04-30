import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PricingView from '@/views/PricingView.vue';
import BlogView from '@/views/BlogView.vue';
import ServiceView from '@/views/ServiceView.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/pricing', component: PricingView },
  { path: '/blog', component: BlogView },
  { path: '/services/:slug', component: ServiceView },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0, behavior: 'smooth' };
  },
});
