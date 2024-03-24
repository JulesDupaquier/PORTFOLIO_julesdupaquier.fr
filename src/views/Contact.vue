<template>
    <div class="relative h-screen flex items-center justify-center">
      <!-- Vidéo de fond -->
      <video class="absolute inset-0 w-full h-full object-cover" autoplay muted loop>
        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <!-- Overlay avec le formulaire de contact -->
      <div class="absolute inset-0 justify-end ml-auto md:w-1/2 sm:w-full">
        <div class="bg-white bg-opacity-80 p-8 h-full flex flex-col justify-center">
          <!-- Titre -->
          <h1 class="text-4xl text-titre text-noir text-center font-Helvetica mb-8 mt-24">ON RESTE EN CONTACT ?</h1>
          <!-- Formulaire de contact -->
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block mb-1">Vous vous appellez...</label>
              <input type="text" id="name" v-model="formData.name" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-noir" placeholder="Votre nom" required>
            </div>
            <div>
              <label for="email" class="block mb-1">Votre adresse mail est...</label>
              <input type="email" id="email" v-model="formData.email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-noir" placeholder="votreadresse@mail.com" required>
            </div>
            <div>
              <label for="message" class="block mb-1">Dites-moi tout !</label>
              <textarea id="message" v-model="formData.message" rows="5" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-noir" placeholder="Votre message" required></textarea>
            </div>
            <button type="submit" class="bg-noir text-blanc px-6 py-2 rounded-md hover:bg-noir35 transition-all duration-300 ease-in-out">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Envoyer le formulaire (à implémenter)
        console.log('Formulaire soumis:', this.formData);
        // Réinitialiser les données du formulaire
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
      }
    }
  };
  </script>
  
  <style>
  /* Aucun style supplémentaire nécessaire */
  </style>
  