import TodoNotices from "./TodoNotices.vue";
import { createApp } from "vue";

TodoNotices.open = (notice,msg) =>{
    const div = document.createElement("div");
    document.body.appendChild(div);
    const app = createApp(TodoNotices, {
        removeTodoNotices: () => {
            app.unmount(div);
            document.body.removeChild(div);
        },
        notice,
        msg
    });    
    app.mount(div);
    setTimeout(() => {
        app.unmount(div);
        document.body.removeChild(div);
    }, 3000);   

}





export default TodoNotices;