<script>
    let { mainTitle, dataTable } = $props();
</script>

<div class="flex flex-col xl:flex-row gap-12 p-8 xl:p-16 w-full">

    <div class="w-full xl:w-96 shrink-0">
        <h2 class="text-3xl md:text-4xl xl:text-5xl font-light tracking-wide uppercase wrap-break-words leading-tight text-black">
            {mainTitle}
        </h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 flex-1 gap-x-12 gap-y-16 items-start">
        {#each dataTable as data}
        <div class="flex flex-col justify-between min-w-0 h-full">
            
            <div class="flex flex-col flex-grow">
                <h3 class="text-xl 2xl:text-2xl font-pacaembu font-normal mb-2 xl:mb-4 min-h-[2rem] md:min-h-[4rem] xl:min-h-[5rem] break-words leading-snug text-black">
                    {data.title}
                </h3>
                
                <hr class="border-t border-black mb-4 w-full" />
                
                <div class="mb-8 flex-grow">
                    <p class="text-lg xl:text-[1.3rem] font-arimo font-normal leading-relaxed mb-1 break-words">
                        {data.where}
                    </p>
                    {#if data.comment}
                        <p class="text-base xl:text-[1.15rem] font-arimo font-normal leading-relaxed text-gray-700 break-words">
                            {data.comment}
                        </p>
                    {/if}
                </div>
            </div>
            
            <span class="text-[#ff4a3b] font-medium block break-words mt-auto pb-2">
                {data.duration}
            </span>
            
        </div>
        {/each}
    </div>
</div>