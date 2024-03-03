<script setup>
import TodoItem from "./components/TodoItem.vue";
import TodoBar from "./components/TodoBar.vue";
// import {Modal} from "./components/Modal/index.js";
import { ref } from "vue";
import TODO from "./TODO";
const { todos, addTodo, removeTodo, compeleteSwitch,updateTodo,mockData } = TODO();
const newTodo = ref("");


mockData(30);
</script>

<template>
  <div class="title">
    <h1>Todolist</h1>
  </div>
  <div>
    <TodoBar />
  </div>
  <div class="todo">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :removeTodo="removeTodo"
      :compeleteSwitch="compeleteSwitch"
      class="
        odd:bg-gray-200
        even:bg-gray-100
         font-titillium
         italic
      "

    />
  </div>
  <!-- <Modal /> -->
</template>
