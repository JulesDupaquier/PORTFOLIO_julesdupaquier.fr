<script>
</script>
<template>
    <div class="video-container relative">
        <video class="h-full w-full rounded-lg" autoplay muted loop>
            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div class="overlay absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-white">
            <h2 class="text-titre text-noir font-Helvetica">JEUNE AMBITIEUX, JEUNE DYNAMIQUE.</h2>
            <p class="mt-2 text-xl text-noir font-normal font-Helvetica">Bienvenue sur julesdupaquier.fr ! Je m’appelle Jules, j’ai 20 ans, et à travers ce site, vous entrez dans mon univers.</p>
        </div>
        <div class="chevron absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
            <a href="#bonjour">
                <svg class="h-12 w-12 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </a>
        </div>
    </div>
    <div class="container">
        <div class="marquee">
            <p class="text-gris font-Helvetica text-marquee">
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
            <p class="ml-10 text-blanc z-1">
            Bienvenue sur mon portfolio ! Je m’appelle Jules, j’ai 20 ans et je suis actuellement en deuxième année de BUT MMI (Métiers du Multimédia et de l’Internet).
            À travers ce site, vous aurez l’occasion de remarquer mon côté créatif et les différents projets qui m’animent vraiment (mais les autres, je les garde secret !).
            Que diriez vous de continuer votre visite de mon site ? Vous découvrirez sûrement pleins de choses intéressantes et en apprendrez plus sur qui je suis !
            </p>
        </div>
    </div>
    <div id="#bonjour" class="bg-blanc pt-10">
        <h1 class="ml-10 text-titre text-noir font-Helvetica pb-10">ALORS, ON COMMENCE PAR QUOI ?</h1>
    </div>
</template>

<style>

</style>