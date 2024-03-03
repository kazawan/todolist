<template>
    <div  class="Modal" @click="removeModal" >
     <components :removeModal="removeModal" />
      <!-- <button @click="removeModal">
            Close
     </button> -->
     
     
    </div>
</template>

<script setup>
import {ref } from 'vue'
const props = defineProps({
  removeModal: {
    type: Function,
  },
  components:{
    type:Object
  },
  action:{
    type:Function
  }
});

</script>