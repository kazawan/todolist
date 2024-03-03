import Modal from "./Modal.vue";
import { createApp } from "vue";

Modal.show = function (components, props) {
  const div = document.createElement("div");

  document.body.appendChild(div);
  const mo = createApp(Modal, {
    removeModal() {
      mo.unmount(div);
      document.body.removeChild(div);
    },
    components,
  });

  mo.mount(div);
};

export { Modal };
