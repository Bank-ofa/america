document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (!loginForm) return;

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var emailInput    = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    if (!emailInput || !passwordInput) return;

    var email    = emailInput.value.trim().toLowerCase();
    var password = passwordInput.value.trim();

    if (typeof usuarios === "undefined") {
      alert("Error: data.js no fue cargado. Verifica el orden de los scripts.");
      return;
    }

    var usuario = null;
    for (var i = 0; i < usuarios.length; i++) {
      var u = usuarios[i];
      if (u && u.email && u.email.trim().toLowerCase() === email) {
        usuario = u;
        break;
      }
    }

    var passOk = usuario && String(usuario.password).trim() === password;

    if (usuario && passOk) {
      localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
      window.location.href = "Cuenta.html";
    } else {
      alert("Correo o contrasena incorrectos.");
    }
  });
});
