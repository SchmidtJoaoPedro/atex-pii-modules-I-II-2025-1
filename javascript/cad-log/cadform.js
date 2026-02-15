/**
 * Validação e processamento do formulário de cadastro
 */
document.getElementById("cadform").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const email = emailInput.value.trim();
    const senha = senhaInput.value;

    // Validações
    if (!validateEmail(email)) {
        alert("Por favor, insira um email válido.");
        emailInput.focus();
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres.");
        senhaInput.focus();
        return;
    }

    const novoUsuario = {
        email: email,
        senha: senha,
        dataCadastro: new Date().toISOString()
    };

    console.log("Usuário cadastrado:", JSON.stringify(novoUsuario));
    
    try {
        localStorage.setItem("usuarioCadastrado", JSON.stringify(novoUsuario));
        alert("Cadastro realizado com sucesso! Você será redirecionado para a página de login.");
        window.location.href = "form.html";
    } catch (error) {
        console.error("Erro ao salvar cadastro:", error);
        alert("Ocorreu um erro ao processar seu cadastro. Por favor, tente novamente.");
    }
});

/**
 * Valida formato de email
 * @param {string} email - Email a ser validado
 * @returns {boolean} - Retorna true se válido
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}