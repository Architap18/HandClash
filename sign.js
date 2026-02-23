// In-memory users (reset on refresh)
let users = [];

function signup() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  if (!username || !password) {
    msg.innerText = "Please fill all fields";
    return;
  }

  const exists = users.find(u => u.username === username);
  if (exists) {
    msg.innerText = "User already exists";
    return;
  }

  users.push({ username, password });
  msg.innerText = "Signup successful! Now login.";
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    msg.innerText = "Invalid credentials";
    return;
  }

  window.location.href = "game.html";
}
