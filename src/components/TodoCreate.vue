<template>
    <div class="w-[80%] bg-slate-100 rounded-md shadow-md">
        <div class="flex justify-between items-center p-2">
            <h1 class="text-2xl font-bold">Create Todo</h1>
            <button @click.stop="removeModal">Close</button>
        </div>
        <div class="p-2 " @click.stop>
            <form @submit.stop.prevent="createTodo">
                <div class="flex flex-col gap-2 ">
                    <input
                        type="text"
                        v-model="title"
                        class="p-2 border-2 border-gray-300"
                        placeholder="Title"
                    />

                    <button
                        type="submit"
                        class="p-2 bg-slate-200 text-white font-bold"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import TODO from '../TODO/index.js' 
const {addTodo} = TODO()

const props = defineProps({
    removeModal: {
        type: Function,
    },
});

const title = ref('')

const createTodo = () =>{
    addTodo(title.value);
    title.value = '';
    props.removeModal()
}
</script>
