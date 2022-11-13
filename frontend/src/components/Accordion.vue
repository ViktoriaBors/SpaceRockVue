<template>
  <div>
    <!--new material accordion-->
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      data-active-classes="bg-gray-800 text-white"
    >
      <div>
        <h2 id="newSample-heading">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-white bg-gray-700 border border-b-0 border-gray-200 rounded-t-xl hover:bg-gray-800"
            data-accordion-target="#newSample-body"
            aria-expanded="false"
            aria-controls="newSample-body"
          >
            Add new samples to the database
          </button>
        </h2>
        <div
          id="newSample-body"
          class="hidden flex flex-row justify-center items-center"
          aria-labelledby="Newsample-body"
        >
          <div
            class="block p-6 rounded-lg shadow-lg bg-white m-2 w-full lg:w-1/2"
          >
            <form>
              <div class="form-group mb-1">
                <label
                  for="materialName"
                  class="form-label inline-block mb-2 text-gray-700"
                  >Name of the material</label
                >
                <input
                  type="text"
                  required
                  class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  aria-describedby="materialName"
                  placeholder="Sample name"
                />
              </div>
              <p class="requiredField mb-5 px-1 text-xs text-red-700">
                The field is required
              </p>
              <div class="form-group mb-1">
                <label
                  for="description"
                  class="form-label inline-block mb-2 text-gray-700"
                  >Short Description</label
                >
                <textarea
                  required
                  class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  rows="3"
                  aria-describedby="description"
                  placeholder="Provide short description"
                ></textarea>
              </div>
              <p class="requiredField mb-5 px-1 text-xs text-red-700">
                The field is required
              </p>
              <div class="form-group mb-1">
                <label
                  for="minerals"
                  class="form-label inline-block mb-2 text-gray-700"
                  >Mineral composition</label
                >
                <textarea
                  required
                  class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  id="mineralsNew"
                  aria-describedby="minerals"
                >
                </textarea>
              </div>
              <p class="requiredField mb-5 px-1 text-xs text-red-700">
                The field is required
              </p>
              <p
                for="chemistry"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Geochemical composition
              </p>
              <div class="form-group mb-6">
                <div class="flex flex-row justify-around items-center">
                  <label
                    for="siO"
                    class="form-label inline-block mb-2 text-gray-700"
                    >SiO<sub>2</sub></label
                  >
                  <input
                    type="number"
                    class="inline px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                    aria-describedby="siO"
                  />
                </div>
                <div class="flex flex-row justify-around items-center">
                  <label
                    for="alO"
                    class="form-label inline-block mb-2 text-gray-700"
                    >Al<sub>2</sub>O<sub>3</sub></label
                  >
                  <input
                    type="number"
                    class="inline px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                    aria-describedby="alO"
                  />
                </div>
                <div class="flex flex-row justify-around items-center">
                  <label
                    for="mgO"
                    class="form-label inline-block mb-2 text-gray-700"
                    >MgO</label
                  >
                  <input
                    type="number"
                    class="inline px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                    aria-describedby="mgO"
                  />
                </div>
                <div class="flex flex-row justify-around items-center">
                  <label
                    for="caO"
                    class="form-label inline-block mb-2 text-gray-700"
                    >CaO</label
                  >
                  <input
                    type="number"
                    class="inline px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                    aria-describedby="caO"
                  />
                </div>
                <div class="flex flex-row justify-around items-center">
                  <label
                    for="naO"
                    class="form-label inline-block mb-2 text-gray-700"
                    >Na<sub>2</sub>O</label
                  >
                  <input
                    type="number"
                    class="inline px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                    aria-describedby="naO"
                  />
                </div>
                <div class="flex flex-row justify-around items-center">
                  <label
                    for="feO"
                    class="form-label inline-block mb-2 text-gray-700"
                    >Fe<sub>2</sub>O<sub>3</sub></label
                  >
                  <input
                    type="number"
                    class="inline px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                    aria-describedby="feO"
                  />
                </div>
              </div>
              <div class="form-group mb-6">
                <label
                  for="density"
                  class="form-label inline-block mb-2 text-gray-700"
                  >Density (kg/m<sub>3</sub>)</label
                >
                <input
                  type="text"
                  class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  id="densityNew"
                  aria-describedby="density"
                  placeholder="Density"
                />
              </div>
              <div class="form-group mb-6">
                <label
                  for="porosity"
                  class="form-label inline-block mb-2 text-gray-700"
                  >Porosity (%)</label
                >
                <input
                  type="number"
                  class="l block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  aria-describedby="porosity"
                  placeholder="Porosity"
                />
              </div>
              <button
                type="submit"
                class="w-full inline-block px-6 py-2.5 bg-yellow-500 text-black font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg active:bg-yellow-700 active:shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <!--Img upload-->
        <div>
          <h2 class="mb-0" id="img-heading">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium text-left text-white bg-gray-700 border border-b-0 border-gray-200 rounded-t-xl hover:bg-gray-800"
              data-accordion-target="#img-body"
              aria-expanded="false"
              aria-controls="img-body"
            >
              Image upload
            </button>
          </h2>
          <div
            id="img-body"
            class="hidden text-center"
            aria-labelledby="img-heading"
          >
            <div
              class="accordion-body py-4 px-5 flex justify-center items-center"
            >
              <div
                class="block p-6 rounded-lg shadow-lg bg-white m-2 w-full lg:w-1/2"
              >
                <form id="submitImgForm">
                  <div class="form-group mb-5">
                    <label
                      for="materialName"
                      class="form-label inline-block mb-2 text-gray-700"
                      >Name of the material</label
                    >
                    <input
                      type="text"
                      required
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                      id="materialName"
                      aria-describedby="materialName"
                      placeholder="Sample name"
                    />
                  </div>
                  <div class="form-group mb-6">
                    <label
                      for="imgUpload"
                      class="form-label inline-block mb-2 text-gray-700"
                      >Upload an image about the sample</label
                    >
                    <input
                      id="imgUpload"
                      accept="image/png, image/jpg, image/jpeg"
                      required
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      type="file"
                    />
                  </div>
                  <button
                    id="submitImgBtn"
                    type="button"
                    class="w-full inline-block px-6 py-2.5 bg-yellow-500 text-black font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg active:bg-yellow-700 active:shadow-lg"
                  >
                    Submit
                  </button>
                  <p id="requiredField" class="mt-5 px-1 text-xs text-red-700">
                    All fields are required
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
