// Confirma que o JS carregou
console.log("JS OK");

// Espera carregar tudo
window.onload = function () {
    // Corrigido para "temaBtn", que é o ID no HTML
    const botao = document.getElementById("temaBtn");

    if (botao) {
        botao.onclick = function () {
            document.body.classList.toggle("dark");
        };
    }
};

// Botão enviar (Corrigido para o nome mensagem() que está no HTML)
function mensagem() {
    const nomeInput = document.getElementById("nome");
    const saida = document.getElementById("resposta"); // Corrigido de "saida" para "resposta"

    if (!nomeInput || !saida) return;

    if (nomeInput.value.trim() === "") {
        saida.innerText = "Por favor, digite seu nome!";
    } else {
        saida.innerText = "Olá, " + nomeInput.value + "! Agradecemos o contato.";
    }
}

// Função para o contador de ações (que você tem no HTML)
let Cliques = 0;
function adicionarAção() {
    Cliques++;
    const contador = document.getElementById("contador");
    if (contador) {
        contador.innerText = Cliques;
    }
}

// Função para mostrar as práticas
function mostrarPráticas() {
    const lista = document.getElementById("lista");
    if (lista) {
        lista.classList.toggle("escondido");
    }
}
