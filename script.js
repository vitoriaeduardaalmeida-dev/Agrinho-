// Confirma que o JS carregou
console.log("JS OK");

// Espera carregar tudo
window.onload = function () {

  const botao = document.getElementById("modoBtn");

  if (botao) {
    botao.onclick = function () {
      document.body.classList.toggle("dark");
    };
  }

};

// Botão enviar
function saudacao() {
  const nome = document.getElementById("nome");
  const saida = document.getElementById("saida");

  if (!nome || !saida) return;

  if (nome.value === "") {
    saida.innerText = "Digite seu nome!";
  } else {
    saida.innerText = "Olá, " + nome.value + "!";
    document.addEventListener('DOMContentLoaded', () => {
    // Coloque aqui as funções dos seus botões
    console.log("O script carregou e os botões estão prontos!");
});
  }
}
