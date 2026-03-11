document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (!loginForm) return;

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput    = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (!emailInput || !passwordInput) return;

    const email    = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value.trim();

    if (typeof usuarios === "undefined") {
      alert("Error interno: datos no cargados.");
      return;
    }

    const usuario = usuarios.find(function (user) {
      if (!user || !user.email) return false;
      return String(user.email).trim().toLowerCase() === email;
    });

    const passOk = usuario && String(usuario.password).trim() === String(password).trim();

    if (usuario && passOk) {
      localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
      window.location.href = "Cuenta.html";
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  });
});
