<script lang="ts">
    import { fade } from 'svelte/transition';
    import Me_1 from '$lib/assets/me_1.jpg';
    import Me_2 from '$lib/assets/me_2.jpg';
    import Me_3 from '$lib/assets/me_3.jpg';

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

    setInterval(() => {
        animateText();
    }, 1000);
    setTimeout(() => {
        animationStart = true;
    }, 1000);

    // changes the imges 2 times, then stops

    setTimeout(() => {
        currentImg += 1;
    }, 2300);
    setTimeout(() => {
        currentImg += 1;
    }, 1200);
</script>

<div id="black-card" class="w-full h-auto relative top-24 rounded-b-3xl bg-black">

    <div class="flex justify-around w-full {animationStart ? 'items-top' : 'items-center'} ">
    
        <h1 class=" text-right w-1/4 text-4xl {animationStart ? 'translate-y-[12rem]' : 'translate-y-[0rem]'}  font-pacaembu font-normal text-white animate-translate-up">
            (PORTFOLIO
        </h1>
        <div class="w-1/3 h-[1/2] flex justify-center items-top">
            <div class="w-[75%] h-[32rem] relative transition animate-shrink">
                {#key currentImg}
                    <img 
                        src={imgSources[currentImg]} 
                        class="absolute top-0 left-0 w-full h-auto object-contain" 
                        alt="Francesca Catuogno"
                        transition:fade={{ duration: 250 }}
                    />
                {/key}
            </div>
        </div>
        
        <h1 id="service-design" class=" {animationStart ? 'translate-y-[12rem]' : 'translate-y-[0rem]'} mr-0 w-1/4 text-4xl font-pacaembu font-normal text-white animate-translate-up">
            {proprieties})
        </h1>
    </div>
    
    <h1 class="text-9xl font-pacaembu font-normal text-white ml-[4rem] transition animate-translate-up">
        FRANCESCA CATUOGNO
    </h1>
    
    <!-- riporta su -->
    <button class="fixed bottom-[4rem] right-[4rem] z-50 cursor-pointer transition animate-drop {animationStart ? '' : 'hidden'}" onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} type="button" aria-label="Torna su" >
        <svg xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
            <circle cx="36.5" cy="36.5" r="36.1" fill="white" fill-opacity="0.1" stroke="white" stroke-width="0.8"/>
            <path d="M34.8859 23.954C30.18 29.6032 24.759 37.7318 17.2569 38.6053C16.5272 33.929 18.1971 35.153 20.8414 33.2804C27.6286 28.4629 33.0496 21.4537 35.1847 12.9433L38.8035 12.9799C39.8955 22.4266 48.3575 31.685 56.3689 35.017L56.4326 38.6105C48.6758 37.669 43.1765 29.8438 38.3187 23.9644V60.5745H34.8859V23.9592V23.954Z" fill="white"/>
        </svg>
    </button>

    <!-- testo -->
    <h6 class="text-left text-white text-5xl ml-[4rem] w-[74rem] mt-14 transition animate-translate-up text-normal font-arimo">
        Credo che il design sia fondamentale per generare 
        cambiamento, per questo i miei progetti sono sempre 
        volti all’innovazione sociale. Mi interessa dar voce al sottofondo
        quotidiano, ciò che si dà per
        scontato, per creare consapevolezza
        e ambienti di vita migliori e rispettosi
        di umano e non-umano.
    </h6>


    <h6 class="m-auto text-right text-white text-3xl mr-[10rem] w-[39rem] text-normal font-arimo">
        Nel lavoro sono a mio agio
        nella ricerca 
        che porta all’ideazione di concept innovativi, 
        nello sviluppo della comunicazione 
        e di interfacce digitali e non. 
    </h6>

    <!-- tasto percorso -->
    <div class="flex justify-center p-24">
        <a class="border border-white bg-white/25 p-2 hover:p-2.5 font-arimo text-normal text-4xl w-auto h-auto m-auto" href="/whoami">
            il mio percorso
        </a>
    </div>
</div>

<div class="bg-pinky h-screen">

</div>
