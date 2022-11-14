<template>  
<div>
<nav class="bg-slate-400 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 z-50">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <router-link :to= '{name:"home"}'
    class="font-extrabold tracking-wider text-yellow-800 cursor-pointer hover:text-yellow-700">SpaceRock</router-link>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-gray-900" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 mt-4 bg-slate-400 text-black md:flex-row md:space-x-8 md:mt-0">
     <li>
          <router-link :to= '{name:"sample"}'
          class="block py-2 pr-4 pl-3 text-black hover:text-yellow-700 hover:underline underline-offset-2 decoration-2 decoration-yellow-700 focus:text-yellow-800"
            >Sample Types</router-link>
        </li>
        <li>
         <router-link :to= '{name:"facility"}'
            class="block py-2 pr-4 pl-3 text-black hover:text-yellow-700 hover:underline underline-offset-2 decoration-2 decoration-yellow-700 focus:text-yellow-800"
            >Research Facility</router-link>
        </li>
        <li>
         <router-link :to= '{name:"database"}'
           class="block py-2 pr-4 pl-3 text-black hover:text-yellow-700 hover:underline underline-offset-2 decoration-2 decoration-yellow-700 focus:text-yellow-800"
            >Database Center</router-link>
        </li>
        <li>
          <router-link :to= '{name:"login"}'
          class="block py-2 pr-4 pl-3 text-black hover:text-yellow-700 hover:underline underline-offset-2 decoration-2 decoration-yellow-700 focus:text-yellow-800"
            >Log in</router-link>
        </li>
    </ul>
  </div>
  </div>
</nav>
</div>

</template>

<script setup>

</script>

<style>

</style>