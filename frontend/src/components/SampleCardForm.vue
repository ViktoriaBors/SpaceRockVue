<template>
  <div>
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
         <div v-if="!isChange" class="sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
            <div v-for="sample in sampleData" :key="sample._id" class="m-3">
          <!-- Card header -->
          <div class="text-center p-4 border-b border-gray-200 rounded-t-md">
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
              justify-around
              items-center
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
              @click="deleteData"
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
    <div
      id="oneModalData"
      v-if="isShow"
      style="background-color: rgba(240, 240, 240, 0.8)"
      class="
        h-full
        w-full
        mx-auto
        overflow-y-auto overflow-x-hidden
        fixed
        top-0
        right-0
        left-0
        z-50
      "
    >
      <div class="relative w-full sm:w-4/5 lg:w-1/2 h-full mx-auto mt-5">
        <!-- Modal content -->
        <div
          class="
            border-none
            shadow-lg
            relative
            flex flex-col
            pointer-events-auto
            bg-white bg-clip-padding
            rounded-md
            outline-none
            text-current
          "
        >
          <!-- Modal header -->
          <div
            class="
              modal-header
              flex flex-shrink-0
              items-center
              justify-between
              p-4
              border-b border-gray-200
              rounded-t-md
            "
          >
            <h5
              class="
                modalSampleName
                text-xl
                font-medium
                leading-normal
                text-gray-800
              "
              id="oneModalData"
            >
              {{ oneSample.name }}
            </h5>
          </div>
          <div class="modal-body relative p-4">
            <p class="text-md font-bold py-1">Short description</p>
            <textarea
              id="description"
              @change="changeInput"
              v-model="description"
              type="text"
              rows="3"
              class="w-full text-sm pb-2"
              required
            ></textarea>
            <p class="text-md font-bold py-1">Mineral Composition</p>
            <input
              type="text"
              id="minerals"
              v-model="minerals"
              required
              class="w-full sm:w-1/2 text-sm pb-2"
            />
            <p class="text-md font-bold py-1">Geochemical Composition</p>
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
                  <td class="py-2 border border-indigo-600">SiO<sub>2</sub></td>
                  <input
                    v-model="SiO2"
                    @change="changeInput"
                    id="SiO2"
                    class="py-2 border border-indigo-600"
                    type="text"
                  />
                </tr>
                <tr>
                  <td class="py-2 border border-indigo-600">
                    Al<sub>2</sub>O<sub>3</sub>
                  </td>
                  <input
                    v-model="Al2O3"
                    @change="changeInput"
                    id="Al2O3"
                    class="py-2 border border-indigo-600"
                    type="text"
                  />
                </tr>
                <tr>
                  <td class="py-2 border border-indigo-600">MgO</td>
                  <input
                    v-model="MgO"
                    @change="changeInput"
                    id="MgO"
                    class="py-2 border border-indigo-600"
                    type="text"
                  />
                </tr>
                <tr>
                  <td class="py-2 border border-indigo-600">CaO</td>
                  <input
                    v-model="CaO"
                    @change="changeInput"
                    id="CaO"
                    class="py-2 border border-indigo-600"
                    type="text"
                  />
                </tr>
                <tr>
                  <td class="py-2 border border-indigo-600">Na<sub>2</sub>O</td>
                  <input
                    v-model="Na2O3"
                    @change="changeInput"
                    id="Na2O3"
                    class="py-2 border border-indigo-600"
                    type="text"
                  />
                </tr>
                <tr>
                  <td class="py-2 border border-indigo-600">
                    Fe<sub>2</sub>O<sub>3</sub>
                  </td>
                  <input
                    v-model="Fe2O3"
                    @change="changeInput"
                    id="Fe2O3"
                    class="py-2 border border-indigo-600"
                    type="text"
                  />
                </tr>
              </tbody>
            </table>
            <p class="text-md font-bold py-1">Density (kg/m<sup>3</sup>)</p>
            <input
              type="text"
              v-model="density"
              @change="changeInput"
              id="density"
              class="w-full sm:w-1/2 text-sm pb-2"
            />
            <p class="text-md font-bold py-1">Porosity (%)</p>
            <input
              type="text"
              v-model="porosity"
              @change="changeInput"
              id="porosity"
              class="w-full sm:w-1/2 text-sm pb-2"
            />
          </div>
          <!-- Modal footer -->
          <div
            class="
              flex flex-col
              justify-around
              items-center
              md:flex-row
              p-6
              rounded-b
              border-t border-gray-200
            "
          >
            <button
              @click="saveData"
              type="button"
              class="
                m-2
                w-full
                cursor-pointer
                inline-block
                px-6
                py-2.5
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
              Save
            </button>
            <button
              @click="cancelData"
              type="button"
              class="
                w-full
                cursor-pointer
                inline-block
                px-6
                py-2.5
                bg-indigo-200
                text-gray-700
                font-bold
                text-xs
                leading-tight
                rounded
                shadow-md
                hover:bg-indigo-300 hover:shadow-lg
                active:bg-indigo-400 active:shadow-lg
              "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["sampleData", "user"]);

let oneSample = ref(null);
let isShow = ref(false);
let isChange = ref(false);

if(props.sampleData.length == 0){
  isChange.value = true
}

// form values
let description = ref(null);
let minerals = ref(null);
let SiO2 = ref(null);
let Al2O3 = ref(null);
let MgO = ref(null);
let CaO = ref(null);
let Na2O3 = ref(null);
let Fe2O3 = ref(null);
let density = ref(null);
let porosity = ref(null);

// to delete sample
const deleteData = (event) => {
  let sampleid = event.target.id;
  console.log(sampleid)
  fetch(`http://localhost:8081/data/${sampleid}`, {
    method: "delete",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("error");
      }
      return res.text();
    })
    .then((data) => {
      swal({
        title: "Success",
        text: "The sample is deleted",
        icon: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      swal({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
      });
    });
    props.sampleData.length = 0
};

// to modify sample - open modal form
const openModal = (event) => {
  isShow.value = true;
  oneSample.value = props.sampleData.find((sample) => sample._id == event.target.id);
  // in order to write data inside the input fields
  description.value = oneSample.value.description;
  minerals.value = oneSample.value.minerals;
  SiO2.value = oneSample.value.SiO2;
  Al2O3.value = oneSample.value.Al2O3;
  MgO.value = oneSample.value.MgO;
  CaO.value = oneSample.value.CaO;
  Na2O3.value = oneSample.value.Na2O3;
  Fe2O3.value = oneSample.value.Fe2O3;
  density.value = oneSample.value.density;
  porosity.value = oneSample.value.porosity;
};

const changeInput = (event) => {
  // save all with event target value
  switch (event.target.value.id) {
    case "description":
      description.value = event.target.value;
      break;
    case "SiO2":
      SiO2.value = event.target.value;
      break;
    case "Al2O3":
      Al2O3.value = event.target.value;
      break;
    case "MgO":
      MgO.value = event.target.value;
      break;
    case "CaO":
      CaO.value = event.target.value;
      break;
    case "Na2O3":
      Na2O3.value = event.target.value;
      break;
    case "Fe2O3":
      Fe2O3.value = event.target.value;
      break;
    case "density":
      density.value = event.target.value;
      break;
    case "porosity":
      porosity.value = event.target.value;
      break;
  }
};

const saveData = () => {
  let modifiedSample = {
    name: oneSample.value.name,
    type: oneSample.value.type,
    description:
      description.value == "" ? oneSample.value.description : description.value,
    minerals: minerals.value == "" ? oneSample.value.minerals : minerals.value,
    SiO2: SiO2.value == "" || isNaN(SiO2.value) ? "N/A" : SiO2.value,
    Al2O3: Al2O3.value == "" || isNaN(Al2O3.value) ? "N/A" : Al2O3.value,
    MgO: MgO.value == "" || isNaN(MgO.value) ? "N/A" : MgO.value,
    CaO: CaO.value == "" || isNaN(CaO.value) ? "N/A" : CaO.value,
    Na2O3: Na2O3.value == "" || isNaN(Na2O3.value) ? "N/A" : Na2O3.value,
    Fe2O3: Fe2O3.value == "" || isNaN(Fe2O3.value) ? "N/A" : Fe2O3.value,
    porosity:
      porosity.value == "" || isNaN(porosity.value) ? "N/A" : porosity.value,
    density:
      density.value == "" || isNaN(density.value) ? "N/A" : density.value,
    uploadedBy: props.user.email,
    url: "../img/samples/noImg.png",
    updatedLast: Date.now(),
    status: "pending",
  };
  let sampleid = oneSample.value._id;

  fetch(`http://localhost:8081/data/${sampleid}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(modifiedSample),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("error");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      swal({
        title: "Success",
        text: "The sample is updated",
        icon: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      swal({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
      });
    });
  isShow.value = false;
  props.sampleData.length = 0
};

const cancelData = () => {
  // save all with original value - if the user write in but doesnt wanna save it - make it back
  description.value = oneSample.value.description;
  minerals.value = oneSample.value.minerals;
  SiO2.value = oneSample.value.SiO2;
  Al2O3.value = oneSample.value.Al2O3;
  MgO.value = oneSample.value.MgO;
  CaO.value = oneSample.value.CaO;
  Na2O3.value = oneSample.value.Na2O3;
  Fe2O3.value = oneSample.value.Fe2O3;
  density.value = oneSample.value.density;
  porosity.value = oneSample.value.porosity;
  isShow.value = false;
};
</script>

<style>
</style>