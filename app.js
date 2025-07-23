// To-do-Funktion
let todoList = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  const ul = document.getElementById("todo-list");
  ul.innerHTML = "";
  todoList.forEach((todo, i) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    li.className = todo.done ? "done" : "";
    li.onclick = () => {
      todo.done = !todo.done;
      saveTodos();
    };
    ul.appendChild(li);
  });
}
function addTodo() {
  const input = document.getElementById("todo-input");
  if (input.value.trim() === "") return;
  todoList.push({ text: input.value, done: false });
  input.value = "";
  saveTodos();
}
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todoList));
  renderTodos();
}
renderTodos();

// Notizen speichern
const notes = document.getElementById("notes");
notes.value = localStorage.getItem("notes") || "";
notes.addEventListener("input", () => {
  localStorage.setItem("notes", notes.value);
});

// Rechnerfunktion
function calculate() {
  const input = document.getElementById("calc-input").value;
  const result = document.getElementById("calc-result");
  try {
    result.textContent = eval(input);
  } catch {
    result.textContent = "Fehler in Eingabe";
  }
}
