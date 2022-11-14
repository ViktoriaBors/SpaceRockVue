<template>
  <div>
    <HeroSection :imgSource="imgSource" />
    <main class="text-justify">
      <div class="container mx-auto px-6 py-4 bg-slate-200">
        <p class="pt-2 text-lg text-center font-bold py-4">Contact Us</p>
        <div class="text-justify p-2">
          <p>
            Feel free to contact us in regard of a research projects, loaning
            and approving materials or if you have any questions about our
            services via
            <span class="uppercase font-bold italic"
              >spacerock@spacerock.com</span
            >.
          </p>
          <p class="text-center py-4">
            Register or login below to gain access to the database.
          </p>
        </div>
        <div class="flex flex-col md:flex-row justify-around items-center">
          <!--Register-->
          <div
            class="
              block
              p-6
              rounded-lg
              shadow-lg
              bg-white
              m-2
              w-full
              md:w-1/2
              lg:w-1/3
            "
          >
            <form id="registerForm" @submit.prevent="register">
              <div class="grid grid-cols-2 gap-4">
                <div class="form-group mb-6">
                  <input
                    type="text"
                    required
                    class="
                      form-control
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
                      focus:text-gray-700
                      focus:bg-white
                      focus:border-indigo-600
                      focus:outline-none
                    "
                    v-model="firstName"
                    aria-describedby="firstName"
                    placeholder="First name"
                  />
                </div>
                <div class="form-group mb-6">
                  <input
                    type="text"
                    required
                    class="
                      form-control
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
                      focus:text-gray-700
                      focus:bg-white
                      focus:border-indigo-600
                      focus:outline-none
                    "
                    v-model="lastName"
                    aria-describedby="lastName"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div class="form-group mb-6">
                <input
                  type="email"
                  required
                  class="
                    form-control
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
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-indigo-600
                    focus:outline-none
                  "
                  v-model="emailReg"
                  placeholder="Email address"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="password"
                  minlength="2"
                  required
                  class="
                    form-control
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
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-indigo-600
                    focus:outline-none
                  "
                  v-model="passwordReg"
                  placeholder="Password"
                />
              </div>
              <button
                class="
                  w-full
                  inline-block
                  px-6
                  py-2.5
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
                "
              >
                Register
              </button>
              <p id="requiredField" class="pt-1.5 px-1 text-xs text-red-700">
                All fields are required
              </p>
            </form>
          </div>
          <!--register end-->
          <!--Login-->
          <div
            class="
              block
              p-6
              rounded-lg
              shadow-lg
              bg-white
              m-2
              w-full
              md:w-1/2
              lg:w-1/3
            "
          >
            <form @submit.prevent="login">
              <div class="form-group mb-6">
                <label
                  for="emailSign"
                  class="form-label inline-block mb-2 text-gray-700"
                  >Email address</label
                >
                <input
                  type="email"
                  required
                  class="
                    form-control
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
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-indigo-600
                    focus:outline-none
                  "
                  v-model="emailSign"
                  aria-describedby="emailSign"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group mb-6">
                <label
                  for="passwordSign"
                  class="form-label inline-block mb-2 text-gray-700"
                  >Password</label
                >
                <input
                  type="password"
                  required
                  class="
                    form-control
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
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-indigo-600
                    focus:outline-none
                  "
                  v-model="passwordSign"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                class="
                  w-full
                  inline-block
                  px-6
                  py-2.5
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
                "
              >
                Sign in
              </button>
              <p class="requiredField pt-1.5 px-1 text-xs text-red-700">
                All fields are required
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TopNavbar from "../components/TopNavbar.vue";
import HeroSection from "../components/HeroSection.vue";
import BottomFooter from "../components/BottomFooter.vue";

let imgSource = "(img/pexels-pixabay-33153-2.jpg)";

let firstName = ref("");
let lastName = ref("");
let emailReg = ref("");
let passwordReg = ref("");
let emailSign = ref("");
let passwordSign = ref("");

const register = (event) => {
  let nameIsValid = firstName.value !== "" && lastName.value !== "";
  let emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    emailReg.value
  );
  let passwordIsValid = passwordReg.value !== "";
  let formIsValid = nameIsValid && emailIsValid && passwordIsValid;
  if (formIsValid) {
    let newUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: emailReg.value,
      password: passwordReg.value,
    };
    fetch(`http://localhost:8081/user/register`, {
      method: `Post`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
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
          text: "You are registered",
          icon: "success",
        });
        setTimeout(() => {
          window.open("http://localhost:8080/dashboard", "_self");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Error",
          text: "Already existing user",
          icon: "error",
        });
      });
  }
};

const login = (event) => {
  let emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    emailSign.value
  );
  let passwordIsValid = passwordSign.value !== "";
  let formIsValid = emailIsValid && passwordIsValid;
  if (formIsValid) {
    let user = {
      email: emailSign.value,
      password: passwordSign.value,
    };
    fetch(`http://localhost:8081/user/login`, {
      method: `Post`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
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
          text: "You are registered",
          icon: "success",
        });
        setTimeout(() => {
          window.open("http://localhost:8080/dashboard", "_self");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Error",
          text: "Access Denied",
          icon: "error",
        });
      });
  }
};
</script>

<style>
</style>