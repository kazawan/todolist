import Notices from "./Notices.vue";
import { createApp } from "vue";
Notices.show = function (action, id) {
  const app = createApp(Notices, {
    action,
    id,
    removeNotices: () => {
      app.unmount(div);
      document.body.removeChild(div);
    },
  });
  const div = document.createElement("div");
  app.mount(div);
};

export { Notices };
