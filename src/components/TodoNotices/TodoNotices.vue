<template>
    <!-- <div v-show="props.notice"  class="absolute top-0 left-0 w-full h-screen p-2  flex  z-10  justify-center "> -->
        <div class=" fixed top-10  translate-x-[-50%]  left-[50%] w-64  h-fit p-2 bg-gray-300/30 rounded-md text-[.8rem] border-2 border-gray-800/50  backdrop-blur-sm">
            {{ props.msg }}  
        </div>
      
    <!-- </div> -->
    
</template>

<script setup>
import {  computed } from 'vue'
const props = defineProps({
    msg: String,
    notice: {
        type: Boolean,
        default: false
    }
})

const isopen = computed(() =>{
    return props.notice ? props.notice : false
})

</script>