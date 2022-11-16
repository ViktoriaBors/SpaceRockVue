<template>
  <div>
    <div class="sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
      <div
        v-for="sample in props.data"
        :key="sample._id"
        class="m-3"
      >
        <div
          class="
            border-none
            shadow-lg
            relative
            flex flex-col
            rounded-md
            outline-nones
            bg-slate-300
          "
        >
          <!-- Card header -->
          <div
            class="
              text-center
              p-4
              border-b border-gray-200
              rounded-t-md
            "
          >
            <h5 class="text-xl font-medium leading-normal text-gray-800">
              {{ sample.name }}
            </h5>
          </div>
          <!-- Card body -->
          <div class="relative p-4 flex flex-col justify-center items-center">
            <p class="text-md font-bold py-1">Short description</p>
            <p class="modalDescription text-sm pb-2">
              {{ sample.description }}
            </p>
            <p class="text-md font-bold py-1">Mineral Composition</p>
            <p class="modalMineral text-sm pb-2">{{ sample.minerals }}</p>
            <p class="text-md font-bold py-1">Geochemical Composition</p>
            <div class="text-center">
              <table
                class="
                  text-sm text-center
                  border-collapse border border-indigo-600
                "
              >
                <thead>
                  <tr>
                    <th class="px-4 py-2">Element</th>
                    <th class="px-4 py-2">Wt%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-2 border border-indigo-600">
                      SiO<sub>2</sub>
                    </td>
                    <td class="modalSiO py-2 border border-indigo-600">
                      {{ sample.SiO2 }}
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 border border-indigo-600">
                      Al<sub>2</sub>O<sub>3</sub>
                    </td>
                    <td class="modalAlO py-2 border border-indigo-600">
                      {{ sample.Al2O3 }}
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 border border-indigo-600">MgO</td>
                    <td class="modalMgO py-2 border border-indigo-600">
                      {{ sample.MgO }}
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 border border-indigo-600">CaO</td>
                    <td class="modalCaO py-2 border border-indigo-600">
                      {{ sample.CaO }}
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 border border-indigo-600">
                      Na<sub>2</sub>O
                    </td>
                    <td class="modalNaO py-2 border border-indigo-600">
                      {{ sample.Na2O3 }}
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 border border-indigo-600">
                      Fe<sub>2</sub>O<sub>3</sub>
                    </td>
                    <td class="modalFeO py-2 border border-indigo-600">
                      {{ sample.Fe2O3 }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-md font-bold py-1">Density (kg/m<sup>3</sup>)</p>
            <p class="modalDensity text-sm pb-2">{{ sample.density }}</p>
            <p class="text-md font-bold py-1">Porosity (%)</p>
            <p class="modalPorosity text-sm pb-2">{{ sample.porosity }}</p>
          </div>
          <!-- Card footer -->
          <div
            class="
              flex flex-col
              justify-around items-center
              md:flex-row 
              p-6
              rounded-b
              border-t border-gray-200
            "
          >
            <button
              :id="sample._id"
              @click="openModal"
              type="button"
              class="
                cursor-pointer
                inline-block
                w-full
                px-6
                py-2.5
                m-2
                bg-yellow-500
                text-black
                font-bold
                text-xs
                leading-tight
                rounded
                shadow-md
                hover:bg-yellow-600 hover:shadow-lg
                active:bg-yellow-700 active:shadow-lg
              "
            >
              Modify
            </button>
            <button
              :id="sample._id"
              type="button"
              class="
                cursor-pointer
                inline-block
                px-6
                py-2.5
                w-full
                bg-red-500
                text-black
                font-bold
                text-xs
                leading-tight
                rounded
                shadow-md
                hover:bg-red-600 hover:shadow-lg
                active:bg-red-700 active:shadow-lg
              "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

<!--Modal-->
<!-- Main modal -->
<div id="oneModalData" v-if="isShow" style='background-color: rgba(240,240,240,0.8)' class="h-full w-full mx-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50">
    <div class="relative w-full sm:w-4/5 lg:w-1/2 h-full mx-auto mt-5">
        <!-- Modal content -->
        <div class="border-none shadow-lg relative flex flex-col pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <!-- Modal header -->
             <div
              class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 class="modalSampleName text-xl font-medium leading-normal text-gray-800" id="oneModalData">
                {{oneSample.name}}
              </h5>
            </div>
            <div class="modal-body relative p-4">
              <p class="text-md font-bold py-1">Short description</p>
              <textarea id="description" v-model="description"  type="text" rows="3" class="w-full text-sm pb-2" required></textarea>
              <p class="text-md font-bold py-1">Mineral Composition</p>
              <input type="text" id="minerals" v-model="minerals"  required class="w-full sm:w-1/2 text-sm pb-2">
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
                    <input v-model="SiO2" id="SiO2" class="py-2 border border-indigo-600" type="text">
                  </tr>
                  <tr>
                    <td class="py-2 border border-indigo-600">Al<sub>2</sub>O<sub>3</sub></td>
                    <input v-model="Al2O3" id="Al2O3" class="py-2 border border-indigo-600" type="text">
                  </tr>
                  <tr>
                    <td class="py-2 border border-indigo-600">MgO</td>
                    <input v-model="MgO" id="MgO" class="py-2 border border-indigo-600" type="text">
                  </tr>
                  <tr>
                    <td class="py-2 border border-indigo-600">CaO</td>
                    <input v-model="CaO" id="CaO" class="py-2 border border-indigo-600" type="text">
                  </tr>
                  <tr>
                    <td class="py-2 border border-indigo-600">Na<sub>2</sub>O</td>
                    <input v-model="Na2O3" id="Na2O3" class="py-2 border border-indigo-600" type="text">
                  </tr>
                  <tr>
                    <td class="py-2 border border-indigo-600">Fe<sub>2</sub>O<sub>3</sub></td>
                    <input v-model="Fe2O3" id="Fe2O3" class="py-2 border border-indigo-600" type="text">
                  </tr>
                </tbody>
              </table>
              <p class="text-md font-bold py-1">Density (kg/m<sup>3</sup>)</p>
              <input type="text" v-model="density" id="density" class="w-full sm:w-1/2 text-sm pb-2">
              <p class="text-md font-bold py-1">Porosity (%)</p>
              <input type="text" v-model="porosity" id="porosity" class="w-full sm:w-1/2 text-sm pb-2">
            </div>
            <!-- Modal footer -->
            <div class="flex flex-col justify-around items-center  md:flex-row  p-6 rounded-b border-t border-gray-200">
              <button @click="saveData"  type="button" class="m-2 w-full cursor-pointer inline-block px-6 py-2.5 bg-yellow-500 text-black font-bold text-xs leading-tight rounded shadow-md hover:bg-yellow-600 hover:shadow-lg active:bg-yellow-700 active:shadow-lg">Save</button>
              <button @click="cancelData"  type="button" class="w-full cursor-pointer inline-block px-6 py-2.5 bg-indigo-200 text-gray-700 font-bold text-xs leading-tight rounded shadow-md hover:bg-indigo-300 hover:shadow-lg active:bg-indigo-400 active:shadow-lg">Cancel</button>
            </div>
        </div>
    </div>
</div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from 'vue-router'

const props = defineProps(["data"]);

let oneSample = ref(null)
let isShow = ref(false)

// form values
let description = ref(null)
let minerals = ref(null)
let SiO2 = ref(null)
let Al2O3 = ref(null)
let MgO = ref(null) 
let CaO = ref(null)
let Na2O3 = ref(null)
let Fe2O3 = ref(null)
let density = ref(null)
let porosity = ref(null)

// for redirect
const router = useRouter()
const route = useRoute()

const openModal = (event) => {
  isShow.value = true
  oneSample.value = props.data.find(sample => sample._id == event.target.id)
  // in order to write data inside the input fields
  description.value = oneSample.value.description
  minerals.value = oneSample.value.minerals
  SiO2.value = oneSample.value.SiO2
  Al2O3.value = oneSample.value.Al2O3
  MgO.value = oneSample.value.MgO
  CaO.value = oneSample.value.CaO
  Na2O3.value = oneSample.value.Na2O3
  Fe2O3.value = oneSample.value.Fe2O3
  density.value = oneSample.value.density
  porosity.value = oneSample.value.porosity
}

const saveData = (event) => {  // save all with event target value
  description.value = event.target.value
  minerals.value = event.target.value
  SiO2.value = event.target.value
  Al2O3.value = event.target.value
  MgO.value = event.target.value
  CaO.value = event.target.value
  Na2O3.value = event.target.value
  Fe2O3.value = event.target.value
  density.value = event.target.value
  porosity.value = event.target.value
  props.data.value = []
  isShow.value = false
  // how to re-render card with new info
}

const cancelData = () => { // save all with original value - if the user write in but doesnt wanna save it - make it back
  description.value = oneSample.value.description
  minerals.value = oneSample.value.minerals
  SiO2.value = oneSample.value.SiO2
  Al2O3.value = oneSample.value.Al2O3
  MgO.value = oneSample.value.MgO
  CaO.value = oneSample.value.CaO
  Na2O3.value = oneSample.value.Na2O3
  Fe2O3.value = oneSample.value.Fe2O3
  density.value = oneSample.value.density
  porosity.value = oneSample.value.porosity
  isShow.value = false
}

</script>

<style>
</style>