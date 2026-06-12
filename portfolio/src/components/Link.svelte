<script>
    let { href = "/", children} = $props();
</script>

<a href={href} class="focus:text-white hover:text-pinky transition-colors duration-300 font-arimo font-normal text-5xl text-[color-mix(in_srgb,var(--color-fg),transparent_40%)]">
    {@render children()}
</a>