import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue';
import Projets from '../views/Projets.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                           name: 'Index',                  component: Index   },
    { path: '/projets',                    name: 'Projets',                component: Projets},
  ]
})

// Vérification de route demandée
// to : où il veut aller
// from : d'où il vient 
// next : s'il peut y aller

export default router
