<script setup>
import TodoItem from "./components/TodoItem.vue";
import TodoBar from "./components/TodoBar.vue";
import { ref, computed,onMounted } from "vue";
import TODO from "./TODO";

import TodoNotices from './components/TodoNotices/index.js'
const { todos,watchtodo, addTodo, removeTodo, compeleteSwitch,updateTodo,mockData,archived,sortTodo } = TODO();



const newTodo = ref("");
onMounted(()=>{
  sortTodo('createAt')
  TodoNotices.open(true,'欢迎使用todolist')
  
})

// mockData(30)

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
