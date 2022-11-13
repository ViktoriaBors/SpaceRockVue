<template>
<div class="flex justify-center items-center p-5">    
<nav aria-label="Page navigation">
  <ul class="inline-flex -space-x-px">
    <li v-for="element in props.length" :key="element.key">
      <a class="cursor-pointer py-2 px-3 leading-tight text-gray-700 text-xs border border-gray-300 hover:bg-indigo-400"
            :class='{"bg-white": isActive, "bg-indigo-200": !isActive}'>{{element.key+1}}</a>
    </li>
  </ul>
</nav>

  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
const props= defineProps(["length"])
console.log(props.length)
let isActive = ref("false")


</script>

<style>

</style>