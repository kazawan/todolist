import { ref } from 'vue'
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}
//random title for todo use some emoji
function randomTitle() {
    const titles = ['Learn Vue 3',
        'Learn React',
        'Learn Angular',
        'Learn Node.js',
        'Learn TypeScript',
        'Learn JavaScript',
        'Learn CSS',
        'Learn HTML',
        'Learn Python',
        'Learn Go',
        'Learn Rust',
        'Learn Java',
        'Learn C++',
        'Learn C#',
        'Learn Swift',
        'Learn Kotlin',
    ]
    return titles[Math.floor(Math.random() * titles.length)]
}


export default function TODO() {
    const todos = ref([
        // {
        //     id: uuidv4(),
        //     title: 'Learn Vue 3',
        //     isCompleted: false,
        //     createAt: new Date().getTime(),
        //     updateAt: new Date().getTime()
        // },
        // {
        //     id: uuidv4(),
        //     title: 'Learn React',
        //     isCompleted: true,
        //     createAt: new Date().getTime(),
        //     updateAt: new Date().getTime()
        // },
        // {
        //     id: uuidv4(),
        //     title: 'Learn Angular',
        //     isCompleted: false,
        //     createAt: new Date().getTime(),
        //     updateAt: new Date().getTime()
        // }
    ])

    const addTodo = (title) => {
        todos.value.push({
            id: uuidv4(),
            title,
            isCompleted: false,
            createAt: new Date().getTime(),
            updateAt: new Date().getTime()
        })
    }

    const removeTodo = (id) => {
        const index = todos.value.findIndex(todo => todo.id === id)
        todos.value.splice(index, 1)
    }

    const compeleteSwitch = (id) => {
        const index = todos.value.findIndex(todo => todo.id === id)
        todos.value[index].isCompleted = !todos.value[index].isCompleted
        todos.value[index].updateAt = new Date().getTime()
        console.log(todos.value[index].isCompleted)
        console.log(todos.value[index].updateAt)
    }

    const updateTodo = (id, title) => {
        const index = todos.value.findIndex(todo => todo.id === id)
        todos.value[index].title = title
        todos.value[index].updateAt = new Date().getTime()
    }

    const mockData = (count) => {
        for (let i = 0; i < count; i++) {
            todos.value.push({
                id: uuidv4(),
                title: randomTitle(),
                isCompleted: Math.random() > 0.5,
                createAt: new Date().getTime(),
                updateAt: new Date().getTime()
            })
        }
    }


    return {
        todos,
        addTodo,
        removeTodo,
        compeleteSwitch,
        updateTodo,
        mockData

    }

}