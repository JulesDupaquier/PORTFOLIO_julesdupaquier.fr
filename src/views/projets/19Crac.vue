<script>
import PageProjet from '../../components/PageProjet.vue';

import { projets } from '../../../src/projet.js';

export default {
    data() {
        return {
            projets: projets
        };
    }
};

</script>
<template>
    <div v-for="projet in projets.slice(0, 1)" :key="projet.id">
        <div>
                <div class="video-container relative h-screen"> 
            <img :src=" projet.imageUrl " alt="" class="h-full w-full rounded-lg object-cover">
            <div class="chevron absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
                <svg class="h-16 w-16 text-noir-35 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.2467 22 21.5 17.7467 21.5 12.5C21.5 7.25329 17.2467 3 12 3C6.75329 3 2.5 7.25329 2.5 12.5C2.5 17.7467 6.75329 22 12 22Z" stroke="blanc" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.5149 10.525L12.7049 14.335C12.5049 14.535 12.1949 14.535 11.9949 14.335L8.18494 10.525" stroke="blanc" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            </div>
            <h1 class="text-projet mt-64 text-blanc font-Helvetica ml-10">{{ projet.title }}</h1>
            <div class="flex justify-center space-x-8 mt-20 mb-20">
                <button class="projet-button">{{ projet.tag1 }}</button>
                <button class="projet-button">{{ projet.tag2 }}</button>
                <button class="projet-button">{{ projet.tag3 }}</button>
            </div>
            <div>
                <h1 class="text-2xl text-blanc font-Helvetica text-left p-16">{{ projet.amorce }}</h1>
            </div>
            <div class="grid grid-cols-2 grid-rows-1 gap-0">
                <img :src=" projet.aboutImageUrl " alt="" class="p-16">

                <p class="text-2xl text-justify align-center p-16">{{ projet.about }}</p>

            </div>
            <h1 class="font-Helvetica text-titre text-blanc text-center mt-16 mb-8">Outils utilisés</h1>
            <div class="flex space-between space-x-8 justify-center mt-8 mb-10">
                <img :src=" projet.outil1 " alt="">
                <img :src=" projet.outil2 " alt="">
            </div>
        </div>

    </div>


  <PageProjet />
    
</template>

<style>

.projet-button {
  color: #FFFFFF;
  padding: 8px 26px;
  cursor: pointer;
  transition: all 0.5s ease;
  border: 2px solid #FFFFFF;
  background: #000000;
  text-transform: uppercase;
  font-family: Helvetica, sans-serif;
}

.projet-button:hover {
  color: #777777;
  border: 2px solid #777777;
}

</style>