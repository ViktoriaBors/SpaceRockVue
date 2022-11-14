<template>
<div class="font-serif">
<TopNavbar/>
<router-view/>
<BottomFooter/>
<Impressum/>
</div>

</template>

<script setup>
import TopNavbar from '../src/components/TopNavbar.vue'
import BottomFooter from '../src/components/BottomFooter.vue'
import Impressum from '../src/components/Impressum.vue'

</script>


<style>

</style>
