<template>
  <div class="Modal" @click="removeModal">
    <div class="w-[80%] bg-slate-100 rounded-md shadow-md">
      <div class="flex justify-between items-center p-2">
        <h1 class="text-2xl font-bold">Update Todo</h1>
        <button @click.stop="removeModal">Close</button>
      </div>
      <div class="p-2" @click.stop>
        <form @submit.stop.prevent="updateT">
          <div class="flex flex-col gap-2">
            <input
              type="text"
              v-model="title"
              class="p-2 border-2 border-gray-300"
              :placeholder="placeHolder"
            />

            <button type="submit" class="p-2 bg-slate-200 text-white font-bold">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TODO from '../../TODO/index.js';
const { findTodo } = TODO();
const title = ref("");
const placeHolder =ref("")
onMounted(() => {
  const todo = findTodo(props.id)
  placeHolder.value = todo.title
  
})

const props = defineProps({
  id: String,
  action: Function,
  removeModal: Function,
});

const updateT = () =>{
    console.log('update')
    props.action(props.id,title.value)
    props.removeModal()
    title.value = ''
}
</script>
