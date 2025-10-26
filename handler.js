const form = document.querySelector('#list-form');
const input = document.querySelector('#title');

const todoList = document.querySelector('#todo-list');
const doingList = document.querySelector('#doing-list');
const doneList = document.querySelector('#done-list');

// Função de renderização
const render = (items) => {
    todoList.innerHTML = "";
    doingList.innerHTML = "";
    doneList.innerHTML = "";

    for (const t of items) {
        const li = document.createElement("li");
        li.dataset.id = t.id;
        li.className = "postit flex items-center justify-between p-2";

        li.innerHTML = `
            ${t.status !== "todo" ? `
                <button class="prev-btn text-blue-600 mr-2">
                    <i data-lucide="arrow-left"></i>
                </button>` : ""}

            <span class="title flex-1">${t.title}</span>

            ${t.status !== "done" ? `
                <button class="next-btn text-green-600 ml-2">
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

    lucide.createIcons(); // Atualiza os ícones sempre que a lista é renderizada
};

// Carregar e salvar no localStorage
const load = () => JSON.parse(localStorage.getItem("tasks")) ?? [];
const save = (t) => localStorage.setItem("tasks", JSON.stringify(t));

let tasks = load();
render(tasks);

// Adicionar nova tarefa
form.addEventListener("submit", event => {
    event.preventDefault();
    const title = input.value.trim();
    if (!title) return;

    tasks = [...tasks, { id: String(Date.now()), title, status: "todo" }];
    save(tasks);
    render(tasks);
    form.reset();
});

// Controle de botões: avançar, voltar e remover
document.body.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    const id = li.dataset.id;

    // Remover tarefa
    if (e.target.closest(".remove-btn")) {
        tasks = tasks.filter(t => t.id !== id);
    }

    // Avançar ➡
    if (e.target.closest(".next-btn")) {
        tasks = tasks.map(t => {
            if (t.id === id) {
                if (t.status === "todo") return { ...t, status: "doing" };
                if (t.status === "doing") return { ...t, status: "done" };
            }
            return t;
        });
    }

    // Voltar ⬅
    if (e.target.closest(".prev-btn")) {
        tasks = tasks.map(t => {
            if (t.id === id) {
                if (t.status === "done") return { ...t, status: "doing" };
                if (t.status === "doing") return { ...t, status: "todo" };
            }
            return t;
        });
    }

    save(tasks);
    render(tasks);
});
