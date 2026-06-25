<script lang="ts">
    import { page } from '$app/state';
    import "../app.css";    
    
    let isOpen = $state(false);
    let { children } = $props();

    // 1. Definiamo isLight come derivato dalla rotta. 
    // Ogni volta che page.url.pathname cambia, isLight viene ricalcolato automaticamente.
	let isLight = $derived(/^(\/whoami|\/projects(\/|$))/.test(page.url.pathname));

    // 2. Usiamo $effect per sincronizzare la classe CSS.
    // Questo effetto "osserva" isLight: ogni volta che cambia, esegue il codice dentro.
    $effect(() => {
        if (isLight) {
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
        }
    });

    function toggleMenu() {
        isOpen = !isOpen;
    }
</script>

<svelte:head>
	<link rel="icon"/>
</svelte:head>



{#if isOpen}

<div id="menu" class="h-[90vh] w-full fixed z-50 absolute top-24 md:top-36 left-0 flex flex-col justify-between items-center bg-pinky text-white xs:p-8 md:p-16 text-center">
	<a href="/whoami" class="text-white/60 hover:text-white transition-colors  text-5xl md:text-7xl" onclick={toggleMenu}>CHI SONO</a>
	<a href="/projects" class="text-white/60 hover:text-white transition-colors text-5xl md:text-7xl" onclick={toggleMenu}>PROGETTI</a>
	<div class="bg-pinky"></div>
	<a href="https://www.instagram.com/ennesimoprofiloconlefoto_?igsh=MW8wdzNncG9neTN6bw%3D%3D" class="text-white/60 hover:text-white transition-colors text-5xl md:text-7xl" onclick={toggleMenu}>GALLERIA FOTO</a>
	<div class="flex flex-row justify-between w-full p-4">
		<div class="flex flex-col justify-evenly items-center font-pacaembu text-center">
			<p>(contatti ↗)</p>
			<a class="md:text-2xl text-white/60 hover:text-white transition-colors" href="https://www.linktr.ee/francesca_catuogno">Linktree</a>
		</div>
		<div class="flex flex-col justify-between items-center font-pacaembu text-center">
			<p>(linkedin ↗)</p>
			<a class="md:text-2xl text-white/60 hover:text-white transition-colors" href="https://www.linkedin.com/in/francesca-catuogno-317b422b3">Francesca Catuogno</a>
		</div>
	</div>
</div>

{/if}

<div id="navbar" class=" bg-bg fixed z-50 h-24 md:h-36 w-full {isOpen ? 'bg-pinky' : 'rounded-b-3xl'} flex items-center p-6 md:p-16 dark">
	
	<!-- logo -->
	{#if !isOpen}
	<div class="-translate-y-2 text-fg font-pacaembu self-center text-xl md:text-2xl font-bold hover:text-pinky transition-colors">
		<a href="/">FRAAAA</a>
	</div>
	{/if}


	<!-- menu button -->
	<button 
		class="group absolute -translate-x-4 -translate-y-2 right-0 md:left-1/2 w-8 h-8 cursor-pointer bg-transparent mr-10" 
		onclick={toggleMenu}
		aria-label="Apri menu"
	>
		<span class="absolute w-6 md:w-8 h-[2px]  {isOpen ? "bg-white" : "group-hover:bg-pinky bg-fg" } xl:transition-transform duration-300 {isOpen ? 'rotate-45' : 'rotate-0'} -translate-x-4"></span>
		<span class="absolute w-6 md:w-8 h-[2px]  {isOpen ? "bg-white" : "group-hover:bg-pinky bg-fg" } xl:transition-transform duration-300 {isOpen ? 'rotate-135' : 'rotate-90'} -translate-x-4"></span>
	</button>

</div>
<!-- riporta su -->
<button 
    class="fixed bottom-8 right-8 xl:bottom-16 xl:right-16 w-14 h-14 md:w-18 md:h-18 z-40 cursor-pointer transition  backdrop-blur-sm animate-drop rounded-full {isLight ? 'mix-blend-difference' : ''}" 
    onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
    type="button" 
    aria-label="Torna su"
>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 73" fill="none">
        <circle cx="36.5" cy="36.5" r="36.1" fill="white" fill-opacity="0.1" stroke="white" stroke-width="1.5"/>
        <path d="M34.8859 23.954C30.18 29.6032 24.759 37.7318 17.2569 38.6053C16.5272 33.929 18.1971 35.153 20.8414 33.2804C27.6286 28.4629 33.0496 21.4537 35.1847 12.9433L38.8035 12.9799C39.8955 22.4266 48.3575 31.685 56.3689 35.017L56.4326 38.6105C48.6758 37.669 43.1765 29.8438 38.3187 23.9644V60.5745H34.8859V23.9592V23.954Z" fill="white"/>
    </svg>
</button>

<main class="absolute top-24 md:top-36 left-0 bg-bg text-fg w-full">
	{@render children()}
</main>