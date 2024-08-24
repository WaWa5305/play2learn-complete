import { createWebHistory, createRouter } from "vue-router";
import AnagramHunt from "./apps/AnagramHunt.vue";
import MathFacts from "./apps/MathFacts.vue";
import Home from "./apps/HomePage.vue"; 

const routes = [
  {
    path: '/',
    component: Home 
  },
  {
    path: '/anagram-hunt',
    component: AnagramHunt
  },
  {
    path: '/math-facts',
    component: MathFacts
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;