<template>
    <div class="grid grid-cols-12 gap-2 bg-gray-200 p-2">
        <div class=" col-span-4  ">
            
        </div>
        <div class=" col-span-2  ">
            
        </div>
        <div class=" col-span-2  ">
            
        </div>
        <div class=" col-span-2  ">
            <button >Archived</button>
        </div>
        <div class=" col-span-2  ">
            <button  @click="Modal.show(TodoCreate)">Create</button>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue";
import { Modal } from "./Modal/index.js";
import TodoCreate from "./TodoCreate.vue";
</script>
