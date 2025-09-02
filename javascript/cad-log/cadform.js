document.getElementById("cadform").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const novoUsuario = {
        email: email,
        senha: senha
    };

    console.log("Usuário cadastrado:", JSON.stringify(novoUsuario));
    localStorage.setItem("usuarioCadastrado", JSON.stringify(novoUsuario));
    alert("Cadastro realizado com sucesso!");
});