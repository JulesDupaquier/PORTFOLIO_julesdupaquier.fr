import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue';
import Contact from '../views/Contact.vue';

import Projets from '../views/Projets.vue';
import Crac19 from '../views/projets/19Crac.vue';
import JPO2024 from '../views/projets/JPO2024.vue';
import LaCanopee from '../views/projets/LaCanopee.vue';
import HarmoniMontres from '../views/projets/HarmoniMontres.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                           name: 'Index',                  component: Index             },
    { path: '/contact',                    name: 'Contact',                component: Contact           },
    { path: '/projets',                    name: 'Projets',                component: Projets           },

    { path: '/19crac',                     name: '19Crac',                 component: Crac19            },
    { path: '/harmoni-montres',            name: 'HarmoniMontres',         component: HarmoniMontres    },
    { path: '/la-canopee',                 name: 'LaCanopee',              component: LaCanopee         },
    { path: '/jpo-2024',                   name: 'JPO2024',                component: JPO2024           },
  ]
})

// Vérification de route demandée
// to : où il veut aller
// from : d'où il vient 
// next : s'il peut y aller

export default router
