import Modal from './Modal.vue';
import {createApp} from 'vue';
Modal.show = function (options) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const mo = createApp(Modal, {
        removeModal() {
            mo.unmount(div);
            document.body.removeChild(div);
        }
    });
    mo.mount(div);
}



export  {Modal};
