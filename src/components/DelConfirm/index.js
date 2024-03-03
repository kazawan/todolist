import DelConfirm from "./DelConfirm.vue";
import { createApp } from "vue";
DelConfirm.show = function (action, id) {
  const app = createApp(DelConfirm, {
    action,
    id,
    removeDelConfirm: () => {
      app.unmount(div);
      document.body.removeChild(div);
    },
  });
  const div = document.createElement("div");
  app.mount(div);
};

export { DelConfirm };
