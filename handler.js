//  control+k+c
const form = document.querySelector('#list-form')
const input = document.querySelector('#title')
const list = document.querySelector('#list')

const render = (items) => {
    list.innerHTML = ""

    for (const t of items) {
        const li = document.createElement("li")
        li.dataset.id = t.id;
        li.className = "list-item" + (t.done ? " done" : "")

        li.innerHTML = `
            <input
                type="checkbox"
                class="toggle"
                ${t.done ? "checked" : ""}
            />
            <span class="title"></span>
            <button type="button" class="remove-btn">X</button>
        `
        li.querySelector(".title").textContent = t.title
        list.appendChild(li)
    }
}

const load = () => {
    try {
        return JSON.parse(localStorage.getItem("tasks")) ?? []
    } catch (error) {
        console.log({ loadError: error })
        return []
    }
}

const save = (t) =>
    localStorage.setItem("tasks", JSON.stringify(t))


let tasks = load()
render(tasks)

form.addEventListener("submit", event => {
    event.preventDefault()

    if (!form.reportValidity()) return

    const title = input.value.trim()

    if (!title) {
        alert("Título é obrigatório")
        return
    }

    tasks = [...tasks, { id: String(Date.now()), title, done: false }]
    save(tasks)
    render(tasks)
    form.reset()
    input.focus

})

list.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    const id = li.dataset.id;

    if (e.target.matches(".toggle")) {

        console.log('click')

        tasks = tasks.map(t => t.id === id ? { ...t, done: !t.done } : t);
    }

    if (e.target.matches(".remove-btn")) {
        tasks = tasks.filter(t => t.id !== id);
    }
    save(tasks); render(tasks);
});
