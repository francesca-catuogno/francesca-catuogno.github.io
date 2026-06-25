<script lang='ts'>
    let { title = "titolo", date = "oggi", comments = ["___","___"] , source , url} = $props();
</script>



<a class="flex flex-col font-arimo" href="/projects/{url}">
    <div class="flex flex-row justify-between font-bold">
        <div>
            {title}
        </div>
        <div>
            {date}
        </div>
    </div>

    <img src={source} alt={title} class="hover:border-pinky hover:border-2 mt-2"/>

    <div class="flex flex-row justify-between mt-2">
        {#each comments as comment}
        <div class="text-center w-1/4 md:w-auto leading-4">
            {comment}
        </div>
        {/each}
    </div>
</a>