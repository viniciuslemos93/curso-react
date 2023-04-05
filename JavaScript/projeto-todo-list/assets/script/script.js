// Função que adiciona tarefa
function addTask() {
    //Título da tarefa
    const taskTitle = document.querySelector("#task-title").value

    if(taskTitle) {
        // Clona template
        const template = document.querySelector(".template")

        const newTask = template.cloneNode(true)

        console.log (newTask)
    }
}

// Evento de adicionar tarefa.
const addBtn = document.querySelector("#add-btn")

addBtn.addEventListener("click", function(e) {
    e.preventDefault()//Para não submeter o formulário
    addTask()
})

