// ===============================
// Projeto Borba - Agrinho 2026
// JavaScript principal
// ===============================

// Espera o HTML carregar completamente
document.addEventListener("DOMContentLoaded", function () {
  // Elementos do simulador
  const agua = document.getElementById("agua");
  const energia = document.getElementById("energia");
  const mata = document.getElementById("mata");
  const tecnologiaCampo = document.getElementById("tecnologiaCampo");

  const valorAgua = document.getElementById("valorAgua");
  const valorEnergia = document.getElementById("valorEnergia");
  const valorMata = document.getElementById("valorMata");
  const valorTecnologia = document.getElementById("valorTecnologia");

  const btnCalcular = document.getElementById("btnCalcular");
  const resultadoSimulador = document.getElementById("resultadoSimulador");

  // Elementos do quiz
  const btnCorrigirQuiz = document.getElementById("btnCorrigirQuiz");
  const resultadoQuiz = document.getElementById("resultadoQuiz");

  // Atualiza os números dos controles do simulador
  function atualizarValores() {
    valorAgua.textContent = agua.value;
    valorEnergia.textContent = energia.value;
    valorMata.textContent = mata.value;
    valorTecnologia.textContent = tecnologiaCampo.value;
  }

  agua.addEventListener("input", atualizarValores);
  energia.addEventListener("input", atualizarValores);
  mata.addEventListener("input", atualizarValores);
  tecnologiaCampo.addEventListener("input", atualizarValores);

  // Calcula a sustentabilidade da fazenda
  function calcularSustentabilidade() {
    const notaAgua = Number(agua.value);
    const notaEnergia = Number(energia.value);
    const notaMata = Number(mata.value);
    const notaTecnologia = Number(tecnologiaCampo.value);

    const media = Math.round(
      (notaAgua + notaEnergia + notaMata + notaTecnologia) / 4
    );

    let classificacao = "";
    let recomendacao = "";

    if (media >= 85) {
      classificacao = "Excelente";
      recomendacao =
        "Sua fazenda está muito sustentável. Continue investindo em tecnologia, preservação e uso consciente dos recursos naturais.";
    } else if (media >= 70) {
      classificacao = "Boa";
      recomendacao =
        "Sua fazenda está no caminho certo. Para melhorar ainda mais, aumente a preservação ambiental e reduza desperdícios.";
    } else if (media >= 50) {
      classificacao = "Regular";
      recomendacao =
        "Sua fazenda precisa de melhorias. Invista em irrigação inteligente, energia limpa e cuidado com o solo.";
    } else {
      classificacao = "Baixa";
      recomendacao =
        "A sustentabilidade está baixa. É importante repensar o uso da água, proteger a mata e usar mais tecnologia no campo.";
    }

    resultadoSimulador.innerHTML = `
      <strong>Índice de sustentabilidade:</strong> ${media}%<br>
      <strong>Classificação:</strong> ${classificacao}<br>
      <strong>Recomendação:</strong> ${recomendacao}
    `;
  }

  btnCalcular.addEventListener("click", calcularSustentabilidade);

  // Corrige o quiz
  function corrigirQuiz() {
    const respostas = ["q1", "q2", "q3", "q4"];
    let pontos = 0;
    let perguntasRespondidas = 0;

    respostas.forEach(function (pergunta) {
      const respostaSelecionada = document.querySelector(
        `input[name="${pergunta}"]:checked`
      );

      if (respostaSelecionada) {
        perguntasRespondidas++;

        if (respostaSelecionada.value === "correto") {
          pontos++;
        }
      }
    });

    if (perguntasRespondidas < respostas.length) {
      resultadoQuiz.innerHTML = `
        <strong>Atenção:</strong> responda todas as perguntas antes de corrigir o quiz.
      `;
      return;
    }

    let mensagem = "";

    if (pontos === 4) {
      mensagem = "Excelente! Você entende muito bem sobre agro sustentável.";
    } else if (pontos === 3) {
      mensagem = "Muito bom! Você está no caminho certo.";
    } else if (pontos === 2) {
      mensagem = "Bom começo! Ainda dá para aprender mais sobre sustentabilidade.";
    } else {
      mensagem =
        "Continue estudando. O campo sustentável depende de escolhas conscientes.";
    }

    resultadoQuiz.innerHTML = `
      <strong>Resultado:</strong> você acertou ${pontos} de ${respostas.length} perguntas.<br>
      ${mensagem}
      <br><br>
      <strong>Aprendizado:</strong><br>
      - A irrigação inteligente ajuda a economizar água.<br>
      - A energia solar reduz impactos ambientais.<br>
      - Sensores ajudam o produtor a tomar decisões com dados.<br>
      - A cobertura vegetal e a rotação de culturas protegem o solo.
    `;
  }

  btnCorrigirQuiz.addEventListener("click", corrigirQuiz);

  // Inicializa os valores na tela
  atualizarValores();
});