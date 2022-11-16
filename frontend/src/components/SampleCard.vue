<template>
<div>
<div class=" sm:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
<div v-for="sample in props.data" :key="sample._id" class="flex justify-center m-2">
    <div class="rounded-lg shadow-lg bg-white max-w-xs">
      <img class="rounded-t-lg" :src="sample.url" :alt="sample.name" />
      <div class="p-4 text-center">
        <h5 class="text-gray-900 text-md md:text-lg font-bold mb-2">{{sample.name}}</h5>
        <button type="button" @click="openModal" :id="sample._id"
          class="inline-block px-6 py-2.5 bg-indigo-200 text-gray-700 font-bold text-xs leading-tight rounded shadow-md hover:bg-indigo-300 hover:shadow-lg active:bg-indigo-400 active:shadow-lg">Read More</button>
      </div>
    </div>
  </div>
</div>
<!--Modal-->
<!-- Main modal -->
<div id="oneModalData" v-if="isShow" style='background-color: rgba(240,240,240,0.8)' class="h-full w-full mx-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50">
    <div class="relative w-full sm:w-4/5 lg:w-1/2 h-full mx-auto">
        <!-- Modal content -->
        <div class="border-none shadow-lg relative flex flex-col pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <!-- Modal header -->
             <div
              class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 class="modalSampleName text-xl font-medium leading-normal text-gray-800" id="oneModalData">
                {{oneSample.name}}
              </h5>
              <h5 class="modalSampleStatus text-md font-bold uppercase">
                {{oneSample.status}}
              </h5>
            </div>
            <div class="modal-body relative p-4">
              <img class="modalImg rounded-t-lg pb-2" :src="oneSample.url"
                alt="" />
              <p class="text-md font-bold py-1">Short description</p>
              <p class="modalDescription text-sm pb-2">{{oneSample.description}}</p>
              <p class="text-md font-bold py-1">Mineral Composition</p>
              <p class="modalMineral text-sm pb-2">{{oneSample.minerals}}</p>
              <p class="text-md font-bold py-1">Geochemical Composition</p>
              <table class="text-sm text-center border-collapse border border-indigo-600">
                <thead>
                  <tr>
                    <th class="px-4 py-2">Element</th>
                    <th class="px-4 py-2">Wt%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-2 border border-indigo-600">SiO<sub>2</sub></td>
                    <td class="modalSiO py-2 border border-indigo-600">{{oneSample.SiO2}}</td>
                  </tr>
                  <tr>
                    <td class="py-2 border border-indigo-600">Al<sub>2</sub>O<sub>3</sub></td>
                    <td class="modalAlO py-2 border border-indigo-600">{{oneSample.Al2O3}}</td>
                  </tr>
                  <tr>
                    <td class="py-2 border border-indigo-600">MgO</td>
                    <td class="modalMgO py-2 border border-indigo-600">{{oneSample.MgO}}</td>
                  </tr>
                  <tr>
                    <td class="py-2 border border-indigo-600">CaO</td>
                    <td class="modalCaO py-2 border border-indigo-600">{{oneSample.CaO}}</td>
                  </tr>
                  <tr>
                    <td class="py-2 border border-indigo-600">Na<sub>2</sub>O</td>
                    <td class="modalNaO py-2 border border-indigo-600">{{oneSample.Na2O3}}</td>
                  </tr>
                  <tr>
                    <td class="py-2 border border-indigo-600">Fe<sub>2</sub>O<sub>3</sub></td>
                    <td class="modalFeO py-2 border border-indigo-600">{{oneSample.Fe2O3}}</td>
                  </tr>
                </tbody>
              </table>
              <p class="text-md font-bold py-1">Density (kg/m<sup>3</sup>)</p>
              <p class="modalDensity text-sm pb-2">{{oneSample.density}}</p>
              <p class="text-md font-bold py-1">Porosity (%)</p>
              <p class="modalPorosity text-sm pb-2">{{oneSample.porosity}}</p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button @click="isShow=false"  type="button" class="cursor-pointer inline-block px-6 py-2.5 bg-indigo-200 text-gray-700 font-bold text-xs leading-tight rounded shadow-md hover:bg-indigo-300 hover:shadow-lg active:bg-indigo-400 active:shadow-lg">Close</button>
            </div>
        </div>
    </div>
</div>
</div>
  
</template>

<script setup>
import {ref} from "vue"
const props = defineProps(["data"])

let oneSample = ref(null)
let isShow = ref(false)
const openModal = (event)=>{
  isShow.value = true
  oneSample.value = props.data.find(sample => sample._id == event.target.id)
}






</script>

<style>

</style>