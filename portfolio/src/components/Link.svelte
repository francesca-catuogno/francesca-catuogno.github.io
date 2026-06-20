<script>
    let { href = "/", isUnderline = false, isBig = true, font='arimo', color = null,  children} = $props();

    // svelte-ignore state_referenced_locally
    let colorClass = color ? 'text-[${color}]':'text-[color-mix(in_srgb,var(--color-fg),transparent_40%)]';
</script>


{#if isBig}
<a href={href} class="focus:text-white hover:text-pinky underline {isUnderline ? 'hover:underline' : ''}  xl:no-underline transition-colors duration-300 font-arimo font-{font} text-3xl xl:text-[3.2rem] {colorClass}">
    {@render children()}
</a>
{:else}
<a href={href} class="focus:text-white hover:text-pinky underline {isUnderline ? 'hover:underline' : ''}  xl:no-underline transition-colors duration-300 font-arimo font-{font} text-xl xl:text-[2rem] {colorClass}">
    {@render children()}
</a>
{/if}