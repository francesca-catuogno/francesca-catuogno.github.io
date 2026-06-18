<script>
    let { href = "/", children} = $props();
</script>

<a href={href} class="focus:text-white hover:text-pinky underline xl:no-underline transition-colors duration-300 font-arimo font-normal text-2xl xl:text-5xl text-[color-mix(in_srgb,var(--color-fg),transparent_40%)]">
    {@render children()}
</a>