<script>
import { projets } from '../projet.js';

export default {
    data() {
        return {
            projets: projets
        };
    }
};
</script>
<template>
    <div>
        <h1 class="text-titre mt-48 text-blanc font-Helvetica text-center">MES PROJETS</h1>
        <p class="mt-2 text-center">Retrouvez la liste de mes projets juste en dessous !</p>
    </div>

    
    <div class="flex flex-wrap justify-center items-center">
        <div v-for="projet in projets" :key="projet.id">
            <div class="m-8 bg-blanc rounded-lg shadow dark:bg-noir35 overflow-hidden max-w-[450px] max-h-[600px]">
                    <div>
                        <RouterLink :to="projet.projetUrl" class="inline-block hover:scale-110 transition-all ease-in-out duration-300">
                            <img :src=" projet.imageUrl " alt="Placeholder" class="rounded-t-lg">
                        </RouterLink>
                    </div>    
                <div class="p-5 z-10">
                    <RouterLink :to="projet.projetUrl">
                        <h5 class="mb-2 text-2xl font-Helvetica font-extrabold text-blanc hover:text-gris transition-all ease-in duration-300">{{ projet.title }}</h5>
                    </RouterLink>
                    <div class="flex justify-between mt-2">
                        <button class="card-button">{{ projet.tag1 }}</button>
                        <button class="card-button">{{ projet.tag2 }}</button>
                        <button class="card-button">{{ projet.tag3 }}</button>
                    </div>
                    <p class="mb-3 mt-3 font-normal text-blanc">{{ projet.description }}</p>
                    <RouterLink :to="projet.projetUrl" class="inline-flex items-center px-3 py-2 text-sm rounded-lg font-Helvetica text-center text-blanc bg-noir hover:bg-blanc hover:text-noir transition-all ease-in duration-300">
                        Découvrez le !
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.card-button {
  border-radius: 28px;
  border: 2px solid #FFFFFF;
  color: #FFFFFF;
  font-size: 14px;
  font: Helvetica, ;
  background: transparent;
  padding: 6px 16px;
  margin: 5px;
}

.card-button:hover {
  border-radius: 28px;
  border: 2px solid #777777;
  color: #777777;
  font-size: 14px;
  background: transparent;
  padding: 6px 16px;
  margin: 5px;
  transition: all 0.3s ease-in-out;
}

</style>