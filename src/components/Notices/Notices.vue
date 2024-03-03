<template>
  <Teleport to="body">
    <div class="Modal" @click="removeNotices">
      <div class="grid grid-cols-2 gap-2 w-[60%] h-fit bg-slate-500/50 p-2 rounded-md">
        <span class=" col-span-2 text-lg">
            确定删除？
        </span>
        <span class="confirmbtn" @click.stop="removeNotices">取消</span>
        <span class="confirmbtn" @click.stop="confirm">确定删除？</span>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  id: String,
  action: Function,
  removeNotices: Function,
});

const confirm = () => {
  props.action(props.id);
  props.removeNotices();
};
</script>
