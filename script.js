// MODO ESCURO

const temaBtn = document.getElementById("tema-btn");

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

// ACESSIBILIDADE

let tamanhoFonte = 16;

const aumentarFonte = document.getElementById("aumentar-fonte");

const diminuirFonte = document.getElementById("diminuir-fonte");

aumentarFonte.addEventListener("click", () => {

    tamanhoFonte += 2;

    document.documentElement.style.setProperty(
        "--fonte-base",
        tamanhoFonte + "px"
    );

});

diminuirFonte.addEventListener("click", () => {

    if(tamanhoFonte > 10){

        tamanhoFonte -= 2;

        document.documentElement.style.setProperty(
            "--fonte-base",
            tamanhoFonte + "px"
        );

    }

});

// LEITURA POR VOZ

const lerPagina = document.getElementById("ler-pagina");

const pararLeitura = document.getElementById("parar-leitura");

const sintetizador = window.speechSynthesis;

lerPagina.addEventListener("click", () => {

    sintetizador.cancel();

    const conteudo = document.getElementById(
        "conteudo-principal"
    ).innerText;

    const fala = new SpeechSynthesisUtterance(conteudo);

    fala.lang = "pt-BR";

    fala.rate = 1;

    sintetizador.speak(fala);

});

pararLeitura.addEventListener("click", () => {

    sintetizador.cancel();

});
