<template>
    <div class="grid grid-cols-12 gap-2 bg-gray-200 p-2">
        <div class=" col-span-4  ">
            
        </div>
        <div class=" col-span-2  ">
            Button..
        </div>
        <div class=" col-span-2  ">
            Button..
        </div>
        <div class=" col-span-2  ">
            Button..
        </div>
        <div class=" col-span-2  ">
            <button  @click="Modal.show">Add Todo...</button>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue";
import { Modal } from "./Modal/index.js";

</script>
