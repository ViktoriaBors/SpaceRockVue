<template>
  <!--if there is a prop - user - this topnavbar shows  dasboard-->
    <div class="
        w-full
        flex flex-wrap
        items-center
        justify-between
        py-4
        bg-slate-400
        hover:text-yellow-700
        focus:text-yellow-800
        shadow-lg
        navbar navbar-expand-sm
        text-lg
        mt-32 
        ">
        <div class="container-fluid w-full flex flex-col items-center justify-center px-6">
            <p class="font-extrabold tracking-wider text-yellow-800"> SpaceRock</p>
            <p class="text-center text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-yellow-900 py-4">
                Research Facility and Database Center for Lunar materials</p>
            <p class="text-center text-yellow-800"> Welcome</p>
            <p class="text-center text-yellow-800"> You are logged in as <span
                    class=" text-md font-bold capitalize">{{props.user}}</span> <br>
                    <span class="text-md font-bold">{{props.user}}</span>
            </p>
            
        </div>
        <p class="pl-2 cursor-pointer text-sm font-bold text-yellow-900">Log Out</p>
    </div>
</template>

<script setup>
const props = defineProps(['user'])
</script>

<style>

</style>