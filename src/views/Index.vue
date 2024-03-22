<template>

    <!-- Section Vidéo -->


    <div class="video-container relative h-screen"> 
    <video class="h-full w-full rounded-lg object-cover" autoplay muted loop>
        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <div class="overlay absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-blanc">
        <h2 class="text-titre font-Helvetica">JEUNE AMBITIEUX, JEUNE DYNAMIQUE.</h2>
        <p class="text-xl text-blanc font-normal font-Helvetica">Bienvenue sur julesdupaquier.fr</p>
    </div>
    <div class="chevron absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <svg class="h-16 w-16 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.2467 22 21.5 17.7467 21.5 12.5C21.5 7.25329 17.2467 3 12 3C6.75329 3 2.5 7.25329 2.5 12.5C2.5 17.7467 6.75329 22 12 22Z" stroke="blanc" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.5149 10.525L12.7049 14.335C12.5049 14.535 12.1949 14.535 11.9949 14.335L8.18494 10.525" stroke="blanc" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</div>



    <!-- Section Présentation -->

    <div class="container sticky-top bg-gradient-to-b from-noiroff via-noiroff to-blanc">
        <div class="marquee">
            <p class="mt-10 text-gris font-Helvetica text-marquee">
            <marquee behavior="scroll" direction="left" scrollamount="30">
            Nice to meet you, I'm Jules.・Nice to meet you, I'm Jules.・Nice to meet you, I'm Jules.・Nice to meet you, I'm Jules.・Nice to meet you, I'm Jules.・Nice to meet you, I'm Jules.
            </marquee>
        </p>
        <p class="text-blanc font-Helvetica text-marquee">
            <marquee behavior="scroll" direction="right" scrollamount="30">
            Enchanté, moi c'est Jules.・Enchanté, moi c'est Jules.・Enchanté, moi c'est Jules.・Enchanté, moi c'est Jules.・Enchanté, moi c'est Jules.・Enchanté, moi c'est Jules.・Enchanté, moi c'est Jules.
            </marquee>
        </p>
        </div>
        <div class="photo">
            <img src="/images/jules.png" class="photo" alt="Photo-Jules">
        </div>
        <div class="presentation">
            <p class="ml-8 mr-8 text-justify text-blanc z-1">
            Bienvenue sur mon portfolio ! Je m’appelle Jules, j’ai 20 ans et je suis actuellement en deuxième année de BUT MMI (Métiers du Multimédia et de l’Internet).
            À travers ce site, vous aurez l’occasion de remarquer mon côté créatif et les différents projets qui m’animent vraiment (mais les autres, je les garde secret !).
            Que diriez vous de continuer votre visite de mon site ? Vous découvrirez sûrement pleins de choses intéressantes et en apprendrez plus sur qui je suis !
            </p>
            <button class=" mt-10 ml-8 mr-8 gen-button">VOUS SOUHAITEZ EN SAVOIR PLUS ?</button>
        </div>
    </div>


    <!-- Section Parcours -->


    <div class="bg-blanc pt-20 pb-20">
        <h1 class="ml-10 text-titre text-noir font-Helvetica pb-20">MES FORMATIONS</h1>
          <div
            class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
          >
            <!-- Gauche -->
            <div class="flex flex-row-reverse md:contents">
                <!-- Point d'accroche -->
              <div class="bg-gris col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <img src="/icones/mmi-montbeliard.svg" alt="MMI" class="h-32 w-32">
                <h2>MMI Montbéliard</h2>
                <h2>2022 - 2025</h2>
                <p>Description de MMI Montbéliard</p>
                <a href="https://mmimontbeliard.com/">Aller au site</a>
              </div>

              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-noir pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
            <!-- right -->
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-noir pointer-events-none"></div>
                </div>
                <!-- Point d'accroche -->
                <div
                    class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
              <div
                class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p class="leading-tight text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae, facilis.
                </p>
              </div>
            </div>
          </div>
        </div>



































    <!-- Section Catégories -->

    <div class="bg-blanc pt-20 pb-20 sticky-top">
        <h1 class="ml-10 text-titre text-noir font-Helvetica pb-10">ALORS, PAR OÙ COMMENCE T-ON ?</h1>
        <div class="flex justify-center">
            <div class="flex justify-center">
            <div class="flex flex-col md:flex-row md:space-x-10">
                <button class="mb-4 md:mb-0"><router-link to="/audiovisuel" class="ctg-button nav-link text-noir font-Michroma">Audiovisuel</router-link></button>
                <button class="mb-4 md:mb-0"><router-link to="/communication" class="ctg-button nav-link text-noir font-Michroma">Communication</router-link></button>
                <button class="mb-4 md:mb-0"><router-link to="/design" class="ctg-button nav-link text-noir font-Michroma">Design</router-link></button>
                <button class="mb-4 md:mb-0"><router-link to="/web-ux-ui" class="ctg-button nav-link text-noir font-Michroma">Web UX/UI</router-link></button>
                <button class="mb-4 md:mb-0"><router-link to="/bonus" class="ctg-button nav-link text-noir font-Michroma">Plus ?</router-link></button>
            </div>
            </div>
        </div>
    </div>

    <!-- Section Projets -->

    <div class="pt-10 pb-10 sticky-top">
        <h1 class="ml-10 text-titre text-blanc font-Helvetica pb-10">QUELQUES UN DE MES PROJETS...</h1>
    </div>

</template>

<style>
















.gen-button {
  color: #FFFFFF;
  padding: 8px 26px;
  cursor: pointer;
  transition: all 0.5s ease;
  border: 2px solid #FFFFFF;
  background: #000000;
  text-transform: uppercase;
  font-family: Helvetica, sans-serif;
}

.gen-button:hover {
  background: #FFFFFF;
  color: #000000;
  border: 2px solid #000000;
}

.ctg-button {
  color: #FFFFFF;
  padding: 8px 26px;
  cursor: pointer;
  transition: all 0.5s ease;
  border: 2px solid #000000;
  background: #FFFFFF;
  text-transform: uppercase;
}

.ctg-button:hover {
  background: #000000;
  color: #FFFFFF;
  border: 2px solid #000000;
}
</style>
<script>
</script>