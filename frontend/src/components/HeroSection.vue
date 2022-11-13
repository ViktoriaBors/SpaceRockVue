<template>
<div>
    <!-- Hero Section for 1 img-->
  <section v-if='props.imgSource' class="hero bg-gray-700 h-full pt-5 md:mt-20 md:pt-0">
    <div class="relative overflow-hidden bg-no-repeat bg-contain sm:rounded-bl-full lg:rounded-tr-full" :style="style">
      <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(255, 255, 255, 0.2);">
      </div>
    </div>
    <h1 class="text-center text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-yellow-600 py-4">Research
      Facility and Database Center for Lunar materials</h1>
  </section>



</div>

</template>

<script setup>
const props = defineProps(['imgSource'])
let style = "background-position: 50%; background-image: url" + props.imgSource + "; height: 400px;"

</script>

<style>

</style>