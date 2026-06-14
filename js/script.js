// Calculadora de economia de água
function calcular() {
  const agua = Number(document.getElementById("agua").value);
  const resultado = document.getElementById("resultado");

  if (agua <= 0) {
    resultado.textContent = "Digite um valor válido de consumo mensal.";
    return;
  }

  const economia = agua * 0.3;

  resultado.textContent =
    "Com práticas sustentáveis você pode economizar aproximadamente " +
    economia.toFixed(0) +
    " litros por mês.";
}

// Correção do quiz
function corrigirQuiz() {
  let total = 0;

  document.querySelectorAll("input[type='radio']:checked").forEach(function (opcao) {
    total += Number(opcao.value);
  });

  document.getElementById("quizResultado").textContent =
    "Você acertou " + total + " de 3 questões!";
}

// Eventos dos botões
document.getElementById("btnCalcular").addEventListener("click", calcular);
document.getElementById("btnCorrigirQuiz").addEventListener("click", corrigirQuiz);