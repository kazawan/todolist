import { ref,computed } from "vue";
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
  todos.value = JSON.parse(localStorage.getItem("todos")) || [];
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
    sortTodo("createAt");
  };

  const removeTodo = (id) => {
    const index = todos.value.findIndex((todo) => todo.id === id);
    archived.value.push(todos.value[index]);
    localStorage.setItem("archived", JSON.stringify(archived.value));
    todos.value.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos.value));
    todos.value = JSON.parse(localStorage.getItem("todos"));
    sortTodo("createAt");
  };

  const compeleteSwitch = (id) => {
    const index = todos.value.findIndex((todo) => todo.id === id);
    todos.value[index].isCompleted = !todos.value[index].isCompleted;
    todos.value[index].updateAt = new Date().getTime();
    console.log(todos.value[index].isCompleted);
    console.log(todos.value[index].updateAt);
    localStorage.setItem("todos", JSON.stringify(todos.value));
    todos.value = JSON.parse(localStorage.getItem("todos"));
    sortTodo("createAt");
  };

  const updateTodo = (id, title) => {
    const index = todos.value.findIndex((todo) => todo.id === id);
    todos.value[index].title = title;
    todos.value[index].updateAt = new Date().getTime();
    localStorage.setItem("todos", JSON.stringify(todos.value));
    todos.value = JSON.parse(localStorage.getItem("todos"));
    sortTodo("createAt");
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
    sortTodo("createAt");
  };

  const findTodo = (id) => {
    todos.value = JSON.parse(localStorage.getItem("todos"));
    return todos.value.find((todo) => todo.id === id);
  };

  const sortTodo = (type) => {
    if (type === "createAt") {
      todos.value.sort((a, b) => b.createAt - a.createAt);
      localStorage.setItem("todos", JSON.stringify(todos.value));
      todos.value = JSON.parse(localStorage.getItem("todos"));
    } else if (type === "updateAt") {
      todos.value.sort((a, b) => b.updateAt - a.updateAt);
      localStorage.setItem("todos", JSON.stringify(todos.value));
      todos.value = JSON.parse(localStorage.getItem("todos"));
    }
  };


  /**
   * @description: 归档的todo移动到todo
   * @param {归档的todo id} id 
   */
  const archivedBackToTodo = (id) => {
    const index = archived.value.findIndex((todo) => todo.id === id);
    todos.value.push(archived.value[index]);
    localStorage.setItem("todos", JSON.stringify(todos.value));
    archived.value.splice(index, 1);
    localStorage.setItem("archived", JSON.stringify(archived.value));
    todos.value = JSON.parse(localStorage.getItem("todos"));
    sortTodo("createAt");

  }

  const archivedSort = (sortType) => {
    if (sortType === "Ascending") {
      archived.value.sort((a, b) => b.createAt - a.createAt);
      localStorage.setItem("archived", JSON.stringify(archived.value));
      archived.value = JSON.parse(localStorage.getItem("archived"));
    } else if (sortType === "Descending") {
      archived.value.sort((a, b) => a.createAt - b.createAt);
      localStorage.setItem("archived", JSON.stringify(archived.value));
      archived.value = JSON.parse(localStorage.getItem("archived"));
    }else{
      return 
    }
      
  }

  const archivedDelete = (id) => {
    const index = archived.value.findIndex((todo) => todo.id === id);
    archived.value.splice(index, 1);
    localStorage.setItem("archived", JSON.stringify(archived.value));
    archived.value = JSON.parse(localStorage.getItem("archived"));
  }

  


  return {
    todos,
    addTodo,
    removeTodo,
    compeleteSwitch,
    updateTodo,
    mockData,
    archived,
    findTodo,
    sortTodo,
    archivedBackToTodo,
    archivedSort,
    archivedDelete
  };
}
