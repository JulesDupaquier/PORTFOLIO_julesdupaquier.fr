<template>
  <div class="header-container bg-blanc shadow-md p-4 md:flex justify-center items-center fixed top-0 w-full z-50">
    <!-- Logo (visible sur les écrans larges) -->
    <router-link to="/" class="hidden md:block">
      <img src="/icones/logo.svg" alt="Logo" class="header-logo h-12 w-auto" />
    </router-link>

    <!-- Logo (visible sur les écrans plus petits) -->
    <router-link to="/" class="md:hidden">
      <img @click="toggleMenu" src="/icones/logo.svg" alt="Logo" class="header-logo h-8 w-8 cursor-pointer" />
    </router-link>

    <!-- Croix pour fermer l'overlay (visible sur les écrans plus petits lorsque le menu est ouvert) -->
    <div v-if="isMenuOpen" class="md:hidden absolute top-4 left-4 z-20">
      <router-link to="/" class="text-noir hover:text-bleuclair focus:outline-none" @click="toggleMenu">
        <img src="/icones/croix.svg" alt="Fermer" class="h-8 w-8" />
      </router-link>
    </div>

    <!-- Navigation Links (visible sur les écrans larges) -->
    <div class="md:flex space-x-12 hidden">
      <router-link to="/about" class="nav-link text-noir hover:text-bleuclair font-Michroma">À PROPOS DE MOI</router-link>
      <router-link to="/projets" class="nav-link text-noir hover:text-bleuclair font-Michroma">PROJETS</router-link>
      <router-link to="/contact" class="nav-link text-noir hover:text-bleuclair font-Michroma">CONTACTEZ-MOI</router-link>
      <!-- ... Ajoutez d'autres liens au besoin -->
    </div>

    <!-- Overlay (visible sur les écrans plus petits lorsque le menu est ouvert) -->
    <div v-if="isMenuOpen" class="md:hidden fixed top-0 left-0 w-full h-full bg-blanc z-10 flex items-center justify-center p-4 bg-opacity-95 transition-opacity duration-300 ease-in-out" @click="toggleMenu">
      <!-- Navigation Links (centrés et avec un fondu) -->
      <div class="flex flex-col space-y-8 justify-center text-center">
        <router-link to="/about" class="nav-link text-noir hover:text-noir font-Michroma" style="opacity: 0; animation: fadeIn 0.3s ease-in-out forwards 0.5s">À PROPOS DE MOI</router-link>
        <router-link to="/projets" class="nav-link text-noir hover:text-noir font-Michroma" style="opacity: 0; animation: fadeIn 0.3s ease-in-out forwards 0.6s">PROJETS</router-link>
        <router-link to="/contact" class="nav-link text-noir hover:text-noir font-Michroma" style="opacity: 0; animation: fadeIn 0.3s ease-in-out forwards 0.7s">CONTACTEZ-MOI</router-link>
        <!-- ... Ajoutez d'autres liens au besoin -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
}
</script>

<style>
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Styles pour la ligne qui apparaît de gauche à droite sous le lien */
.nav-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0; /* Largeur initiale de la ligne */
  height: 2px; /* Hauteur de la ligne */
  background-color: bleuclair; /* Couleur de la ligne */
  transition: width 0.3s; /* Animation de largeur */
}

/* Au survol, la ligne s'étire de gauche à droite */
.nav-link:hover::before {
  width: 100%; /* Largeur maximale de la ligne */
}

</style>
