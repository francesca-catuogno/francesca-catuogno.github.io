<script>
    import Footer from "../../../components/Footer.svelte";
    import MacBook from "$lib/assets/innesca/macbook.jpg";
    import Street from "$lib/assets/innesca/street.jpg";
    import Metro from "$lib/assets/innesca/metro.jpg";
    import History from "../../../components/History.svelte";
    import TextCard from "../../../components/TextCard.svelte";
    import LegendStakeholder from "$lib/assets/innesca/stakeholder_legend.svg";
    import stakeHolderMap from "$lib/assets/innesca/stakeholder_map.svg";
    import systemMap from "$lib/assets/innesca/system_map.svg";
    import systemLegend from "$lib/assets/innesca/system_legend.svg";
    import SlideShowPreview from "../../../components/SlideShowPreview.svelte";
    import Carousel from "../../../components/Carousel.svelte";
    import Card from "../../../components/Card.svelte";

    let photos = [Metro, MacBook, Street];

    let carouselDescription = [
            "Innesca è un servizio di counseling per donne NEET, progettato per innovare i processi di profiling e di orientamento di base solitamente erogati dai Centri per l’Impiego (CPI). Si inserisce nel periodo che intercorre tra l’iscrizione al CPI e l’attivazione del Programma GOL, trasformando il tempo di attesa un'esperienza strutturata di crescita e riattivazione.",
            "",
            "Innesca è un progetto di 120 ore con percorsi di profilazione personalizzata, workshop tematici e incentivi economici a sostegno della formazione",
            "soft skills considerate: collaborazione / problem framing / pensiero sistemico / pensiero critico / senso del futuro / adattabilità / capacità comunicative / iniziativa individuale / empatia",
            "",
            "Attraverso la web app è possibile controllare l’avanzamento del percorso, il calendario delle attività e opportunità, lavorative e formative, in linea con il proprio profilo.",
            "",
            "",
            "La scelta dei contenuti formativi è guidata dall’analisi congiunta tra le esigenze del mercato del lavoro e i riferimenti europei, in particolare l’European Skills, Competences, Qualifications and Occupations (ESCO), che fornisce un linguaggio comune per mettere in relazione competenze, qualifiche e profili occupazionali. Tale riferimento consente di progettare percorsi coerenti con gli standard europei e con le reali richieste occupazionali. All’interno di questo quadro, il percorso si concentra sullo sviluppo di financial skills, legal awareness e digital skills.",
            "La scelta dei contenuti formativi è guidata dall’analisi congiunta tra le esigenze del mercato del lavoro e i riferimenti europei, in particolare l’European Skills, Competences, Qualifications and Occupations (ESCO), che fornisce un linguaggio comune per mettere in relazione competenze, qualifiche e profili occupazionali. Tale riferimento consente di progettare percorsi coerenti con gli standard europei e con le reali richieste occupazionali. All’interno di questo quadro, il percorso si concentra sullo sviluppo di financial skills, legal awareness e digital skills.",
            "Queste direttive progettuali sono state applicate per lo sviluppo di un brief per un workshop site specific per la città di Napoli. Questa attività permette alle partecipanti di sperimentare strumenti ICT, gestione dei dati e creazione di contenuti online sviluppando al contempo competenze trasversali come pensiero critico e capacità comunicativa.",
            "",
            ""
    ];


    let cards = [
        {
            component: Card,
            props: {
                title: "RICERCA DESK",
                image: Metro,
                description: "Analisi del fenomeno NEET",
                leftText: "DISCOVER",
                rightText: "(DESK RESEARCH)",
            }
        },
        {
            component: Card,
            props: {
                title: "INTERVISTE",
                description: "Interviste agli stakeholder",
                isRed: true
            }
        },
        {
            component: Card,
            props: {
                image: Street,
                description:
                "Le utenti vengono a conoscenza del servizio attraverso la <strong> CAMPAGNA DI COMUNICAZIONE </strong> e il supporto delle associazioni. Le donne già iscritte al centro per l’impiego vengono indirizzare ad Innesca durante la fase di assessment del Programma GOL.",
                leftText: "DEFINE",
                rightText: "(SYSTEM MAP)"
            }
        }
    ];
</script>

<History
    next="puntopunto"/>

<div class="text-pinky w-full text-center whitespace-pre-wrap text-[1.75rem] mt-[2.63rem] font-arimo">
    learning by doing   |   futures & foresight
</div>

<SlideShowPreview photos={photos}/>
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


<!-- Blocco grigio -->

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
        <TextCard
            title="RICERCA DESK"
            comment="DISCOVER">
                <p><strong>Contesto:</strong> Fenomeno NEET in Italia, Sistema nazionale servizi per il lavoro e Politiche Attive del Lavoro (PAL)</p>
                <p><strong>Metodologie:</strong> Futures Studies; Futures&Foresight, Worldbuilding, Learning-by-doing.</p>
        </TextCard>
        <TextCard
            title="INTERVISTE"
            comment="DISCOVER">
                <p>Interviste semi-strutturate per comprendere le cause della sfiducia che molti giovani vivono nei confronti del lavoro.</p>
                <p>Ariberto Vergnani (<strong>psicologo del lavoro</strong>) & Erika Mancinelli (<strong>HR APL Mediawork Perugia</strong>)</p>
        </TextCard>
        <TextCard
            title="SVILUPPO SERVIZIO"
            comment="DEFINE & DEVELOP">
            <p> Definizione <strong class="underline">insights</strong> e <strong class="underline">problem statement</strong>; identificazione <strong class="underline">stakeholder</strong>,  delle interazioni reciproche
            <strong class="underline">(ecosystem map)</strong> e con i touchpoint <strong class="underline">(system map)</strong>; visualizzazione dell’esperienza 
            <strong class="underline">(customer journey map, service blueprint)</strong></p>
        </TextCard>
        <TextCard
            title="RICERCA DESK"
            comment="DEVELOP & (RE)DEFINE">
                <p>
                    Validazione della proposta progettuale attraverso la collaborazione con cooperative sociali e CPI in Campania, nell'ambito dello sviluppo del progetto per il Bando FUTURA+ – Fondo Repubblica Digitale.
                </p>
        </TextCard>
        <TextCard
            title="DEFINIZIONE"
            comment="DELIVER"
            >
                <p>Progettazione di workshop site specific per Napoli.</p>

                <p>Definizione del design system e della strategia di comunicazione.</p>

                <p>Sviluppo prototipo web app e comunicazione fisica.  </p>
        </TextCard>
    </div>

</div>


<div class="flex flex-col md:flex-row p-5 md:py-[6.9rem] xl:px-[10rem] items-center xl:items-start gap-[2rem] ">

    <div class="flex flex-col xl:w-1/2 gap-[3rem]">
        <div class="text-xl md:text-2xl xl:text-3xl uppercase font-arimo ">
            (insights)
        </div>
        <div class="text-md md:text-xl xl:text-2xl uppercase font-arimo ">
            L’inattività giovanile femminile non può essere ricondotta ad una condizione individuale, ma è lo specchio di fragilità sociali e sistemiche.
        </div>
    </div>

    <div class="flex flex-col xl:w-1/2 gap-[2rem] text-md md:text-xl xl:text-2xl font-arimo *:border-2 *:hover:border-pinky *:hover:text-pinky *:px-6 *:py-3">

        <div class="mr-0 mx-auto md:rotate-1 md:translate-x-2">
            Ai <strong>NEET</strong> mancano strumenti che permettano loro di costruire un 
            presente che li rappresenti e immaginare un futuro possibile.   
        </div>
        <div class="ml-0 mx-auto w-full md:-rotate-2 md:-translate-x-2">
            <strong>I giovani e le giovani</strong> non sono in grado di dare un nome alle proprie 
            competenze, non le riconoscono e, di conseguenza, non riesco a valorizzarle
        </div>
        <div class="mr-0 mx-auto md:rotate-1 md:translate-x-2">
            Ai <strong>NEET</strong> mancano strumenti che permettano loro di costruire un 
            presente che li rappresenti e immaginare un futuro possibile.   
        </div>
        <div class="ml-0 mx-auto w-full md:-rotate-2 md:-translate-x-2">
            <strong>I giovani e le giovani</strong> non sono in grado di dare un nome alle proprie 
            competenze, non le riconoscono e, di conseguenza, non riesco a valorizzarle
        </div>
    </div>

    
</div>

<div class="flex flex-col p-5 md:py-[6.9rem] xl:px-[10rem] gap-[2rem]">
    <div class="text-xl md:text-2xl xl:text-3xl uppercase font-arimo font-normal">
        (concept)
    </div>
    <div class="text-xl md:text-2xl xl:text-5xl font-arimo font-normal">
        Innesca ridisegna le modalità di profilazione, trasformandole da procedure amministrative in dispositivi 
        di ascolto capaci di restituire un quadro realistico delle competenze e degli obiettivi individuali. 
        Attraverso metodologie di <par class="underline font-bold"> futures & foresight </par>, 
        <par class="underline font-bold">learning by doing</par> e <par class="underline font-bold">role play</par> ogni utente viene guidata in un
        percorso personalizzato di riattivazione, orientato allo sviluppo di <par class="underline font-bold">autonomia</par>,
        <par class="underline font-bold"> senso critico</par> e capacità di 
        <par class="underline font-bold">progettazione del proprio futuro</par> professionale. Un percorso parallelo di
         <par class="underline font-bold">train the trainers</par> trasforma gli operatori
        da gestori di procedure a facilitatori, rafforzando la capacità dei Centri per l'Impiego di generare empowerment sistemico.
        Innesca agisce in modo complementare ai servizi esistenti. Il modello, sperimentato in Campania, è progettato per essere
        replicabile in diversi contesti territoriali.
    </div>
</div>


<div class="text-xl md:text-2xl xl:text-3xl uppercase font-arimo font-normal px-5 xl:px-[10rem]">
    (STAKEHOLDER MAP)
</div>
<div class="flex flex-col xl:flex-row p-5 md:py-[5rem] xl:px-[10rem] xl:items-end gap-[2rem]">
    <div class="flex flex-col gap-[2rem] xl:w-1/2">
        <div class="flex flex-col md:flex-row gap-[2rem]">
            <div class="flex flex-col gap-[1rem]">
                <img src={LegendStakeholder} alt="Legenda stakeholder" class="w-[20rem] md:w-[30rem] xl:w-[35rem] order-2 xl:order-1"/>
                <div class="text-xl md:text-2xl xl:text-3xl font-arimo font-normal order-1 xl:order-2">
                    Il progetto è caratterizzato da un doppio target:
                    donne NEET e operatrici/ori dei Centro per l’Impiego.
                    Gli stakeholder sono sia esterni che interni alla Pubblica Amministrazione.
                </div>
            </div>
            
        </div>
    </div>
    <div class="">
        <img src={stakeHolderMap} alt="Mappa degli stakeholder" class="w-full"/>
    </div>
</div>

<div class="text-xl md:text-2xl xl:text-3xl uppercase font-arimo font-normal px-5 xl:px-[10rem]">
    (system MAP)
</div>

<div class="flex flex-col xl:flex-row p-2 md:py-[5rem] xl:px-[10rem] items-end gap-[2rem] w-full">
    <div>
        <img src={systemMap} alt="Mappa del sistema" />
    </div>
    <div class="mr-0 mx-auto">
        <img src={systemLegend} alt="Mappa del sistema" class="w-40 md:w-full"/>
    </div>
</div>


<Carousel 
    items={cards}
    description = {carouselDescription}
    title = {"(FASI SERVIZIO)"}
/>


<Footer/>