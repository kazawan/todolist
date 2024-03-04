import Archived from "./Archived.vue";
import { createApp } from "vue";
Archived.open = () =>{
    const app = createApp(Archived,{
        removeArchived: () =>{
            app.unmount(div);
            document.body.removeChild(div);
        }
    
    });
    const div = document.createElement("div");
    document.body.appendChild(div);
    app.mount(div);
}

export default Archived;