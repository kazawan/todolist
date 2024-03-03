<template>
  <div class="grid grid-cols-8 border-l-4 border-gray-400 odd:border-gray-300 px-2">
    <div class="col-span-7 text-start px-2"  :class="[titleStateColor]">
      {{ props.todo.title }}
      
    </div>
    <!-- <div class="col-span-2 text-start px-2">
      {{ props.todo.createAt }}
      
    </div> -->
    <div class="col-span-1 grid grid-cols-2 ">
      <div class="col-span-1 px-2 text-center ">
        <button @click="compeleteSwitch(props.todo.id)">
          {{ props.todo.isCompleted === true ? "✔️" : "❌" }}
        </button>
      </div>
      <div class="col-span-1 text-center px-2 ">
        <button @click="rmTodo">🗑️</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref,computed } from "vue";
import {Notices} from './Notices/index.js'

const props = defineProps({
  todo: Object,
  removeTodo: Function,
  compeleteSwitch: Function,
});

const titleStateColor = computed(() => {
  return props.todo.isCompleted === true ? " text-gray-400" : "text-black";
});

const rmTodo = () => {
  
  Notices.show(props.removeTodo,props.todo.id)  
};


// const isCompleted = computed(() => props.todo.isCompleted)
</script>
