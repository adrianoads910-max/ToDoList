const form = document.querySelector('#list-form');
const input = document.querySelector('#title');

const todoList = document.querySelector('#todo-list');
const doingList = document.querySelector('#doing-list');
const doneList = document.querySelector('#done-list');

const render = (items) => {
    todoList.innerHTML = "";
    doingList.innerHTML = "";
    doneList.innerHTML = "";

    for (const t of items) {
        const li = document.createElement("li");
        li.dataset.id = t.id;
        li.className = "postit flex items-center justify-between p-2";

        li.innerHTML = `
            <span class="title flex-1">${t.title}</span>
            ${t.status !== "done" ? `
                <button class="next-btn text-green-600">
                    <i data-lucide="arrow-right"></i>
                </button>` : ""}
            <button class="remove-btn text-red-600 ml-2">
                <i data-lucide="trash-2"></i>
            </button>
        `;

        if (t.status === "todo") {
            todoList.appendChild(li);
        } else if (t.status === "doing") {
            doingList.appendChild(li);
        } else if (t.status === "done") {
            doneList.appendChild(li);
        }
    }

    lucide.createIcons(); // ativa ícones após inserir no DOM
};

const load = () => JSON.parse(localStorage.getItem("tasks")) ?? [];
const save = (t) => localStorage.setItem("tasks", JSON.stringify(t));

let tasks = load();
render(tasks);

form.addEventListener("submit", event => {
    event.preventDefault();
    const title = input.value.trim();
    if (!title) return;

    tasks = [...tasks, { id: String(Date.now()), title, status: "todo" }];
    save(tasks);
    render(tasks);
    form.reset();
});

document.body.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const id = li.dataset.id;

    if (e.target.closest(".remove-btn")) {
        tasks = tasks.filter(t => t.id !== id);
    }

    if (e.target.closest(".next-btn")) {
        tasks = tasks.map(t => {
            if (t.id === id) {
                if (t.status === "todo") return { ...t, status: "doing" };
                if (t.status === "doing") return { ...t, status: "done" };
            }
            return t;
        });
    }

    save(tasks);
    render(tasks);
});
