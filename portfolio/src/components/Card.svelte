<script>
    let {
        title = null,
        image = null,
        description = null,
        leftText = null,
        rightText = null,
        isRed = false
    } = $props();
</script>

<div 
    class="
        border-pinky border-[3px] rounded-3xl p-4 w-full
        transition-all duration-500 shadow-md text-arimo
        {isRed ? 'bg-pinky' : 'bg-[#F2F2F2]'}
    "
>

    {#if image}
        <div class="h-[18rem] overflow-hidden rounded-2xl ">
            <img
                src={image}
                alt={title ?? 'Card image'}
                class="w-full h-full object-cover"
            />
        </div>
    {/if}


    {#if title}
        <div class="text-xl mt-3 font-semibold">
            {title}
        </div>
    {/if}


    {#if description}
        <div class="text-xl mt-3">
            {@html description}
        </div>
    {/if}


    {#if leftText || rightText}
        <div class="flex justify-between items-center mt-3">

            {#if leftText}
                <div class="text-sm md:text-xl {isRed ? 'text-black' : 'text-pinky'} uppercase font-bold underline">
                    {leftText}
                </div>
            {/if}

            {#if rightText}
                <div class="text-sm md:text-xl text-normal ">
                    {rightText}
                </div>
            {/if}

        </div>
    {/if}

</div>