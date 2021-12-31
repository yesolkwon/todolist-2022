const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginGreeting = document.querySelector("#greeting");

const todoformHidden = document.querySelector("#todo-form");

const USERNAME = "username";
const HIDDEN_CLASS = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username);

  paintGreeting(username);
}
function paintGreeting(gettingName) {
  loginGreeting.classList.remove(HIDDEN_CLASS);
  loginGreeting.innerText = `Hello ${gettingName}`;
  todoformHidden.classList.remove(HIDDEN_CLASS);
}
const savedUsername = localStorage.getItem(USERNAME);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
