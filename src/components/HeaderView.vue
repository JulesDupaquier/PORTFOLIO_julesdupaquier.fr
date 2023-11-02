<template>
<div class="header bg-noir">
  <div class="Logo my-auto mx-auto">
    <RouterLink to="/">
      <img src="/icones/logo-64x.svg" alt="Logo-64x">
    </RouterLink>
  </div>
  <div class="Links text-center space-x-36 my-auto">
    <RouterLink to="/about" class="link">À PROPOS DE MOI</RouterLink>
    <RouterLink to="/projets" class="link">PROJETS</RouterLink>
  </div>
  <div class="Bouton text-center my-auto">
    <RouterLink to="/contact">
      <button class="Header-button">CONTACTEZ MOI</button>
    </RouterLink>
  </div>
</div>
</template>

<script>
</script>
<style>

.header {
  z-index: 1;
  display: grid; 
  grid-template-columns: 25% 37.5% 37.5%; 
  grid-template-rows: 60px; 
  gap: 0px 0px; 
  grid-template-areas: 
    "Logo Links Bouton"; 
}

.Logo { grid-area: Logo; }
.Links { grid-area: Links; }
.Bouton { grid-area: Bouton; }

.Logo {
  margin-left: 20%;
  max-height: 48px;
  max-width: 48px;
}

.Links {
  color: #ffffff;
  text-transform: uppercase;
  font-family: michroma;
  margin-top: auto;
  margin-bottom: auto;
}

.link {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #ffffff;
  transition: color 0.3s; /* Transition de couleur de texte de 0.3 seconde */
}

.link::before,
.link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px; /* Ajustez l'épaisseur de la ligne */
  background-color: #ff0000; /* Couleur de la ligne */
  transition: width 0.3s; /* Transition de largeur de la ligne de 0.3 seconde */
}

.link::before {
  top: 0; /* Ligne qui surligne le texte */
  left: 0;
}

.link::after {
  bottom: -2px; /* Ligne en dessous du texte */
  left: 0;
}

.link:hover {
  color: #ff0000; /* Texte rouge lors du survol */
}

.link:hover::before,
.link:hover::after {
  width: 100%; /* Les lignes apparaissent de gauche à droite lors du survol */
}


.Header-button {
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 30px;
  padding: 9px 15px;
  font-family: michroma;
  font-size: 14px;
  transition: border 0.5s, color 0.5s, border-radius 1s;
}

.Header-button:hover {
  color: #ff0000;
  border: 2px solid #ff0000;
  border-radius: 30px;
  padding: 9px 15px;
  font-family: michroma;
  font-size: 14px;
  transform:translate();
}

</style>