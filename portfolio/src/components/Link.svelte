<script>
    let { href = "/", color = "white", children} = $props();
</script>

<a href={href} class="text-{color} hover:text-pinky transition-colors duration-300 font-arimo font-normal text-5xl">
    {@render children()}
</a>