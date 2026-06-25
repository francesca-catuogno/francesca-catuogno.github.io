<script>
    import Footer from "../../components/Footer.svelte";
    import Project from "../../components/Project.svelte";

    import anteprimaInnesca from "$lib/assets/anteprime/innnesca.jpg";
    import anteprimaPP from "$lib/assets/anteprime/puntopunto.gif";
    import anteprimaEcotopie from "$lib/assets/anteprime/ecotopie.gif";

</script>


<div class="flex  flex-col md:flex-row md:mt-32 xl:mt-68 px-8 md:px-12 xl:px-16 items-top gap-4 xl:gap-16">
    <div class="text-5xl md:text-7xl xl:text-9xl font-pacaembu font-normal">
        PROGETTI
    </div>
    <p class=" md:text-xl xl:text-3xl font-normal md:w-120 xl:w-160">
        Tre progetti, tre dimensioni del mio approccio: la gestione della complessità sistemica, la progettazione di un'esperienza per un festival, lo sviluppo di un'interfaccia web.
    </p>
</div>


<div class="grid grid-cols-1 md:grid-cols-2 md:gap-8 text-md xs:text-lg xl:gap-18 w-full mt-16 md:mt-24 xl:mt-32 px-8 md:px-12 xl:px-16 gap-y-10 xl:gap-y-24 justify-around items-center">


    <Project
        title="innesca"
        url="innesca"
        date="2026"
        source={anteprimaInnesca}
        comments={["learning by doing","futures & foresight"]}
        />


    <Project
        title="PuntoPunto"
        url="puntopunto"
        date="2025"
        source={anteprimaPP}
        comments={["valorizzazione patrimonio culturale","design sistemico"]}
        />

    <div class="md:col-span-2">
        <Project
            title="ecotopie — voci della pialassa"
            url="ecotopie"
            date="2025"
            source={anteprimaEcotopie}
            comments={["serious games","futuri prospettici","processi partecipativi"]}
            />
    </div>

    
</div>

<Footer/>


