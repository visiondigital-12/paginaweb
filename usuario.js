// Selección de elementos
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const btnLogin = document.getElementById("btn-login");
const btnRegister = document.getElementById("btn-register");

// Cambiar a formulario de Login
btnLogin.addEventListener("click", () => {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  btnLogin.classList.add("active");
  btnRegister.classList.remove("active");
});

// Cambiar a formulario de Registro
btnRegister.addEventListener("click", () => {
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
  btnRegister.classList.add("active");
  btnLogin.classList.remove("active");
});

// Simulación de envío (puedes conectarlo a backend después)
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Inicio de sesión exitoso (simulación)");
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Registro exitoso (simulación)");
})

                          