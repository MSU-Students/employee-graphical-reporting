import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.layout.vue'),
    children: [
    { path: '/', component: () => import('src/pages/Login.page.vue') },
  ]
  },

  {
    path: '/HomeAdmin',
    component: () => import('src/layouts/HomeAdmin.layout.vue'),
    children: [
    { path: '/HomeAdmin', component: () => import('src/pages/HomeAdmin.page.vue') },
    { path: '/ManageAccount', component: () => import('src/pages/ManageAccount.page.vue') },
    { path: '/ManageEmployee', component: () => import('src/pages/ManageEmployee.page.vue') },
    { path: '/GenerateReportAdmin', component: () => import('src/pages/GenerateReportAdmin.page.vue') },

  ]
  },

  {
    path: '/HomeDirector',
    component: () => import('src/layouts/HomeDirector.layout.vue'),
    children: [
    { path: '/HomeDirector', component: () => import('src/pages/HomeDirector.page.vue') },
    { path: '/ViewEmployee', component: () => import('src/pages/ViewEmployee.page.vue') },
    { path: '/GenerateReportDirector', component: () => import('src/pages/GenerateReportDirector.page.vue') },
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
