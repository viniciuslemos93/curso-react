// Função que adiciona tarefa
function addTask() {
    //Título da tarefa
    const taskTitle = document.querySelector("#task-title").value

    if(taskTitle) {
        // Clona template
        const template = document.querySelector(".template")

        const newTask = template.cloneNode(true)

        // adiciona título
        newTask.querySelector(".task-title").textContent = taskTitle

        // remover as classes desnecessárias
        newTask.classList.remove("template")
        newTask.classList.remove("hide")

        // adiciona tarefa na lista
        const list = document.querySelector("#task-list")
        list.appendChild(newTask)

        // adicionar o evento de remover
        const removeBTN = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this)
        });

        // adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this)
        })

        // limpar texto
        document.querySelector("#task-title").value = ""
    }
}

// Função de remover tasks
function removeTask(task) {
    task.parentNode.remove(true) // acessando o elemento pai e removendo
}

// Função de completar tarefa
function completeTask(task) {
    const taskComplete = task.parentNode
    /* A função toggle verifica se tem a classe, se tiver ele remove, se não tiver ele coloca.
    Assim não precisamos usar o if else*/
    taskComplete.classList.toggle("done")

}

// Evento de adicionar tarefa.
const addBtn = document.querySelector("#add-btn")

addBtn.addEventListener("click", function(e) {
    e.preventDefault()//Para não submeter o formulário
    addTask()
})