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
  
  }
}
