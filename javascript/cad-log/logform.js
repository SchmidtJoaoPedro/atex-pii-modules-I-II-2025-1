document.getElementById("logform").addEventListener("submit", function(event) {
  event.preventDefault();

  const emailDigitado = document.getElementById("emailLogin").value;
  const senhaDigitada = document.getElementById("senhaLogin").value;

  // Recupera os dados do usuário cadastrado
  const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioCadastrado"));

  if (!usuarioSalvo) {
    alert("Nenhum usuário cadastrado.");
    return;
  }
  if (emailDigitado === usuarioSalvo.email && senhaDigitada === usuarioSalvo.senha) {
    alert("Login bem-sucedido!");
  } else {
    alert("E-mail ou senha incorretos.");
  }
});