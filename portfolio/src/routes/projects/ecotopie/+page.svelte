<script>
    import Footer from "../../../components/Footer.svelte";
    import History from "../../../components/History.svelte";
    import Carousel from "../../../components/Carousel.svelte";
    import SlideShowPreview from "../../../components/SlideShowPreview.svelte";
</script>

<History
    prev="puntopunto"/>

<div class="text-pinky w-full text-center whitespace-pre-wrap text-[1.75rem] font-arimo mt-[2.63rem]">
    serious games   |    futuri prospettici    |    processi partecipativi
</div>


<SlideShowPreview photos={[]}/>

<Carousel />

<Footer/>