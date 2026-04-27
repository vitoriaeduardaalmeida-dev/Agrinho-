alert("JS funcionando!");
// Garante que o HTML carregou
window.onload = function () {

  // BOTÃO MODO ESCURO
  let darkMode = false;
  const botao = document.getElementById("modoBtn");

  botao.onclick = function () {
    darkMode = !darkMode;

    document.body.classList.toggle("dark");

    botao.innerText = darkMode
      ? "☀️ Modo Claro"
      : "🌙 Modo Escuro";
  };

};

// FUNÇÃO DO BOTÃO ENVIAR
function saudacao() {
  const nome = document.getElementById("nome").value;
  const saida = document.getElementById("saida");

  if (!nome) {
    saida.innerText = "Digite seu nome!";
  } else {
    saida.innerText = "Olá, " + nome + "!";
  }
}
