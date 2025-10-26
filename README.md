
---

# ✅ ToDoList – Kanban com HTML, CSS (Tailwind) e JavaScript

Um gerenciador de tarefas estilo **Kanban**, simples e funcional, feito com **HTML + JavaScript puro + TailwindCSS via CDN**, salvando todas as tarefas automaticamente no **LocalStorage** do navegador.

---

## 📌 Funcionalidades

✔ Adicionar novas tarefas
✔ Organizar tarefas em **3 colunas**:

* 🟥 **A Fazer**
* 🟦 **Em Progresso**
* 🟩 **Concluído**
  ✔ Botões para **avançar ➡** e **voltar ⬅** tarefas entre colunas
  ✔ Botão **❌ para excluir tarefa**
  ✔ Layout responsivo com **TailwindCSS**
  ✔ Estilo “post-it” para os cards
  ✔ Ícones modernos utilizando **Lucide Icons via CDN**
  ✔ Dados salvos automaticamente no **localStorage**

---

## 🖼️ Layout do Projeto

```
+------------------------------------------+
|   [Input + Botão Adicionar Tarefa]       |
+------------------------------------------+
|  A Fazer   |  Em Progresso |  Concluído  |
| (⬅ ❌ ➡) |  (⬅ ❌ ➡)   |  (⬅ ❌)   |
+------------------------------------------+
```

---

## 🗂️ Estrutura de Arquivos

```
ToDoList/
│
├── index.html      # Estrutura da página
├── handler.js      # Lógica da aplicação
└── .vscode/        # (Opcional) Configuração para Tailwind no VS Code
    └── settings.json
```

---

## 🚀 Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/adrianoads910-max/ToDoList
   ```

2. Abra a pasta do projeto:

   ```bash
   cd ToDoList
   ```

3. Clique duas vezes no arquivo **index.html**
   ✅ Pronto! Não precisa instalar nada, funciona direto no navegador.

---

## 💾 Como os dados são salvos?

As tarefas ficam armazenadas no **LocalStorage** do navegador.
Isso significa que mesmo recarregando a página ou fechando o navegador, as tarefas continuam lá.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia             | Uso                             |
| ---------------------- | ------------------------------- |
| HTML                   | Estrutura                       |
| CSS (Tailwind via CDN) | Estilização rápida e responsiva |
| JavaScript             | Funcionalidade e lógica         |
| Lucide Icons (CDN)     | Ícones SVG modernos             |
| LocalStorage           | Armazenamento persistente       |

---

## 📚 Melhorias Futuras (Ideias)

* ⏳ Funcionalidade de **arrastar e soltar (drag & drop)** nas colunas
* 🎨 Cores diferentes para cada status
* ✔ Checkbox para marcar como concluído
* 🌙 Modo escuro (Dark Mode)
* ✅ Filtros de busca ou prioridade de tarefas

---

## 🙌 Contribuindo

Quer ajudar a melhorar o projeto? Fique à vontade para:

* Fazer um fork
* Criar uma branch: `git checkout -b minha-feature`
* Enviar um pull request ✅

---

## 📄 Licença

Este projeto é **livre para uso e modificação** (MIT License ou similar).

---

