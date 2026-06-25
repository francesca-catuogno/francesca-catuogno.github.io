<script>
  // Proprietà (Props) modulari e personalizzabili
  let {comment = '', title, children} = $props();
  
  // Stato interno per gestire il click / espansione del testo
  let isExpanded = $state(false);

  function toggleCard() {
    isExpanded = !isExpanded;
  }
</script>

<div 
  on:click={toggleCard}
  class="w-[19rem] rounded-[24px] cursor-pointer flex flex-col border-transparent border-2 border-transparent hover:border-pinky  justify-between select-none
    {isExpanded 
      ? 'bg-pinky' 
      : ' bg-white'}"
>
  
    <div class="flex flex-col justify-between p-[1rem] h-full">
        <h2 class="text-[1.5rem] font-normal uppercase">
        {title}
        </h2>
        <div class="text-base flex text-[1.1rem] flex-col gap-4 animate-fade-in {isExpanded? '': 'text-white'}">
                {@render children()}
        </div>
            
        <div class="flex items-center gap-1 text-xs font-medium tracking-wider uppercase opacity-80 {isExpanded? 'text-pinky': ''}">
        {comment} <span class="text-sm font-light">+</span>
        </div>
    </div>
</div>

<style>
  /* Piccola animazione per rendere la comparsa del testo più fluida */
  .animate-fade-in {
    animation: fadeIn 0.25s ease-out forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>