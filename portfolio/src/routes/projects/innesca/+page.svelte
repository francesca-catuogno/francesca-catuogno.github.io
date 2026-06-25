<script>
    import Footer from "../../../components/Footer.svelte";
    import MacBook from "$lib/assets/innesca/macbook.jpg";
    import Street from "$lib/assets/innesca/street.jpg";
    import Metro from "$lib/assets/innesca/metro.jpg";
    import History from "../../../components/History.svelte";
    import Card from "../../../components/Card.svelte";
    

    let index = $state(0);
    let photos = [Metro, MacBook, Street];

    
    // Generiamo un array fisso di rotazioni (una per ogni foto) all'inizio, 
    // così ogni foto mantiene la sua inclinazione realistica nel mazzo
    let rotation = photos.map(() => (Math.random() - 0.6) * 10);

    $effect(() => {
        const interval = setInterval(() => {
            index = (index + 1) % photos.length;
        }, 3000); // 3 secondi per godersi l'effetto

        return () => clearInterval(interval);
    });
</script>

<History
    next="puntopunto"/>



<div class="text-pinky w-full text-center whitespace-pre-wrap text-[1.75rem] mt-[2.63rem] font-arimo">
    learning by doing   |   futures & foresight
</div>

<div class="flex flex-col items-center justify-center w-full h-40 mb-16">

    <div class="relative w-[20rem] md:w-[30rem] xl:w-[35rem]">
        {#each photos as photo, i}
            {#if index === i}
                <img 
                    src={photo} 
                    alt="Foto album"
                    style="transform: rotate({rotation[i]}deg);"
                    class="absolute w-full border-2 border-pinky z-22"
                />
            {:else}
                <img 
                    src={photo} 
                    alt="Foto album sotto" 
                    style="transform: rotate({rotation[i]}deg); z-index: 21;"
                    class="absolute w-full border-2 border-pinky"
                />
            {/if}
        {/each}
    </div>
</div>
<div class="relative font-pacaembu font-normal text-[20vw] trans xl:-translate-y-[5rem] z-30 xl:p-2">
    INNESCA
</div>



<div class="flex flex-col xl:flex-row justify-between px-5 xl:px-[10rem] font-arimo gap-[1rem] xl:gap-[20rem] mt-2">
    <div class="text-xl md:text-2xl xl:text-3xl w-[10rem]">
        (DESCRIZIONE)
    </div>
    <div class="text-3xl md:text-4xl xl:text-5xl xl:w-[80rem]">
        Innesca è un servizio di counseling per donne NEET, 
        progettato per innovare i processi di profiling e di orientamento di base solitamente erogati dai 
        Centri per l’Impiego (CPI). Si inserisce nel periodo che intercorre tra l’iscrizione al CPI e l’attivazione del Programma GOL, trasformando il tempo di attesa in un'esperienza strutturata di crescita e riattivazione.
    </div>
</div>

<div class="flex flex-col xl:flex-row justify-between px-5 xl:px-[10rem] font-arimo gap-[1rem] xl:gap-[20rem] mt-20">
    <div class="text-xl md:text-2xl xl:text-3xl w-[10rem]">
        (OBIETTIVI)
    </div>
    <div class="text-3xl md:text-4xl xl:text-5xl xl:w-[80rem]">
        Supportare le persone nel riconoscere e collocare le proprie competenze nel presente, come punto di partenza per immaginare traiettorie future e uscire dall'isolamento. Rafforzare una lettura riflessiva delle proprie conoscenze e competenze trasferibili. Ripensare i Centri per l'Impiego come luoghi capaci di generare empowerment e fare da ponte tra persone, mercato del lavoro e istituzioni.
    </div>
</div>


<div class="flex flex-col xl:flex-row justify-between px-5 xl:px-[10rem] font-arimo gap-[1rem] xl:gap-[20rem] mt-20">
    <div></div>
    <div class="flex flex-col xl:flex-row text-3xl gap-26">
        <div>
            <span class="text-pinky">CONTESTO PROGETTUALE</span><br>
            TESI MAGISTRALE
        </div>
        <div>
            <span class="text-pinky">IL MIO RUOLO</span><br>
            PROGETTO<br> 
            INDIVIDUALE
        </div>
        <div>
            <span class="text-pinky">DURATA PROGETTO</span><br>
            SET ‘25 — FEB ‘26
        </div>
    </div>
</div>


<div class="bg-[#F2F2F2] w-full py-[3.73rem] mt-[6.5rem]">
    <div class="flex flex-col xl:flex-row justify-between px-5 xl:px-[10rem] font-arimo gap-[1rem] xl:gap-[20rem]">
        <div class="text-xl md:text-2xl xl:text-3xl w-[10rem]">
            (PROCESSO)
        </div>
        <div class="text-3xl md:text-4xl xl:text-5xl xl:w-[80rem]">
            Il progetto nasce da un interesse personale per l'inclusione lavorativa e da una ricerca approfondita sul fenomeno NEET e le Politiche Attive del Lavoro. Questo mi ha portata a intervistare esperti del settore, partecipare alla progettazione di una proposta per il Bando Futura+, identificare una rete territoriale in Campania, entrando in contatto diretto con cooperative sociali e sportelli CPI per comprendere i bisogni reali delle destinatarie.
        </div>
    </div>

    <div class="flex  flex-col sm:flex-row flex-wrap items-center justify-between md:justify-around gap-[1.5rem] mt-[12rem] md:px-[2rem] xl:px-[6.67rem] *:h-[20rem]">
        <Card
            title="RICERCA DESK"
            comment="DISCOVER">
                <p><strong>Contesto:</strong> Fenomeno NEET in Italia, Sistema nazionale servizi per il lavoro e Politiche Attive del Lavoro (PAL)</p>
                <p><strong>Metodologie:</strong> Futures Studies; Futures&Foresight, Worldbuilding, Learning-by-doing.</p>
        </Card>
        <Card 
            title="INTERVISTE"
            comment="DISCOVER">
                <p>Interviste semi-strutturate per comprendere le cause della sfiducia che molti giovani vivono nei confronti del lavoro.</p>
                <p>Ariberto Vergnani (<strong>psicologo del lavoro</strong>) & Erika Mancinelli (<strong>HR APL Mediawork Perugia</strong>)</p>
        </Card>
        <Card
            title="SVILUPPO SERVIZIO"
            comment="DEFINE & DEVELOP">
            <p> Definizione <strong class="underline">insights</strong> e <strong class="underline">problem statement</strong>; identificazione <strong class="underline">stakeholder</strong>,  delle interazioni reciproche
            <strong class="underline">(ecosystem map)</strong> e con i touchpoint <strong class="underline">(system map)</strong>; visualizzazione dell’esperienza 
            <strong class="underline">(customer journey map, service blueprint)</strong></p>
        </Card>
        <Card
            title="RICERCA DESK"
            comment="DEVELOP & (RE)DEFINE">
                <p>
                    Validazione della proposta progettuale attraverso la collaborazione con cooperative sociali e CPI in Campania, nell'ambito dello sviluppo del progetto per il Bando FUTURA+ – Fondo Repubblica Digitale.
                </p>
        </Card>
        <Card
            title="DEFINIZIONE"
            comment="DELIVER"
            >
                <p>Progettazione di workshop site specific per Napoli.</p>

                <p>Definizione del design system e della strategia di comunicazione.</p>

                <p>Sviluppo prototipo web app e comunicazione fisica.  </p>
        </Card>
    </div>

</div>

<Footer/>