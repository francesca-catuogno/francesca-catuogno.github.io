<script lang="ts">
    import { page } from '$app/state';
    import "../app.css";    
    
    let isOpen = $state(false);
    let { children } = $props();

    // 1. Definiamo isLight come derivato dalla rotta. 
    // Ogni volta che page.url.pathname cambia, isLight viene ricalcolato automaticamente.
    let isLight = $derived(['/whoami', '/projects'].includes(page.url.pathname));

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

<div id="menu" class="h-svh w-full fixed z-49 absolute top-0 left-0 flex flex-col justify-between items-center bg-pinky text-white p-36">
	<a href="/whoami" class="text-white/60 hover:text-white transition-colors text-4xl" onclick={toggleMenu}>CHI SONO</a>
	<a href="/projects" class="text-white/60 hover:text-white transition-colors text-4xl" onclick={toggleMenu}>PROGETTI</a>
	<div class="h-8 bg-pinky"></div>
	<a href="https://www.instagram.com/ennesimoprofiloconlefoto_?igsh=MW8wdzNncG9neTN6bw%3D%3D" class="text-white/60 hover:text-white transition-colors text-4xl" onclick={toggleMenu}>GALLERIA FOTO</a>
	<div class="flex justify-between w-full">
		<div class="flex flex-col justify-evenly ml-10 items-center font-pacaembu text-center">
			<p>(contatti ↗)</p>
			<a class="text-2xl text-white/60 hover:text-white transition-colors" href="https://www.linktr.ee/francesca_catuogno">Linktr.ee/francesca_catuogno</a>
		</div>
		<div class="flex flex-col justify-between mr-10 items-center font-pacaembu text-center">
			<p>(linkedin ↗)</p>
			<a class="text-2xl text-white/60 hover:text-white transition-colors" href="https://www.linkedin.com/in/francesca-catuogno-317b422b3">Francesca Catuogno</a>
		</div>
	</div>
</div>

{/if}

<div id="navbar" class="bg-bg fixed absolute z-50 h-36 w-full flex justify-between {isOpen ? 'bg-pinky' : 'rounded-b-3xl'} place-items-center dark">
	
	<!-- logo -->
	{#if !isOpen}
	<h1 class="text-[var(--color-fg)] font-pacaembu text-[20px] font-bold m-10 hover:text-pinky transition-colors">
		<a href="/">FRAAAA</a>
	</h1>
	{/if}


	<!-- menu button -->
	<button 
		class="group absolute top-[1/2] -translate-x-4 left-1/2 w-8 h-8 cursor-pointer bg-transparent" 
		onclick={toggleMenu}
		aria-label="Apri menu"
	>
		<span class="absolute w-8 h-[2px]  {isOpen ? "bg-white" : "group-hover:bg-pinky bg-fg" } transition-transform duration-300 {isOpen ? 'rotate-45' : 'rotate-0'} -translate-x-4"></span>
		<span class="absolute w-8 h-[2px]  {isOpen ? "bg-white" : "group-hover:bg-pinky bg-fg" } transition-transform duration-300 {isOpen ? 'rotate-135' : 'rotate-90'} -translate-x-4"></span>
	</button>


	<!-- language -->
	{#if !isOpen}
	<div id="language" class="">
		<!-- to-do languages change!! -->
	</div>
	{/if}

</div>


<main class="pt-36 bg-bg text-fg">
	{@render children()}
</main>