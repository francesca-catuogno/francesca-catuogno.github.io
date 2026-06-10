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
    }, 200);

    // changes the imges 2 times, then stops

    setTimeout(() => {
        currentImg += 1;
    }, 2300);
    setTimeout(() => {
        currentImg += 1;
    }, 1200);
</script>

<main class="w-full h-screen relative top-24">

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
    
    <h1 class="text-9xl font-pacaembu font-normal text-white text-center transition animate-translate-up">
        FRANCESCA CATUOGNO
    </h1>
    
</main>
