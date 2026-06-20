<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import Me_1 from '$lib/assets/me_1.jpg';
    import Me_2 from '$lib/assets/me_2.jpg';
    import Me_3 from '$lib/assets/me_3.jpg';
    import Footer from '../components/Footer.svelte';
    import SoftwareSkils from '$lib/assets/software_skils.svg';
    import Background from '$lib/assets/home_background.svg';

    // booleans for animations
    let proprieties = $state("SERVICE DESIGN");


    // image loading and animation logic
    let imgSources = [Me_1, Me_2, Me_3];
    let currentImg = $state(0);

    let i = 0;
    let animationStart = $state(false);
    let services = ["SERVICE DESIGN", "PRODUCT DESIGN", "UX_UI", "COMUNICAZIONE"];

    function animateText() {
        i = ( i +1 ) % services.length;
        proprieties = services[i];
    }

    onMount(() => {
        // Avvio animazione testo
        const textInterval = setInterval(() => {
            const index = services.indexOf(proprieties);
            proprieties = services[(index + 1) % services.length];
        }, 1500);

        // Avvio animazione immagini
        const imgTimer1 = setTimeout(() => currentImg = 1, 1200);
        const imgTimer2 = setTimeout(() => currentImg = 2, 2300);

        // Avvio animazione scroll-to-top
        const startTimer = setTimeout(() => animationStart = true, 1000);

        // Pulizia quando il componente viene smontato
        return () => {
            clearInterval(textInterval);
            clearTimeout(imgTimer1);
            clearTimeout(imgTimer2);
            clearTimeout(startTimer);
        };
    });

</script>

<div id="black-card" class="relative z-10 w-full rounded-3xl p-2 md:p-8 xl:p-16 bg-black">

    <div class="flex flex-col gap-4 md:flex-row justify-between xl:justify-around w-full items-center md:items-top">
    
        <div class="md:-translate-y-38 xl:-translate-y-58 text-center md:text-right w-80 xl:w-1/4 text-md md:text-4xl animationStart mr-2 font-pacaembu font-light xl:font-normal text-white animate-translate-up wrap-anywhere xl:whitespace-nowrap">
            (PORTFOLIO
        </div>
        <div class="w-auto h-20 xl:h-120 flex justify-center md:items-top transition animate-shrink-smartphone md:animate-shrink ">
            <div class="w-full h-full relative">
                {#key currentImg}
                    <img 
                        src={imgSources[currentImg]} 
                        class="absolute top-0 left-0 w-full" 
                        alt="Francesca Catuogno"
                        transition:fade={{ duration: 250 }}
                    />
                {/key}
            </div>
        </div>
        
        <div id="service-design" class="md:-translate-y-38 xl:-translate-y-58 text-center md:text-left mr-0 w-80 xl:w-1/4 text-md md:text-4xl font-pacaembu sm:ml-2 font-light xl:font-normal text-white animate-translate-up wrap-anywhere xl:whitespace-nowrap">
            {proprieties})
        </div>
    </div>
    


    <div class=" xl:p-4 w-full h-auto">

        <div class="h-20 translate-y-0 md:-translate-y-16 xl:-translate-y-24 text-center md:text-left w-full text-[6.5vw] uppercase font-pacaembu font-bold md:font-normal text-white transition md:animate-translate-up whitespace-nowrap">
            FRANCESCA CATUOGNO
        </div>
        
            
        <!-- testo -->
        <p class="text-left text-white text-s md:text-3xl xl:text-5xl w-full xl:w-2/3 transition animate-fade-in-up text-normal font-arimo opacity-0">
            Credo che il design sia fondamentale per generare 
            cambiamento, per questo i miei progetti sono sempre 
            volti all’innovazione sociale. Mi interessa dar voce al sottofondo
            quotidiano, ciò che si dà per
            scontato, per creare consapevolezza
            e ambienti di vita migliori e rispettosi
            di umano e non-umano.
        </p>
        
        
        <p class="mt-16 md:mt-24 text-right text-white md:text-xl xl:text-3xl w-full xl:mr-0 xl:m-auto xl:w-1/3 text-normal font-arimo">
            Nel lavoro sono a mio agio
            nella ricerca 
            che porta all’ideazione di concept innovativi, 
            nello sviluppo della comunicazione 
            e di interfacce digitali e non. 
        </p>
    </div>

    <!-- tasto percorso -->
    <div class="sticky top-3/4 flex justify-center mt-16 md:mt-24 mb-16 md:mb-24">
        <a class="
            /* 1. Sfondo semi-trasparente molto leggero */
            bg-white/20 
            
            /* 2. L'effetto Vetro (Sfoca quello che sta sotto) */
            backdrop-blur-3xl 
            
            /* 3. Bordi sottili e leggermente trasparenti (simula lo spessore del vetro) */
            border border-white 
            
            /* 5. Ombra morbida per dare profondità e staccarlo dal fondo */
            shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
            
            /* Animazioni e interazioni fluide */
            transition-all duration-300 ease-out
            hover:bg-white/20 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
            
            /* I tuoi stili di spaziatura e font */
            p-4 font-arimo text-normal md:text-2xl xl:text-4xl text-white block w-auto h-auto m-auto" 
            href="/whoami">
            il mio percorso
        </a>
    </div>
</div>


<div class="bg-pinky w-full p-8 md:p-16 h-screen md:h-[300vh] relative -top-5 left-0 z-0">

    <h1 class=" sticky top-2/3 -translate-y-64 text-center text-xl md:text-6xl xl:text-[4.75rem] font-semibold z-10 wrap-break-word tracking-widest md:leading-28 xl:leading-36 flex justify-center"> 
        INNOVAZIONE SOCIALE<br>
        CAPACITY BUILDING<br>
        APPROCCIO SISTEMICO<br>
    </h1>
    
    <div class="md:h-screen">
        <img src={Background} alt="home background" class="w-[300vh]  md:w-full absolute top-8 left-0 md:top-16 px-8 md:px-16">
    </div>
    
    
    <div class="sticky top-[65%] flex justify-center z-20">
        <a class="
            /* 1. Sfondo semi-trasparente molto leggero */
            bg-white/20 
            
            /* 2. L'effetto Vetro (Sfoca quello che sta sotto) */
            backdrop-blur-xs 
            
            /* 3. Bordi sottili e leggermente trasparenti (simula lo spessore del vetro) */
            border border-white 
            
            /* 5. Ombra morbida per dare profondità e staccarlo dal fondo */
            shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
            
            /* Animazioni e interazioni fluide */
            transition-all duration-300 ease-out
            hover:bg-white/20 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
            
            /* I tuoi stili di spaziatura e font */
            p-4 font-arimo text-normal md:text-2xl xl:text-4xl text-white block w-auto h-auto m-auto" 
            href="/projects">
            scopri i progetti
        </a>
    </div>
</div>

<div class="bg-bg w-full p-8 xl:p-16 relative z-20 shadow-2xl">
    <div class="flex flex-col items-center gap-4 md:gap-16">
        <h1 class="font-pacaembu text-normal text-3xl md:text-4xl xl:text-5xl">
            SOFTWARE SKILLS
        </h1>
        <img src={SoftwareSkils} alt="software skils" class="w-full">
    </div>
</div>

<Footer />