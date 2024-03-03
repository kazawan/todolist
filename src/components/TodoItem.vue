<template>
  <div class=" relative grid grid-cols-8 border-l-4 border-gray-400 odd:border-gray-300 px-2"
    @mouseover="showMenu = true"
    @mouseleave="showMenu = false"
  >
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
    <div v-if="showMenu" class=" absolute text-sm top-0 left-[.2rem] font-extrabold text-gray-500  border-gray-600  border-2 select-none cursor-pointer "
    @click.stop="TodoUpdate.show(updateTodo,props.todo.id)"
    >
      ::
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref,computed } from "vue";
import {DelConfirm} from './DelConfirm/index.js'
import { TodoUpdate} from './TodoUpdate/index.js'
import TODO from "../TODO/index.js";
const { updateTodo } = TODO();

const showMenu = ref(false);

const props = defineProps({
  todo: Object,
  removeTodo: Function,
  compeleteSwitch: Function,
});

const titleStateColor = computed(() => {
  return props.todo.isCompleted === true ? " text-gray-400" : "text-black";
});

const rmTodo = () => {
  
  DelConfirm.show(props.removeTodo,props.todo.id)  
};


// const isCompleted = computed(() => props.todo.isCompleted)
</script>./TodoUpdate/index.js
