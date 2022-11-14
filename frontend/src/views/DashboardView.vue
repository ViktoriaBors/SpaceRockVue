<template>
<div>
    <DashboardNav :user="user"/>
      <main class="text-justify ">
        <div class="container mx-auto px-6 py-4 bg-slate-200">
            <p class="pt-2 text-lg text-center font-bold py-4">Here you can see your pending samples in the database.
            </p>
            <form action="GET" class="mb-4">
                <!--search-bar-->
                <div class="flex justify-center">
                    <div class="w-full md:w-2/4">
                        <div class="relative flex flex-wrap sm:flex-nowrap items-stretch w-full mb-2">
                            <input type="text" id="searchFieldUser"
                                class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700"
                                placeholder="Search" aria-label="Search" aria-describedby="searchSavedBtn">
                            <button id="searchSavedBtn"
                                class="btn inline-block px-6 py-2 border-2 border-gray-400 bg-yellow-500 text-black font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg active:bg-yellow-700 active:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                type="button">Search</button>
                        </div>
                    </div>
                </div>
                <!--sorting options-->
                <div class="flex flex-row justify-center items-center">
                    <div class="p-2">
                        <input type="radio" id="alphabetical" name="sorting" value="alphabetical"
                            class="hidden peer sr-only">
                        <label for="alphabetical"
                            class="cursor-pointer peer-checked:bg-yellow-600 checked:shadow-lg inline-block  px-5 py-2.5 bg-indigo-300 text-gray-700 font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-400 hover:shadow-lg">Alphabetical</label>
                    </div>
                    <div class="p-2">
                        <input type="radio" id="newest" name="sorting" value="newest" class="hidden peer sr-only">
                        <label for="newest"
                            class="cursor-pointer peer-checked:bg-yellow-600 checked:shadow-lg inline-block  px-5 py-2.5 bg-indigo-300 text-gray-700 font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-400 hover:shadow-lg">Newest
                            first</label>
                    </div>
                </div>
            </form>
            <!--Already saved samples by user appears here - all forms plus pagination-->
    <Accordion/>
        </div>
      </main>


</div>
  
</template>

<script setup>
import DashboardNav from '../components/DashboardNav.vue'
import BottomFooter from '../components/BottomFooter.vue'
import Accordion from '../components/Accordion.vue'

const user = "fetch data"

let imgSource = "(img/pexels-mike-b-383559.jpg)"
</script>

<style>

</style>