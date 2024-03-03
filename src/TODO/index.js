import { ref } from "vue";
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
//random title for todo use some emoji
function randomTitle() {
  const titles = [
    "Learn Vue 3",
    "Learn React",
    "Learn Angular",
    "Learn Node.js",
    "Learn TypeScript",
    "Learn JavaScript",
    "Learn CSS",
    "Learn HTML",
    "Learn Python",
    "Learn Go",
    "Learn Rust",
    "Learn Java",
    "Learn C++",
    "Learn C#",
    "Learn Swift",
    "Learn Kotlin",
  ];
  return titles[Math.floor(Math.random() * titles.length)];
}

const todos = ref(null);
//归档
const archived = ref(null);

export default function TODO() {
  todos.value = JSON.parse(localStorage.getItem("todos"));
  archived.value = JSON.parse(localStorage.getItem("archived")) || [];
  const addTodo = (title) => {
    console.log("add");
    todos.value.push({
      id: uuidv4(),
      title,
      isCompleted: false,
      createAt: new Date().getTime(),
      updateAt: new Date().getTime(),
    });
    localStorage.setItem("todos", JSON.stringify(todos.value));
    todos.value = JSON.parse(localStorage.getItem("todos"));
  };

  const removeTodo = (id) => {
    const index = todos.value.findIndex((todo) => todo.id === id);
    archived.value.push(todos.value[index]);
    localStorage.setItem("archived", JSON.stringify(archived.value));
    todos.value.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos.value));
    todos.value = JSON.parse(localStorage.getItem("todos"));
  };

  const compeleteSwitch = (id) => {
    const index = todos.value.findIndex((todo) => todo.id === id);
    todos.value[index].isCompleted = !todos.value[index].isCompleted;
    todos.value[index].updateAt = new Date().getTime();
    console.log(todos.value[index].isCompleted);
    console.log(todos.value[index].updateAt);
    localStorage.setItem("todos", JSON.stringify(todos.value));
    todos.value = JSON.parse(localStorage.getItem("todos"));
  };

  const updateTodo = (id, title) => {
    const index = todos.value.findIndex((todo) => todo.id === id);
    todos.value[index].title = title;
    todos.value[index].updateAt = new Date().getTime();
    localStorage.setItem("todos", JSON.stringify(todos.value));
    todos.value = JSON.parse(localStorage.getItem("todos"));
  };

  const mockData = (count) => {
    for (let i = 0; i < count; i++) {
      todos.value.push({
        id: uuidv4(),
        title: randomTitle(),
        isCompleted: Math.random() > 0.5,
        createAt: new Date().getTime(),
        updateAt: new Date().getTime(),
      });
    }
    localStorage.setItem("todos", JSON.stringify(todos.value));
    localStorage.setItem("archived", JSON.stringify(archived.value));
    todos.value = JSON.parse(localStorage.getItem("todos"));
  };
  const watchtodo = ref(todos.value);
  return {
    todos,
    addTodo,
    removeTodo,
    compeleteSwitch,
    updateTodo,
    mockData,
    archived,
  };
}
