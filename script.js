// contador de ações sustentáveis
let total = 0;

function adicionarAcao() {
  total++;
  document.getElementById("contador").innerText = total;
}

// mostrar práticas
function mostrarPraticas() {
  const lista = document.getElementById("lista");

  if (lista.classList.contains("hidden")) {
    lista.classList.remove("hidden");
  } else {
    lista.classList.add("hidden");
  }
}

// mensagem personalizada
function mensagem() {
  let nome = document.getElementById("nome").value;

  if (nome === "") {
    document.getElementById("resposta").innerText = "Digite seu nome!";
  } else {
    document.getElementById("resposta").innerText =
      "Obrigado, " + nome + ", por apoiar o agro sustentável!";
  }
}

// modo escuro
let dark = false;

document.getElementById("temaBtn").addEventListener("click", () => {
  dark = !dark;
  document.body.classList.toggle("dark");
});
