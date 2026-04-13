// Variável global para modo escuro
let darkMode = false;

// Função para alternar modo escuro
document.getElementById("modoBtn").addEventListener("click", () => {
  darkMode = !darkMode;

  document.body.classList.toggle("dark");

  document.getElementById("modoBtn").innerText =
    darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro";
});

// Função com variável (nome do usuário)
function saudacao() {
  let nome = document.getElementById("nome").value;

  if (nome === "") {
    document.getElementById("saida").innerText = "Digite um nome!";
  } else {
    document.getElementById("saida").innerText =
      "Olá, " + nome + "! Vamos construir um agro sustentável.";
  }
}

// Função de envio de formulário
function enviar(event) {
  event.preventDefault();

  document.getElementById("status").innerText =
    "Mensagem enviada com sucesso!";
}
