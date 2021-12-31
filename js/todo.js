const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleTodolist(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

function deleteTodo(event) {
  const deleteLi = event.target.parentElement;
  deleteLi.remove();
  toDos = toDos.filter((list) => list.id !== parseInt(deleteLi.id));
  saveTodo();
}

function paintTodo(addtodo) {
  const li = document.createElement("li");
  li.id = addtodo.id;
  const span = document.createElement("span");
  span.innerText = addtodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);

  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodo = JSON.parse(savedTodos);
  toDos = parsedTodo;
  parsedTodo.forEach(paintTodo);
}

todoForm.addEventListener("submit", handleTodolist);
