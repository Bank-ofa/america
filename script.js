document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");
  if (!loginForm) return;

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var emailInput    = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    if (!emailInput || !passwordInput) return;

    var email    = emailInput.value.trim().toLowerCase();
    var password = passwordInput.value.trim();

    if (typeof usuarios === "undefined" || !usuarios) {
      alert("Error: data.js no fue cargado correctamente.");
      return;
    }

    var usuario = null;
    for (var i = 0; i < usuarios.length; i++) {
      if (usuarios[i] && usuarios[i].email &&
          usuarios[i].email.trim().toLowerCase() === email) {
        usuario = usuarios[i];
        break;
      }
    }

    if (usuario && String(usuario.password).trim() === password) {
      localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
      window.location.href = "Cuenta.html";
    } else {
      alert("Correo o contrasena incorrectos.");
    }
  });
});
