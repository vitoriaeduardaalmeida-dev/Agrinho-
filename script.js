document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // MODO ESCURO
    // ==========================

    const temaBtn = document.getElementById("tema-btn");

    if (temaBtn) {

        temaBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                temaBtn.textContent = "☀️";
            } else {
                temaBtn.textContent = "🌙";
            }

        });

    }

    // ==========================
    // TAMANHO DA FONTE
    // ==========================

    let tamanhoFonte = 16;

    const aumentarFonte = document.getElementById("aumentar-fonte");
    const diminuirFonte = document.getElementById("diminuir-fonte");

    if (aumentarFonte) {

        aumentarFonte.addEventListener("click", () => {

            tamanhoFonte += 2;

            document.documentElement.style.setProperty(
                "--fonte-base",
                tamanhoFonte + "px"
            );

        });

    }

    if (diminuirFonte) {

        diminuirFonte.addEventListener("click", () => {

            if (tamanhoFonte > 10) {

                tamanhoFonte -= 2;

                document.documentElement.style.setProperty(
                    "--fonte-base",
                    tamanhoFonte + "px"
                );

            }

        });

    }

    // ==========================
    // LEITURA POR VOZ
    // ==========================

    const lerPagina = document.getElementById("ler-pagina");
    const pararLeitura = document.getElementById("parar-leitura");

    if (lerPagina) {

        lerPagina.addEventListener("click", () => {

            window.speechSynthesis.cancel();

            const conteudo =
                document.getElementById("conteudo-principal");

            if (conteudo) {

                const texto = conteudo.innerText;

                const fala =
                    new SpeechSynthesisUtterance(texto);

                fala.lang = "pt-BR";
                fala.rate = 1;
                fala.pitch = 1;
                fala.volume = 1;

                window.speechSynthesis.speak(fala);

            }

        });

    }

    if (pararLeitura) {

        pararLeitura.addEventListener("click", () => {

            window.speechSynthesis.cancel();

        });

    }

    // ==========================
    // FORMULÁRIO
    // ==========================

    const formulario =
        document.querySelector("form");

    if (formulario) {

        formulario.addEventListener("submit", (e) => {

            e.preventDefault();

            alert(
                "Mensagem enviada com sucesso! 🌱"
            );

            formulario.reset();

        });

    }

    // ==========================
    // SCROLL SUAVE
    // ==========================

    const links =
        document.querySelectorAll('nav a');

    links.forEach(link => {

        link.addEventListener("click", (e) => {

            e.preventDefault();

            const destino =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (destino) {

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});
