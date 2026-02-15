/**
 * Validação e processamento do formulário de login
 */
document.getElementById("logform").addEventListener("submit", function(event) {
  event.preventDefault();

  const emailInput = document.getElementById("emailLogin");
  const senhaInput = document.getElementById("senhaLogin");
  const emailDigitado = emailInput.value.trim();
  const senhaDigitada = senhaInput.value;

  // Validações básicas
  if (!emailDigitado || !senhaDigitada) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Recupera os dados do usuário cadastrado
  try {
    const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioCadastrado"));

    if (!usuarioSalvo) {
      alert("Nenhum usuário cadastrado. Por favor, faça seu cadastro primeiro.");
      window.location.href = "cadform.html";
      return;
    }

    if (emailDigitado === usuarioSalvo.email && senhaDigitada === usuarioSalvo.senha) {
      alert("Login bem-sucedido! Bem-vindo ao Go!Recycle.");
      // Salva o status de login
      sessionStorage.setItem("userLoggedIn", "true");
      sessionStorage.setItem("userEmail", emailDigitado);
      window.location.href = "index.html";
    } else {
      alert("E-mail ou senha incorretos. Por favor, tente novamente.");
      senhaInput.value = "";
      senhaInput.focus();
    }
  } catch (error) {
    console.error("Erro ao processar login:", error);
    alert("Ocorreu um erro ao processar seu login. Por favor, tente novamente.");
  }
});