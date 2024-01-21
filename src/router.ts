import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/mobile',
    name: 'servicesm',
    component: () => import('./views/services/ServicesM.vue'),
  },
  {
    path: '/deskop',
    name: 'servicesd',
    component: () => import('./views/services/ServicesD.vue'),
  },
  {
    path: '/fototeca',
    name: 'fototeca',
    component: () => import('./views/Fototeca/Fototeca.vue'),
  },
  {
    path: '/tour',
    name: 'travel',
    component: () => import('./views/Travel/Travel.vue'),
  },
  {
    path: '/x-factoring',
    name: 'xfac',
    component: () => import('./views/xfac/Xfac.vue'),
  },
  {
    path: '/web-store',
    name: 'store',
    component: () => import('./views/Store/Store.vue'),
  },
  {
    path: '/building-company',
    name: 'panel',
    component: () => import('./views/Panel/Panel.vue'),
  },
  {
    path: '/special-d-app',
    name: 'pacient',
    component: () => import('./views/Pacient/Pacient.vue'),
  },
  {
    path: '/special-driver-app',
    name: 'driver',
    component: () => import('./views/Driver/Driver.vue'),
  },
  {
    path: '/buisnessDoc',
    name: 'copyland',
    component: () => import('./views/Copyland/Copyland.vue'),
  },
  {
    path: '/copy-app',
    name: 'copyapp',
    component: () => import('./views/Copyapp/Copyapp.vue'),
  },
  {
    path: '/our-works',
    name: 'works',
    component: () => import('./views/Work/Works.vue'),
  },
  {
    path: '/portfolio-list',
    name: 'portfolio',
    component: () => import('./views/Portfolio/Portfolio.vue'),
  },
  {
    path: '/moreAboutUs',
    name: 'about',
    component: () => import('./views/AboutUs/AboutUs.vue'),
  },
  {
    path: '/Contact-us',
    name: 'contact',
    component: () => import('./views/Contact/Contact.vue'),
  },
  {
    path: '/Avtomatic-invoices',
    name: 'factur',
    component: () => import('./views/Factur/Factur.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;