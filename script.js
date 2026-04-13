// Espera o HTML carregar antes de executar
document.addEventListener("DOMContentLoaded", function () {

  let darkMode = false;

  const botao = document.getElementById("modoBtn");

  // Alternar modo escuro
  botao.addEventListener("click", function () {
    darkMode = !darkMode;
    document.body.classList.toggle("dark");

    botao.innerText = darkMode
      ? "☀️ Modo Claro"
      : "🌙 Modo Escuro";
  });

});

// Função de saudação (usa variável)
function saudacao() {
  let nome = document.getElementById("nome").value;

  if (nome === "") {
    document.getElementById("saida").innerText = "Digite seu nome!";
  } else {
    document.getElementById("saida").innerText =
      "Olá, " + nome + "!";
  }
}
