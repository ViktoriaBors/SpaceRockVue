<template>
  <div>
    <HeroSection :imgSource="imgSource"/>
    <main class="text-justify ">
        <div class="container mx-auto px-6 py-4 bg-slate-200">
          <p class="pt-2 text-lg text-center font-bold py-4">The Research Facility and its services</p>
          <div class="text-justify p-2">
            <img class="mx-auto md:float-right h-64 p-3 pr-0" src="img/sem-2.jpg" alt="">
            <p>The research facility is fully equipped with instruments, which are necessary for sample characterization.
            </p>
            <p>The laboratory main focus is to determine the geochemical and mineral composition of the analogue samples and
              simulants. We also have a numerous sample preparation equipment for example rock crusher, saw, miller etc.</p>
            <p class="pt-2">Our laboratory park includes the following instruments:</p>
            <ul class="list-disc">
              <li class="ml-5">Polarized Light Microscope (PLM).</li>
              <li class="ml-5">X-ray Powder Diffraction (XRD).</li>
              <li class="ml-5">X-ray Fluorescence Spectrometer (XRF).</li>
              <li class="ml-5">Fourier -transform Infrared Spectroscope (FTIR).</li>
              <li class="ml-5">Raman Spectroscope.</li>
              <li class="ml-5">Scanning Electron Microscope (SEM-EDS).</li>
            </ul>
            <p class="py-2">Please NOTE that our services are not available for commercial use. We characterize only the
              in-house samples and samples which is waiting to be approved.</p>
          </div>
        </div>
      </main>
  </div>
</template>

<script setup>
import TopNavbar from '../components/TopNavbar.vue'
import HeroSection from '../components/HeroSection.vue'
import BottomFooter from '../components/BottomFooter.vue'

let imgSource= "(img/labeq.jpg)"

</script>

<style>

</style>