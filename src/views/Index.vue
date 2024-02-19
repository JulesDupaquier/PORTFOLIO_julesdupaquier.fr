<script>
</script>
<template>
    <div>
        <video className="h-full w-full rounded-lg" autoPlay muted>
            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
    <div class="container">
        <div class="marquee">
            <p class="text-gris font-Helvetica text-marquee">
            <marquee behavior="scroll" direction="left" scrollamount="30">
            Nice to meet you, I'm Jules.
            </marquee>
        </p>
        <p class="text-blanc font-Helvetica text-marquee">
            <marquee behavior="scroll" direction="right" scrollamount="30">
            Enchanté, moi c'est Jules.
            </marquee>
        </p>
        </div>
        <div class="photo">
            <img src="/images/jules.png" class="photo" alt="Photo-Jules">
        </div>
        <div class="presentation">
            <p class="text-blanc z-1">
            Bienvenue sur mon portfolio ! Je m’appelle Jules, j’ai 20 ans et je suis actuellement en deuxième année de BUT MMI (Métiers du Multimédia et de l’Internet).
            À travers ce site, vous aurez l’occasion de remarquer mon côté créatif et les différents projets qui m’animent vraiment (mais les autres, je les garde secret !).
            Que diriez vous de continuer votre visite de mon site ? Vous découvrirez sûrement pleins de choses intéressantes et en apprendrez plus sur qui je suis !
            </p>
        </div>
    </div>
    <div class="m-96">
        <p>test</p>
    </div>
</template>

<style>

</style>