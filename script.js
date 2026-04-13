function mostrarImpacto() {
  const impacto = [
    "Redução de até 30% no uso de água",
    "Diminuição da emissão de carbono",
    "Aumento da produtividade sustentável",
    "Preservação da biodiversidade"
  ];

  let lista = "<ul>";
  impacto.forEach(item => {
    lista += `<li>${item}</li>`;
  });
  lista += "</ul>";

  document.getElementById("resultado").innerHTML = lista;
}

function enviarFormulario(event) {
  event.preventDefault();
  document.getElementById("mensagem").innerText = "Mensagem enviada com sucesso!";
}
