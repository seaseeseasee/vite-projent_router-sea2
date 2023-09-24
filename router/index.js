import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainpage from '../views/mainpage.vue'
import Newcard from '../components/NewcardHead.vue'

import ANewcard_01 from '/vite-projent_componen+router//src/components/i-love-coffe.vue';
import ANewcard_02 from '/vite-projent_componen+router/src/components/cafaaa.vue';
import ANewcard_03 from '/vite-projent_componen+router/src/components/paizz.vue';
import ANewcard_04 from '/vite-projent_componen+router/src/components/cat-cafe.vue';
import ANewcard_05 from '/vite-projent_componen+router/src/components/dog-cafe.vue';



const shopRoutes = [
  { name: 'news_1', component: ANewcard_01, shop: 'i-love-coffe' },
  { name: 'news_2', component: ANewcard_02, shop: 'cafe' },
  { name: 'news_3', component: ANewcard_03, shop: 'paizz'},
  { name: 'news_4', component: ANewcard_04, shop: 'cat-cafe'},
  { name: 'news_5', component: ANewcard_05, shop: 'dog-cafe'},

];

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/news',
    name: 'allnews',
    component: Newcard
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
];

shopRoutes.forEach((route) => {
  routes.push({
    path: `/news/${encodeURIComponent(route.shop)}`,
    name: route.name,
    component: route.component,
    props: true
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
