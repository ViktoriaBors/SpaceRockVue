<template>
  <div>
    <DashboardNav :user="user" />
    <main class="text-justify">
      <div class="container mx-auto px-6 py-4 bg-slate-200">
        <p class="pt-2 text-lg text-center font-bold py-4">
          Here you can see your pending samples in the database.
        </p>
        <form action="GET" class="mb-4">
          <!--search-bar-->
          <div class="flex justify-center">
            <div class="w-full md:w-2/4">
              <div
                class="
                  relative
                  flex flex-wrap
                  sm:flex-nowrap
                  items-stretch
                  w-full
                  mb-2
                "
              >
                <input
                  type="text"
                  v-model="searchWord"
                  class="
                    form-control
                    relative
                    flex-auto
                    min-w-0
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-gray-700
                  "
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="searchSavedBtn"
                />
                <button
                  id="searchSavedBtn"
                  @click="getData"
                  class="
                    btn
                    inline-block
                    px-6
                    py-2
                    border-2 border-gray-400
                    bg-yellow-500
                    text-black
                    font-bold
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-yellow-600 hover:shadow-lg
                    active:bg-yellow-700 active:shadow-lg
                    focus:outline-none focus:ring-0
                    transition
                    duration-150
                    ease-in-out
                  "
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <!--sorting options-->
          <div class="flex flex-row justify-center items-center">
            <div class="p-2">
              <input
                type="radio"
                id="alphabetical"
                name="sorting"
                value="alphabetical"
                class="hidden peer sr-only"
                ref="alphabetical"
              />
              <label
                for="alphabetical"
                class="
                  cursor-pointer
                  peer-checked:bg-yellow-600
                  checked:shadow-lg
                  inline-block
                  px-5
                  py-2.5
                  bg-indigo-300
                  text-gray-700
                  font-bold
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-indigo-400 hover:shadow-lg
                "
                >Alphabetical</label
              >
            </div>
            <div class="p-2">
              <input
                type="radio"
                id="newest"
                name="sorting"
                value="newest"
                class="hidden peer sr-only"
                ref="newest"
              />
              <label
                for="newest"
                class="
                  cursor-pointer
                  peer-checked:bg-yellow-600
                  checked:shadow-lg
                  inline-block
                  px-5
                  py-2.5
                  bg-indigo-300
                  text-gray-700
                  font-bold
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-indigo-400 hover:shadow-lg
                "
                >Newest first</label
              >
            </div>
          </div>
        </form>
        <!--Already saved samples by user appears here - all forms plus pagination-->
        <div v-if="sampleData.length">
              <SampleCardForm :sampleData="sampleData" :user="user" /> 
        </div>
         <div v-if="noSample">
          <div class="shadow-lg bg-white mt-2">
            <h5 class="text-gray-900 text-md font-bold mb-2 p-2">No sample found</h5>
          </div>  
        </div>
        <Accordion :user="user" />
      </div>
    </main>
  </div>
</template>

<script setup>
import DashboardNav from "../components/DashboardNav.vue";
import BottomFooter from "../components/BottomFooter.vue";
import Accordion from "../components/Accordion.vue";
import SampleCardForm from "../components/SampleCardForm.vue";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from 'vue-router'
let imgSource = "(img/pexels-mike-b-383559.jpg)";

const user = ref(null);

// for redirect
const router = useRouter()
const route = useRoute()
// during "create" = setup - check user session
fetch(`http://localhost:8081/user`, {
  credentials: "include",
})
  .then((res) => {
    if (!res.ok) {
      throw new Error("error");
    } else return res.json();
  })
  .then((data) => {
    user.value = data;
  })
  .catch((error) => {
    console.log(error);
    swal({
      title: "Error",
      text: "Access Denied",
      icon: "error",
    });
    setTimeout(() => {
      router.push({ name: "login" });
    }, 2000);
    isSearchActive.value = true
  });

// Get sample data - user specific
let searchWord = ref("")
let alphabetical = ref(false)
let newest = ref(false)

let sampleData = ref([])
let noSample = ref(false)

const getData = () => {
  console.log("search")
  let email = user.value.email
  fetch(`http://localhost:8081/data/modify?word=${searchWord.value}&alphabetic=${alphabetical.value.checked}&newest=${newest.value.checked}&email=${email}`)
    .then(res => res.json())
    .then(data => {
      sampleData.value = data
      console.log(sampleData.value)
      if(data.length === 0){
        noSample.value = true
      } else {
        noSample.value = false
      }
      console.log(noSample.value)
    })
}
</script>

<style>
</style>