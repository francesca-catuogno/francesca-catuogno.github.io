<script>
    let {
        title = "(TITLE)",
        description = [],
        items= [],
    } = $props();

    let activeIndex = $state(0);

    function nextCard() {
        if (activeIndex < items.length - 1) {
            activeIndex++;
        }
    }

    function prevCard() {
        if (activeIndex > 0) {
            activeIndex--;
        }
    }
</script>

<div class="w-full min-h-[45rem] pr-8 xl:pr-0 pl-6 md:pl-16 py-12 bg-[#F2F2F2] mb-14 overflow-hidden font-arimo flex flex-col justify-between">

    <!-- IN ALTO A SINISTRA: Titolo -->
    <div class="text-2xl md:text-3xl font-arimo font-normal mb-4">
        {title}
    </div>

    
    <div class="flex flex-col md:flex-row items-center gap-2 justify-between min-h-[30rem]">
    
        <!-- descrizione -->
        <div class="w-[100%] md:w-[40%] min-h-[8rem] font-arimo text-xl xl:text-3xl font-normal self-start md:self-end order-1">
            {#if description[activeIndex]}
                {description[activeIndex]}
            {/if}
        </div>
        


        <!-- 1. Freccia PRIMA della carta -->
        <button 
            onclick={prevCard} 
            disabled={activeIndex === 0}
            class="w-12 h-12 border-white border-2 bg-white/20 backdrop-blur-3xl flex items-center justify-center text-2xl shadow-[0_8px_8px_0_rgba(0,0,0,0.2)] transition-all duration-300 ease-out
            hover:bg-white/20 hover:scale-105 font-serif text-normal text-center hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.3)] select-none shrink-0 {activeIndex === 0 ? 'opacity-0' : ''} order-5 md:order-2"
        >
            <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99979 12.9597L-0.000214815 6.47974L5.99979 -0.000258923L7.29579 1.17574L3.09579 5.63974H16.5838V7.31974H3.09579L7.29579 11.7837L5.99979 12.9597Z" fill="black"/>
            </svg>
        </button>



        <!-- card attiva -->
        <div class="relative flex items-center justify-center w-[30rem] h-[40rem] order-2 md:order-3">

            {#each items as item, idx}

                {#if idx <= activeIndex}

                    {@const CurrentCard = item.component}

                    <div
                        class="absolute w-full transition-all duration-500"
                        style="
                            z-index: {idx};
                            transform: rotate({idx === activeIndex ? 0 : (idx - activeIndex) * 3}deg);
                        "
                    >
                        <CurrentCard {...item.props}/>
                    </div>

                {/if}

            {/each}

        </div>

        <!-- 3. Freccia DOPO la carta -->
        <button 
            onclick={nextCard} 
            disabled={activeIndex === items.length - 1}
            class="w-12 h-12 border-white border-2 bg-white/20 backdrop-blur-3xl flex items-center justify-center text-2xl shadow-[0_8px_8px_0_rgba(0,0,0,0.2)] transition-all duration-300 ease-out
            hover:bg-white/20 hover:scale-105 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.3)] select-none shrink-0 {activeIndex === items.length - 1 ? 'opacity-0' : ''} order-4"
            >
            <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5838 12.9597L9.28779 11.7837L13.4878 7.31974H-0.000214815V5.63974H13.4878L9.28779 1.17574L10.5838 -0.000258923L16.5838 6.47974L10.5838 12.9597Z" fill="black"/>
            </svg> 
        </button>



        <!-- preview -->
        <div class="relative flex items-center justify-center opacity-80 pointer-events-none max-w-[25rem] translate-x-50 {activeIndex === items.length - 1 ? 'opacity-0' : ''} hidden xl:flex order-5">
            {#if items[activeIndex + 1]}
                {@const PreviewCard = items[activeIndex + 1].component}

                    <PreviewCard {...items[activeIndex + 1].props}/>
            {/if}
        </div>

    </div>

</div>