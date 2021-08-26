import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
    { path: '', component: () => import('pages/LandingPage.vue') },
    { path: '/LoginPage', component: () => import('pages/LoginPage.vue') },
  ]
  
  },

  {
    path: '/login',
    component: () => import('layouts/login.vue'),
    children: [
    
  ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
