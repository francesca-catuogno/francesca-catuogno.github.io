<script>
    let { prev = null, next = null} = $props();
</script>


<div class="px-5 md:px-16 flex justify-between text-sm md:text-[1.75rem] font-normal font-arimo">
    <a href="/projects/" class=" hover:text-pinky hover:underline xl:no-underline underline transform duration-300">
        progetti
    </a>
    <div class="ml-4 text-bold">
        >
    </div>
    {#if prev}
        <a href="/projects/{prev}" class="ml-4 mr-auto hover:text-pinky hover:underline xl:no-underline underline transform duration-300">
            precedente
        </a>
    {:else}
        <div class="ml-4 mr-auto text-grayy">
            precedente
        </div>
    {/if}
    
    {#if next}
        <a href="/projects/{next}" class=" hover:text-pinky hover:underline xl:no-underline underline transform duration-300">
            successivo
        </a>
    {:else}
        <div class=" text-grayy">
            successivo
        </div>
    {/if}

    
</div>