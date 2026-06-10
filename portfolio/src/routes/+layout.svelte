<script lang="ts">
	
	import "../app.css";
	
	// Svelte 5: Usiamo $state per rendere la variabile reattiva
	let isOpen = $state(false);
	let { children } = $props();

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<svelte:head>
	<link rel="icon"/>
</svelte:head>



{#if isOpen}

<div id="menu" class="h-screen w-full fixed z-50 absolute top-36 left-0 mt-auto flex flex-col justify-evenly items-center bg-pinky text-white py-6">
	<a href="/whoami" class="text-white/60 hover:text-white transition-colors text-4xl" onclick={toggleMenu}>CHI SONO</a>
	<a href="/projects" class="text-white/60 hover:text-white transition-colors text-4xl" onclick={toggleMenu}>PROGETTI</a>
	<a href="/gallery" class="text-white/60 hover:text-white transition-colors text-4xl" onclick={toggleMenu}>GALLERIA FOTO</a>
	<div class="flex justify-between w-full">
		<div class="flex flex-col justify-evenly ml-10 items-center">
			<p>(contatti ↗)</p>
			<a class="text-2xl text-white/60 hover:text-white transition-colors" href="https://www.linktr.ee/francesca_catuogno">Linktr.ee/francesca_catuogno</a>
		</div>
		<div class="flex flex-col flex-col justify-between mr-10 items-center">
			<p>(linkedin ↗)</p>
			<a class="text-2xl text-white/60 hover:text-white transition-colors" href="https://www.linkedin.com/in/francesca-catuogno-317b422b3">Francesca Catuogno</a>
		</div>
	</div>
</div>

{/if}

<div id="navbar" class="fixed absolute z-50 h-36 w-full flex justify-between place-items-center  {isOpen ? 'bg-pinky' : 'bg-black rounded-b-3xl'} place-items-center">
	
	<!-- logo -->
	{#if !isOpen}
	<h1 class="text-white font-pacaembu text-xl font-bold m-10 hover:text-pinky transition-colors">
		<a href="/">FRAAAA</a>
	</h1>
	{/if}


	<!-- menu button -->
	<button 
		class="group absolute top-[1/2] -translate-x-4 left-1/2 w-8 h-8 cursor-pointer bg-transparent" 
		onclick={toggleMenu}
		aria-label="Apri menu"
	>
		<span class="absolute w-8 h-[2px] bg-white  {isOpen ? "" : "group-hover:bg-pinky" } transition-transform duration-300 {isOpen ? 'rotate-45' : 'rotate-0'} -translate-x-4"></span>
		<span class="absolute w-8 h-[2px] bg-white { isOpen ? "" : "group-hover:bg-pinky" } transition-transform duration-300 {isOpen ? 'rotate-135' : 'rotate-90'} -translate-x-4"></span>
	</button>


	<!-- language -->
	{#if !isOpen}
	<div id="language" class="flex m-10">
		<h1 class="text-white font-pacaembu text-xl font-bold">
			ITA
		</h1>
		<div class="absolute w-full h-[4px] bg-white rotate-90"></div>
		<h1 class="text-white font-pacaembu text-xl font-bold">
			ENG
		</h1>
	</div>
	{/if}

</div>

<main class="pt-36">
	{@render children()}
</main>