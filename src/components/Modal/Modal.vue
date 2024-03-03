<template>
    <div  class="Modal">
     Modal..
     <button @click="removeModal">
            Close
     </button>
    </div>
</template>

<script setup>
import {ref } from 'vue'

const props = defineProps({
  removeModal: {
    type: Function,
  },
});

</script>