<script lang="ts">
    import Footer from "../../components/Footer.svelte";
    import Link from "../../components/Link.svelte";
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

    const curriculari = [
        {
        title: "Service Designer",
        where: "Sviluppo in team di un'idea progettuale per il bando FUTURA+ promosso dal Fondo Repubblica Digitale. Proposta elaborata a partire dalla ricerca condotta in parallelo per il percorso di tesi magistrale.",
        comment: "DISI e DA, Alma Mater Studiorum — Università di Bologna",
        duration: "dicembre 2025"
        },
        {
        title: "Service Designer",
        where: "Progettazione di format educativi per la promozione delle pratiche del circular design nelle scuole secondarie di II grado. Tirocinio legato ai progetti POTNEED e CIRCES.",
        comment: "Advanced Design Unit, DA, Alma Mater Studiorum — Università di Bologna",
        duration: "febbraio — giugno 2025"
        },
    ]

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
        comment: "Alma Mater Studiorum — Università di Bologna",
        duration: "ottobre — dicembre 2025"
        },
        {
        title: "UX/UI Designer",
        where: "Workshop: AI collaborative experience",
        comment: "Technogym",
        duration: "luglio 2024"
        },
        {
        title: "Student tutor",
        where: "Assistente nell’ambito dell’insegnamento di Urban Design, modulo di Architettura e installazioni temporanee",
        comment: "Università degli Studi di Perugia",
        duration: "febbraio — giugno 2023"
        },
        {
        title: "Consigliere di vendita",
        where: "Consigliere di vendita per i reparti di Decorazione, Illuminazione e Vernici",
        comment: "Leroy Merlin Italia srl",
        duration: "marzo 2022 — settembre 2023"
        },
        {
        title: "Bibliotecaria",
        where: "Collaborazione studentesca (150H) presso la Biblioteca Biomedica, registrazione e rientro prestiti",
        comment: "Commonground srl",
        duration: "dicembre 2025"
        },
        {
        title: "Rappresentante studentɘ",
        where: "Rappresentante del CdL in Design",
        comment: "Università degli Studi di Perugia",
        duration: "dicembre 2021 — febbraio 2023"
        },
        {
        title: "Volontaria FAI",
        where: "Addetta all’accoglienza. Bosco di San Francesco, Assisi",
        comment: "FAI - Fondo Ambiente Italiano",
        duration: "dicembre 2016 — agosto 2017"
        },

    ];

</script>

<div class="size-lvw px-6 md:px-24 w-full h-auto">
    <h1 class="text-center font-pacaembu text-6xl xl:text-8xl mb-16 xl:mb-24">
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
<Table mainTitle={"istruzione"} dataTable={studi}/>
<Table mainTitle={"curricolari"} dataTable={curriculari}/>
<Table mainTitle={"esperienze Lavorative \n& extra — curriculari"} dataTable={extra}/>


<!-- aggiunta -->
<div class="flex flex-col xl:flex-row gap-12 p-8 xl:p-16 w-full">
    <div class="w-full xl:w-96 shrink-0"></div>
    <div class="grid grid-cols-1 md:grid-cols-3 flex-1 gap-x-12 gap-y-16 items-start">

        <!-- soft skills-->

        <div class="flex flex-col justify-between min-w-0 h-full">
            
            <div class="flex flex-col flex-grow">
                <h3 class="text-xl 2xl:text-2xl font-pacaembu font-normal  min-h-[3rem] xl:min-h-[4rem] break-words leading-snug">
                    LINGUE
                </h3>
                
                <div class="mb-8 flex-grow">
                    <p class="text-lg xl:text-[1.3rem] font-arimo font-normal leading-relaxed mb-1 break-words text-grayy">
                        Italiano, madrelingua<br>
                        Inglese, IELTS 6<br>
                        (equivalente B2 Cambridge)
                    </p>
                </div>
            </div>
        </div>

        <!-- soft skills-->

        <div class="flex flex-col justify-between min-w-0 h-full">
            
            <div class="flex flex-col flex-grow">
                <h3 class="text-xl 2xl:text-2xl font-pacaembu font-normal min-h-[3rem] xl:min-h-[4rem] break-words leading-snug">
                    SOFT SKILLS
                </h3>
                
                <div class="mb-8 flex-grow">
                    <p class="text-lg xl:text-[1.3rem] font-arimo font-normal leading-relaxed mb-1 break-words text-grayy">
                        Empatia<br>
                        Capacità comunicative<br>
                        Pensiero critico<br>
                        Creatività<br>
                        Adattabilità<br>
                        Pensiero sistemico<br>
                        Collaborazione<br>
                        Problem framing<br>
                        Azione collettiva<br>
                        Iniziativa individuale
                    </p>
                </div>
            </div>
        </div>


        <!-- interessi-->

        <div class="flex flex-col justify-between min-w-0 h-full">
            
            <div class="flex flex-col flex-grow">
                <h3 class="text-xl 2xl:text-2xl font-pacaembu font-normal min-h-[3rem] xl:min-h-[4rem] break-words leading-snug">
                    INTERESSI
                </h3>
                
                <div class="mb-8 flex-grow">
                    <p class="text-lg xl:text-[1.3rem] font-arimo font-normal leading-relaxed mb-1 break-words text-grayy">
                        Fotografia<br>
                        Lettura<br>
                        Cucina<br>
                        Bigiotteria<br>
                    </p>
                </div>
            </div>
        </div>
            
    </div>
</div>


<div class="w-full flex flex-col md:flex-row gap-5 justify-around items-center p-4 md:p-24">
    <div class="text-xl xl:text-[2rem] font-pacaembu font-light ">
        ancora più breve? 
    </div>
    <Link
        href={"https://ugc.production.linktr.ee/4a187a64-3a3e-4def-8512-77994df83462_FrancescaCatuogno-CV-op.pdf"}
        isUnderline={true}
        isBig={false}
        font='pacaembu'
        color='black'>
        scarica il mio CV
    </Link>
</div>


<Footer/>


