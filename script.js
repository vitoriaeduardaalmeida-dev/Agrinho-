// Garante que tudo carregou antes de usar
window.onload = function () {

  // BOTÃO MODO ESCURO
  let darkMode = false;
  const botao = document.getElementById("modoBtn");

  if (botao) {
    botao.onclick = function () {
      darkMode = !darkMode;
      document.body.classList.toggle("dark");

      botao.innerText = darkMode
        ? "☀️ Modo Claro"
        : "🌙 Modo Escuro";
    };
  }

};

// FUNÇÃO DO BOTÃO ENVIAR
function saudacao() {
  const nome = document.getElementById("nome");
  const saida = document.getElementById("saida");

  if (!nome || !saida) return;

  if (nome.value === "") {
    saida.innerText = "Digite seu nome!";
  } else {
    saida.innerText = "Olá, " + nome.value + "!";
  }
}
