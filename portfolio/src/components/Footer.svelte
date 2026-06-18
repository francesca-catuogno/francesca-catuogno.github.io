<script>
    import Coockie from "$lib/assets/coockie.png"
    import Link from "./Link.svelte"
</script>


<div class=" w-full h-auto p-4 xl:p-24">
    
    
    <div class="w-full h-[2px] mb-16 bg-fg"></div>

    <div class="font-pacaembu font-extralight font text-3xl xl:text-5xl mb-8">
        Grazie per essere arrivat* fino a qui, 
    </div>

    <div class="font-pacaembu text-4xl xl:text-8xl group cursor-pointer mb-16">
        <a href="https://tr.ee/0LVNr0QH16" class="items-center gap-6">
            
            <!-- Testo con transizione di colore -->
            <span class="group-hover:text-pinky transition-colors duration-300 w-3/4 underline xl:no-underline">
                SCAMBIAMO DUE
            </span>
            
            <div class="flex items-center">
                <span class="group-hover:text-pinky transition-colors duration-300 w-auto underline xl:no-underline">
                    CHIACCHIERE!
                </span>
                <!-- Immagine trattata come un'emoji -->
                <img 
                    src={Coockie} 
                    alt="Cookie"
                    class="w-[0.8em] h-[0.8em] transition-all duration-500 ease-in-out 
                        opacity-0 group-hover:opacity-100
                        rotate-0 group-hover:rotate-12 translate-x-[-20px] group-hover:translate-x-0" 
                />
            </div>
        </a>
    </div>

    <div class="flex items-center justify-center">
        <Link
            href = "https://www.linkedin.com/in/francesca-catuogno-317b422b3"
        >
            Linkedin
        </Link>

        <div class="m-4 rounded-full w-[16px] h-[16px] bg-fg"></div>

        <Link
            href = "https://linktr.ee/francesca_catuogno"
        >
            Linktr.ee
        </Link>
    </div>

</div>