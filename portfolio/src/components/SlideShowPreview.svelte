<script lang="ts">
    let { photos} = $props();
    let index = $state(0);


    // Generiamo un array fisso di rotazioni (una per ogni foto) all'inizio, 
    // così ogni foto mantiene la sua inclinazione realistica nel mazzo
    let rotation = photos.map(() => Math.floor((Math.random() - 0.5) * 10));

    $effect(() => {
        const interval = setInterval(() => {
            index = (index + 1) % photos.length;
        }, 2000); // 3 secondi per godersi l'effetto

        return () => clearInterval(interval);
    });
</script>


<div class="flex flex-col items-center justify-center w-full h-40 mb-16">

    <div class="relative w-[20rem] md:w-[30rem] xl:w-[35rem]">
        {#each photos as photo, i}
            {#if index === i}
                <img 
                    src={photo} 
                    alt="Foto album"
                    style="rotate:{rotation[i]}deg; z-index: 23;"
                    class="absolute w-full border-2 border-pinky z-22 transition-all duration-500"
                />
            {:else}
                <img 
                    src={photo} 
                    alt="Foto album sotto" 
                    style="rotate:{rotation[i]}deg; z-index: 21;"
                    class="absolute w-full border-2 border-pinky transition-all duration-500"
                />
            {/if}
        {/each}
    </div>
</div>