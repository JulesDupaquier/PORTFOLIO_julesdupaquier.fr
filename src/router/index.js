import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue';

// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
const pb = new PocketBase('http://127.0.0.1:8090');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                           name: 'Index',                  component: Index },
  ]
})

// Vérification de route demandée
// to : où il veut aller
// from : d'où il vient 
// next : s'il peut y aller

export default router
