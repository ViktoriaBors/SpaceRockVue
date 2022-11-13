<template>
  <div>
    <TopNavbar/>
    <Carousel/>
  <main class="text-justify">
    <div class="container mx-auto px-6 py-4 bg-slate-200 ">
      <p class="pt-2 text-lg text-center font-bold py-4">Analogue and simulant samples</p>
      <div class="flex flex-col md:flex-row justify-around items-center flex-auto">
        <div class="p-4 text-justify basis-2/4 border-b-2 border-gray-700 md:border-r-2 md:border-b-0">
          <p class="text-center text-lg pb-2">Analogue Samples</p>
          <p>Analogues are representative of a large area of a target body without having well defined parameters.
            Good example is a basalt in our collection. The basalt is representative of the basalts present on
            the Moon. </p>
          <p>Many of the field sites are termed as ‘analogue sites’, because they can be used to conduct field
            test in regard to the Moon (for example, rover field trials).</p>
        </div>
        <div class="p-4 text-justify basis-2/4 border-b-2 border-gray-700 md:border-none">
          <p class="text-center text-lg pb-2">Simulants</p>
          <p>Simulants are representative of a specific planetary body and lithology, with properties that
            more closely match those of the parent body. For example, a lunar mare regolith simulant would
            have a grain size distribution and grain shape similar to lunar regolith returned from the Moon
            during the Apollo missions. </p>
          <p>Simulants can be ‘general use’ as previously described, or be more specific and aim to represent
            a particular sample or localized region on the Moon surface.</p>
        </div>
      </div>
      <div class="my-2 text-justify p-4">
        <p class="pt-2 text-lg text-center font-bold py-4">Borrowing materials</p>
        <p>Borrowing both analogues and simulants is possible if you contact us. As they are loans, the material needs
          to be returned to the collection once the research is finished.</p>
        <p> For small-scale test, it is easily possible to provide the materials. For large-scale test, it might be not
          possible to provide enough material. </p>
        <p class="py-2">Please note as well that some of our samples are ‘voucher specimens’. That means we have a
          really small amount for in-house test.</p>
        <p>There can be several reasons for a particular sample cannot be loaned:</p>
        <ul class="list-disc">
          <li class="ml-5">It is already on loan.</li>
          <li class="ml-5">It has some health and safety concerns</li>
          <li class="ml-5">We are concerned that the sample may be altered or lost during the delivery and loan period.
          </li>
          <li class="ml-5">The reason requesting the sample is not justifiable base on the scientific application.</li>
        </ul>
      </div>
      <div class="my-2 text-justify p-4">
      <p class="pt-2 text-lg text-center font-bold py-4">Approving procedure</p>
      <p>Please NOTE it is possible to get your simulants approved. It takes the following steps:</p>
      <ul class="list-disc">
        <li class="ml-5">Contact us via mail with the details about the material.</li>
        <li class="ml-5">Register on our website under <a href="contact.html"
            class="uppercase font-semibold">contact</a>.</li>
        <li class="ml-5">After login, you can add, modify and delete your samples. Some parameters of the sample are
          required (for example a name, short description and mineral composition).</li>
        <li class="ml-5">Meanwhile please send us a small amount of the sample for further characterization and research
          in-house at SpaceRock.</li>
        <li class="ml-5">After all the in-house laboratory analysis checks out (and matches with your results), the
          status of the sample changes from pending to approved.</li>
      </ul>
      <p class="py-2">These procedure ensure that the composition of the sample are well-described and follows all
        standards.</p>
      </div> 
      <div>

      </div>
    </div>
  </main>
  <BottomFooter/>
  </div>
</template>

<script setup>
import TopNavbar from '../components/TopNavbar.vue'
import Carousel from '../components/Carousel.vue'
import BottomFooter from '../components/BottomFooter.vue'

</script>

<style>

</style>