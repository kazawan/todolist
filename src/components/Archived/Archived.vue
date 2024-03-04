<template>
  <div class="fixed top-0 left-0 w-full h-screen z-10 p-[10%] backdrop-blur-sm">
    <div
      class="w-full h-[90%] bg-slate-500 border-2 border-gray-600 rounded-md p-2"
    >
      <div class="flex justify-between">
        <h2 class="text-2xl font-bold">Archived</h2>
        <button @click="removeArchived" 
        class="text-2xl font-bold text-red-300"
        >Close</button>
      </div>

      <div class="grid grid-cols-8 gap-2">
        <div class="col-span-1">id</div>
        <div class="col-span-3">title</div>
        <div class="col-span-2">createAt</div>
        <div class="col-span-1">roll</div>
        <div class="col-span-1">del</div>
      </div>
      <div class="w-full h-[90%] overflow-auto">
        <div
          v-for="(arch, index) in archived"
          :key="index"
          class="grid grid-cols-8 gap-2 mb-2"
        >
          <div
            class="col-span-1 text-[.7rem] overflow-hidden text-ellipsis h-4"
          >
            {{ arch.id }}
          </div>
          <div class="col-span-3 text-[.7rem]  min-w-[200px]">{{ arch.title }}</div>
          <div class="col-span-2 text-[.7rem]  min-w-[50px] max-h-[.8rem]   overflow-hidden  text-nowrap  text-ellipsis">
            {{ getDateTime(arch.updateAt) }}
          </div>
          <div
            class="col-span-1 text-[.7rem] text-center bg-green-400 rounded-sm h-fit select-none cursor-pointer"
            @click="archivedBackToTodo(arch.id)"
          >
          resume 
          </div>
          <div
            class="col-span-1 text-[.7rem] text-center bg-red-400 rounded-sm h-fit select-none cursor-pointer"
            @click="archivedDelete(arch.id)"    
          >
            Destroy
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import TODO from "../../TODO/index.js";
const { 
    archived, 
    archivedBackToTodo ,
    archivedSort,
    archivedDelete
} = TODO();

archivedSort('Ascending')

const getDateTime = (n) => {
  n = new Date(n);
  return (
    n.getFullYear() +
    "-" +
    (n.getMonth() + 1) +
    "-" +
    n.getDate() +
    " " +
    n.getHours() +
    ":" +
    n.getMinutes() +
    ":" +
    n.getSeconds()
  );
};
const props = defineProps({
  removeArchived: Function,
});
</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
  height: 3px;
}

/* 滚动条有滑块的轨道部分 */
::-webkit-scrollbar-track-piece {
  background-color: transparent;
  border-radius: 5px;
}

/* 滚动条滑块(竖向:vertical 横向:horizontal) */
::-webkit-scrollbar-thumb {
  cursor: pointer;
  background-color: #f2f2f2;
  border-radius: 5px;
}

/* 滚动条滑块hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #999999;
}

/* 同时有垂直和水平滚动条时交汇的部分 */
::-webkit-scrollbar-corner {
  display: block;
  /* 修复交汇时出现的白块 */
}
</style>
