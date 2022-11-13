<template>
  <div>
    <TopNavbar/>
    <HeroSection :imgSource="imgSource"/>
 <main class="text-justify ">
    <div class="container mx-auto px-6 py-4 bg-slate-200">
      <p class="pt-2 text-lg text-center font-bold py-4">Database Center</p>
      <div class="text-justify p-2">
        <p>Here you can freely search in our database, including analogue samples, simulants both approved or pending materials.</p>
      </div>
      <form action="GET" class="border-b border-slate-600">
        <!--search-bar-->
        <div class="flex justify-center mt-4">
          <div class="w-full md:w-2/4">
            <div class="relative flex flex-wrap sm:flex-nowrap items-stretch w-full mb-2">
              <input type="text" id="searchField" name="searchDB"
                class="relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700"
                placeholder="Search" aria-label="Search" aria-describedby="searchBtn">
              <button id="searchBtn"
                class="w-full sm:w-auto btn inline-block px-6 py-2 border-2 border-gray-400 bg-yellow-500 text-black font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg active:bg-yellow-700 active:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="button">Search</button>
            </div>
          </div>
        </div>
        <!--radio button-->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 text-center">
          <div class="p-2">
            <input type="radio" id="analogue" name="sampleType" value="analogue" class="hidden peer sr-only">
            <label for="analogue"
              class="cursor-pointer peer-checked:bg-yellow-600 checked:shadow-lg inline-block  px-5 py-2.5 bg-indigo-300 text-gray-700 font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-400 hover:shadow-lg">Analogues</label>
          </div>
          <div class="p-2">
            <input type="radio" id="simulant" name="sampleType" value="simulant" class="hidden peer sr-only">
            <label for="simulant"
              class="cursor-pointer peer-checked:bg-yellow-600 checked:shadow-lg inline-block  px-5 py-2.5 bg-indigo-300 text-gray-700 font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-400 hover:shadow-lg">Simulants</label>
          </div>
          <!--radio button-->
          <div class="p-2">
            <input type="radio" id="approved" name="sampleStatus" value="approved" class="hidden peer sr-only">
            <label for="approved"
              class="cursor-pointer peer-checked:bg-yellow-600 checked:shadow-lg inline-block  px-5 py-2.5 bg-indigo-300 text-gray-700 font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-400 hover:shadow-lg">Approved</label>
          </div>
          <div class="p-2">
            <input type="radio" id="pending" name="sampleStatus" value="pending" class="hidden peer sr-only">
            <label for="pending"
              class="cursor-pointer peer-checked:bg-yellow-600 checked:shadow-lg inline-block  px-5 py-2.5 bg-indigo-300 text-gray-700 font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-400 hover:shadow-lg">Pending</label>
          </div>
          <div class="p-2 flex justify-around">
            <input type="checkbox" id="allData" name="allData" value="allData" class="hidden peer sr-only">
            <label for="allData"
              class="cursor-pointer peer-checked:bg-yellow-600 checked:shadow-lg inline-block  px-5 py-2.5 bg-indigo-300 text-gray-700 font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-400 hover:shadow-lg">All</label>
          </div>
          <div class="p-2">
            <button id="resetBtn" type="button"
              class="cursor-pointer active:bg-yellow-600 active:shadow-lg inline-block  px-5 py-2.5 bg-indigo-300 text-gray-700 font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-400 hover:shadow-lg">Reset</button>
          </div>
        </div>
      </form>
       </div>
      </main>
      <!-- Here comes card for sample v-for etc pagination -->
      <Pagination :length="length"/>
    <BottomFooter/>
  </div>
</template>

<script setup>
import TopNavbar from '../components/TopNavbar.vue'
import HeroSection from '../components/HeroSection.vue'
import Pagination from '../components/Pagination.vue'
import BottomFooter from '../components/BottomFooter.vue'

let imgSource = "(img/pexels-manuel-geissinger-9101887-2.jpg)"
let array = []
  for (let i = 0; i < 5; i++){
    array.push({"key":i})
}
//length of data for pagination instead of 5

let length = array

</script>

<style>

</style>