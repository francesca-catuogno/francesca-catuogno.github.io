<script lang="ts">
    import Footer from "../../components/Footer.svelte";
    import Table from "../../components/Table.svelte";

    // Dati Tabella 1
    const studi = [
        {
        title: "Laurea Magistrale in Advanced Design (LM12) / curriculum servizi",
        where: "Alma Mater Studiorum — Università di Bologna.",
        comment: "Votazione: 110/110 e lode",
        duration: "settembre 2023 — febbraio 2026"
        },
        {
        title: "Laurea in Design (L4)",
        where: "Università degli Studi di Perugia.",
        comment: "Votazione: 110/110 e lode",
        duration: "settembre 2019 — febbraio 2023"
        },
        {
        title: "Diploma Liceo Scientifico",
        where: "Liceo Scientifico ann. Convitto Nazionale “Principe di Napoli”, Assisi (PG)",
        comment: null,
        duration: "settembre 2014 — giugno 2019"
        }
    ];

    const extra = [
        {
        title: "Service Designer freelance",
        where: "Attività di gestione workshop per le comunità. Gestione di moduli formativi per il progetto FRESCO promosso dal MASE nell’ottica della Strategia Nazionale per lo Sviluppo Sostenibile",
        comment: "DA, Alma Mater Studiorum — Università di Bologna",
        duration: "da giugno 2026 "
        },
        {
        title: "Formatrice & hostess",
        where: "Formatrice per il progetto “Nonno clicca qui” sullo sviluppo di competenze digitali e consapevolezza online per over 70; attività di sorveglianza durante test d’ingresso universitari.",
        comment: "Logilux",
        duration: "settembre 2025 — in corso"
        },
        {
        title: "Facilitatrice",
        where: "Facilitazione workshop aziendale presso CRIF SpA",
        comment: "Commonground srl",
        duration: "dicembre 2025"
        },
        {
        title: "Bibliotecaria",
        where: "Collaborazione studentesca (150H) presso la Biblioteca Biomedica, registrazione e rientro prestiti",
        comment: "Commonground srl",
        duration: "dicembre 2025"
        },
        {
        title: "Bibliotecaria",
        where: "Collaborazione studentesca (150H) presso la Biblioteca Biomedica, registrazione e rientro prestiti",
        comment: "Commonground srl",
        duration: "dicembre 2025"
        },
        {
        title: "Bibliotecaria",
        where: "Collaborazione studentesca (150H) presso la Biblioteca Biomedica, registrazione e rientro prestiti",
        comment: "Commonground srl",
        duration: "dicembre 2025"
        },
        {
        title: "Bibliotecaria",
        where: "Collaborazione studentesca (150H) presso la Biblioteca Biomedica, registrazione e rientro prestiti",
        comment: "Commonground srl",
        duration: "dicembre 2025"
        },
        {
        title: "Bibliotecaria",
        where: "Collaborazione studentesca (150H) presso la Biblioteca Biomedica, registrazione e rientro prestiti",
        comment: "Commonground srl",
        duration: "dicembre 2025"
        }
    ];

</script>

<div class="size-lvw px-6 md:px-24 w-full h-auto">
    <h1 class="text-center font-pacaembu text-8xl">
        CHI SONO
    </h1>


    <!-- primo testo -->
    <p class="font-normal md:text-3xl mb-16 w-full xl:w-2/3 h-auto">
        Concluso il liceo scientifico, ho deciso, un po’ alla cieca, che il disegno industriale fosse la scelta migliore da prendere per continuare gli studi. Era l’ambito che meglio sposava i miei interessi: il disegno, la fotografia, l’architettura d’interni, il “mettere le mani in pasta”, il desiderio di poter fare qualcosa di concreto per generare un cambiamento positivo, tutto senza accantonare definitivamente la curiosità per le materie tecnico-scientifiche. 
        <br><br>
        ✨ fortunatamente è andata bene✨
        <br><br>
        Nel 2023 mi sono laureata presso l’Università degli  Studi di Perugia a conclusione di un percorso triennale durante il  quale ho avuto modo di affacciarmi al mondo della progettazione a 360°,
        spaziando dall’<par class="underline"> Interior al Product, dal Retail e l’Exhibit  all’Urban design.</par> 
        Durante quegli anni ho capito che quello che più mi appassiona è pensare al sistema per il quale si progetta, prima che a quale forma avrà l’oggetto o quale struttura si addica più ad 
        uno spazio. 
        Mi interessava approfondire lo studio del contesto in cui un progetto si inserisce e come gli utenti interagiscano con esso e lo influenzino, e viceversa. 
        <br><br>
        Così ho deciso di continuare la mia formazione specializzandomi in <par class="underline">Service Design</par>  presso l’Università di Bologna. 
        <br><br>
        Oggi sono una service designer neolaureata, con un forte interesse per i <par class="underline">wicked problems, l’innovazione sociale e il dialogo interculturale e intergenerazionale.</par> Sono affascinata dalla potenza che un <par class="underline">approccio bottom-up</par> sia in grado di generare. 
        In tutti i progetti di cui mi sono occupata ho cercato di progettare un prodotto-servizio in grado di creare consapevolezza e coinvolgimento negli utenti, in modo che essi possano diventare parte fondamentale del miglioramento degli ambienti di vita. 
    </p>

    <h6 class="font-arimo font-normal mr-0 m-auto md:text-2xl md:text-right w-full md:w-xl h-88 mb-24">
        Nel lavoro di gruppo mi sento a mio agio
        nell’ideazione del concept e nello
        sviluppo della comunicazione per la quale prediligo utilizzare toni ironici e provocatori, perché lo ritengo l’approccio migliore per catturare l’attenzione e portare ad un riflessione. 
        Nei miei lavori do dunque molta importanza all’aspetto comunicativo e interazione utente, negli ultimi anni ho sviluppato una passione per lo UX/UI design che cerco di implementare costantemente. 
    </h6>

    <h1 class="font-pacaembu text-5xl xl:text-6xl text-center font-light w-full overflow-hidden">
        TUTTO MOLTO BELLO, MA IN BREVE?
    </h1>

 
</div>
<Table mainTitle={"ISTRUZIONE"} dataTable={studi}/>
<Table mainTitle={"ESPERIENZE\n&EXTRA\nCURRUCULARI"} dataTable={extra}/>
<Table mainTitle={"ISTRUZIONE"} dataTable={studi}/>
<Table mainTitle={"ISTRUZIONE"} dataTable={studi}/>



<Footer/>


