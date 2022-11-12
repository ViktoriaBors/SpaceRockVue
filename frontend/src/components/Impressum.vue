<template>
  <div  class="bg-zinc-200 text-xs text-center py-2">
    <h2 @click="isShow = !isShow" class="cursor-pointer text-md">Impressum</h2>
    <div v-if="isShow">
    <p>Made and designed by Viktoria Bors-Pajuste.</p>
    <p>JavaScript exam project for Prooktatas JavaScript Module.</p>
    <p>This Project was inspired by <a href="https://sacf.esa.int/" target="_blank"
        class="cursor-pointer font-bold">ESA SACF</a>.</p>
    </div>
  </div>

</template>

<script setup>
import {ref} from "vue"
let isShow = ref(false)

</script>

<style>

</style>