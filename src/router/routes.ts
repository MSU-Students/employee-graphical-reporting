import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
    { path: '/', component: () => import('pages/LandingPage.vue') },
  ]
  },

  {
    path: '/login',
    component: () => import('layouts/login.vue'),
    children: [
    { path: '/LoginPage', component: () => import('pages/LoginPage.vue') },
  ]
  },

  {
    path: '/HomeAdmin',
    component: () => import('layouts/HomeAdmin.vue'),
    children: [
    { path: '/HomeAdmin', component: () => import('pages/HomeAdmin.vue') },
    { path: '/ManageAccount', component: () => import('pages/ManageAccount.vue') },
    { path: '/ManageEmployee', component: () => import('pages/ManageEmployee.vue') },
    { path: '/GenerateReport', component: () => import('pages/GenerateReport.vue') },
  ]
  },

  {
    path: '/HomeDirector',
    component: () => import('layouts/HomeDirector.vue'),
    children: [
    { path: '/HomeDirector', component: () => import('pages/HomeDirector.vue') },
    { path: '/ViewEmployee', component: () => import('pages/ViewEmployee.vue') },
    { path: '/GenerateReport', component: () => import('pages/GenerateReport.vue') },
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
