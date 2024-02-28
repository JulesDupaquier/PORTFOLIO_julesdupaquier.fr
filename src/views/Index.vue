<script>
</script>
<template>

    <!-- Section Vidéo -->


    <div class="video-container relative h-screen">
    <video class="h-full w-full rounded-lg object-cover" autoplay muted loop>
        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <div class="overlay absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-white">
        <h2 class="text-titre text-noir font-Helvetica">JEUNE AMBITIEUX, JEUNE DYNAMIQUE.</h2>
        <p class="mt-2 text-xl text-noir font-normal font-Helvetica">Bienvenue sur julesdupaquier.fr ! Je m’appelle Jules, j’ai 20 ans, et à travers ce site, vous entrez dans mon univers.</p>
    </div>
    <div class="chevron absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <svg class="h-12 w-12 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
    </div>
</div>


    <!-- Section Présentation -->

    <div class="container">
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

    <!-- Section Catégories -->

    <div class="bg-blanc pt-20 pb-20">
        <h1 class="ml-10 text-titre text-noir font-Helvetica pb-10">Alors, on commence par où ?</h1>
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

    <div class="pt-10 pb-10">
        <h1 class="ml-10 text-titre text-blanc font-Helvetica pb-10">Quelques un de mes projets...</h1>
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
}

.gen-button:hover {
  background: #000000;
  color: #777777;
  border: 2px solid #777777;
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