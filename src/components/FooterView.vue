<template>
    <div class="bg-blanc pt-10">
        <div class="ml-8 flex items-center">
            <img src="/icones/triple7-light.svg" alt="Triple7-LogoSansBorder" class="w-24 h-auto">
        </div>
        <div class="flex flex-col md:flex-row text-center mt-4">
            <a href=""></a><p class="linkf text-noir">Télécharger mon CV</p>
        </div>
        <div class="justify-center text-center">
            <hr class="ml-16 mr-16 rounded md:my-10 border-noir">
        </div>
        <div class="flex justify-center pt-6 text-noir">
            <a href="https://www.linkedin.com/in/julesdupaquier/" class="mx-2"><img src="icones/linkedin.svg" alt="Linkedin"/></a>
            <a href="https://www.instagram.com/triple7fr/" class="mx-2"><img src="icones/instagram.svg" alt="Instagram"/></a>
            <a href="mailto:contact@julesdupaquier.fr" class="mx-2"><img src="icones/mail.svg" alt="Mail"/></a>
            <a href="tel:+33772168094" class="mx-2"><img src="icones/telephone.svg" alt="Telephone"/></a>
        </div>
        <h6 class="text-noir text-center font-Helvetica pt-6 pb-4">© 2024 Jules Dupaquier. Tous droits réservés.</h6>
    </div>
</template>



<style>

.linkf {
  position: relative;
  display: inline-block;
  color: #101010;
  transition: color 0.3s; /* Transition de couleur de texte de 0.3 seconde */
}

.linkf::before,
.linkf::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px; /* Ajustez l'épaisseur de la ligne */
  background-color: #101010; /* Couleur de la ligne */
  transition: width 0.3s, left 0.3s; /* Transition de largeur de la ligne et de la position à gauche de 0.3 seconde */
}

.linkf::before {
  top: 0; /* Ligne qui surligne le texte */
  left: 0;
}

.linkf::after {
  bottom: -1px; /* Ligne en dessous du texte */
  right: 0;
}

.linkf:hover {
  color: #101010; /* Texte rouge lors du survol */
}

.linkf:hover::before,
.linkf:hover::after {
  width: 100%; /* Les lignes apparaissent de gauche à droite lors du survol */
  left: 0; /* Réinitialisation de la position à gauche */
}

.navlinkf:hover::after {
  bottom: -2px; /* Réinitialisation de la position en dessous */
}

</style>
<script>
</script>


  