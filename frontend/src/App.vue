<template>
<div>
<TopNavbar></TopNavbar>
<HeroSection></HeroSection>
<router-view/>
<BottomFooter></BottomFooter>
<Impressum></Impressum>
</div>

</template>

<script setup>
import TopNavbar from './components/TopNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import BottomFooter from './components/BottomFooter.vue'
import Impressum from './components/Impressum.vue'

</script>


<style>

</style>
