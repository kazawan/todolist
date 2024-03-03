import TodoUpdate from "./TodoUpdate.vue";
import { createApp } from "vue";

TodoUpdate.show = function (action, id) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const app = createApp(TodoUpdate, {
    action: action,
    id: id,
    removeModal() {
      app.unmount(div);
      div.remove();
    },
  });
  app.mount(div);
};

export { TodoUpdate };
