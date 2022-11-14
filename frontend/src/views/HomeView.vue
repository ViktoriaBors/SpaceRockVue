<template>
<div>
<HeroSection :imgSource="imgSource"></HeroSection>
  <main class="text-justify">
    <div class="container mx-auto px-6 py-4 bg-slate-200 ">
      <p class="py-2">The main aim of the organization is to provide access to analogue and simulant materials for
        research, technology development projects and education purposes. Moreover, other important mission is to perform
        characterization of different properties (mechanical, physical and spectral) on samples to further understand the Lunar surface.
      </p>
      <p class="py-1">To achieve our goal, we have a research laboratory with the all the necessary laboratory equipment
        for characterization of analogue and simulant materials, along with equipments to develop new simulants.</p>
      <p class="py-1 italic">Our core services:</p>
      <ul class="list-disc">
        <li class="ml-5">Update the database center regularly with the newest results</li>
        <li class="ml-5">Curate the analogue samples and approve simulants.</li>
        <li class="ml-5">Expand the Lunar collection with new materials</li>
        <li class="ml-5">Make standard procedure for making specific simulants</li>
        <li class="ml-5">Become a central point for simulant-related activities</li>
        <li class="ml-5">Build collaboration between us and other research institutions to research the Lunar regolith
          and develop more simulants</li>
      </ul>
    </div>
  </main>
</div>
</template>

<script setup>
import TopNavbar from '../components/TopNavbar.vue'
import HeroSection from '../components/HeroSection.vue'
import BottomFooter from '../components/BottomFooter.vue'
import Impressum from '../components/Impressum.vue'

let imgSource = "(img/logo2-removebg-preview.png)"

</script>
