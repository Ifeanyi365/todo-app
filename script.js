const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => addTodo(todo))
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo();
    getCurrentTimeAndDate();

})

function getCurrentTimeAndDate() {
    var currentdate = new Date();
    var datetime = "Created On: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds() + "test" + currentdate.getDay();
        debugger;
    return datetime;
}

function addTodo(todo) {
    let todoText = input.value
    let createdOn = getCurrentTimeAndDate();
    todoText = todoText + " " + createdOn;
    console.log(todoText);
    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoEl = document.createElement('li')
        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.
                classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            // updateLS()

        })


        todosUL.appendChild(todoEl)

        input.value = ''

        //updateLS()
    }


}


