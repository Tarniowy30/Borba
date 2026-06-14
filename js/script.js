document.addEventListener("DOMContentLoaded", function () {
  const campos = [
    {
      input: document.getElementById("agua"),
      valor: document.getElementById("valorAgua")
    },
    {
      input: document.getElementById("energia"),
      valor: document.getElementById("valorEnergia")
    },
    {
      input: document.getElementById("mata"),
      valor: document.getElementById("valorMata")
    },
    {
      input: document.getElementById("tecnologiaCampo"),
      valor: document.getElementById("valorTecnologia")
    },
    {
      input: document.getElementById("solo"),
      valor: document.getElementById("valorSolo")
    },
    {
      input: document.getElementById("agrotoxicos"),
      valor: document.getElementById("valorAgrotoxicos")
    }
  ];

  const btnCalcular = document.getElementById("btnCalcular");
  const btnResetar = document.getElementById("btnResetar");
  const resultadoSimulador = document.getElementById("resultadoSimulador");

  const btnCorrigirQuiz = document.getElementById("btnCorrigirQuiz");
  const btnLimparQuiz = document.getElementById("btnLimparQuiz");
  const resultadoQuiz = document.getElementById("resultadoQuiz");
  const formQuiz = document.getElementById("formQuiz");

  function atualizarValores() {
    campos.forEach(function (campo) {
      campo.valor.textContent = campo.input.value;
    });
  }
  const btnEventoSurpresa = document.getElementById("btnEventoSurpresa");
const eventoSurpresa = document.getElementById("eventoSurpresa");

const eventosDoCampo = [
  {
    titulo: "Seca prolongada",
    texto:
      "A fazenda enfrentou um período de pouca chuva. A irrigação inteligente e o uso consciente da água serão essenciais."
  },
  {
    titulo: "Chuva forte",
    texto:
      "A propriedade recebeu chuva intensa. A cobertura vegetal e o cuidado com o solo ajudam a evitar erosão."
  },
  {
    titulo: "Aparecimento de pragas",
    texto:
      "Foram encontrados sinais de pragas na plantação. O monitoramento com drones e sensores ajuda na identificação rápida."
  },
  {
    titulo: "Energia solar em alta",
    texto:
      "Os painéis solares tiveram ótimo rendimento. A fazenda economizou energia e reduziu impactos ambientais."
  },
  {
    titulo: "Sensor detectou solo seco",
    texto:
      "Os sensores indicaram baixa umidade no solo. A tecnologia ajuda o produtor a agir antes que a produção seja prejudicada."
  },
  {
    titulo: "Mutirão de preservação",
    texto:
      "A comunidade ajudou a recuperar uma área de mata. A preservação fortalece o equilíbrio entre produção e meio ambiente."
  }
];

function sortearEventoSurpresa() {
  const numeroSorteado = Math.floor(Math.random() * eventosDoCampo.length);
  const evento = eventosDoCampo[numeroSorteado];

  eventoSurpresa.className = "evento-destaque";
  eventoSurpresa.innerHTML = `
    <strong>Evento surpresa:</strong> ${evento.titulo}<br>
    ${evento.texto}
  `;
}

btnEventoSurpresa.addEventListener("click", sortearEventoSurpresa);

  campos.forEach(function (campo) {
    campo.input.addEventListener("input", atualizarValores);
  });

  function calcularMedia() {
    let soma = 0;

    campos.forEach(function (campo) {
      soma += Number(campo.input.value);
    });

    return Math.round(soma / campos.length);
  }

  function definirClassificacao(media) {
    if (media >= 85) {
      return {
        nome: "Excelente",
        classe: "excelente",
        impacto: "baixo impacto ambiental",
        economia: "alta economia de recursos",
        recomendacao:
          "A fazenda está muito sustentável. Continue mantendo a preservação da mata, o cuidado com o solo e o uso de tecnologia."
      };
    }

    if (media >= 70) {
      return {
        nome: "Boa",
        classe: "bom",
        impacto: "impacto ambiental moderado",
        economia: "boa economia de recursos",
        recomendacao:
          "A fazenda está no caminho certo. Para melhorar, aumente o uso de energia limpa e reduza desperdícios."
      };
    }

    if (media >= 50) {
      return {
        nome: "Regular",
        classe: "regular",
        impacto: "impacto ambiental em atenção",
        economia: "economia de recursos ainda limitada",
        recomendacao:
          "A fazenda precisa evoluir. Invista em irrigação inteligente, proteção do solo e preservação ambiental."
      };
    }

    return {
      nome: "Baixa",
      classe: "baixo",
      impacto: "alto risco ambiental",
      economia: "baixo aproveitamento dos recursos",
      recomendacao:
        "A sustentabilidade está baixa. É necessário rever o uso da água, proteger a mata e adotar tecnologias sustentáveis."
    };
  }

  function calcularSustentabilidade() {
    const media = calcularMedia();
    const resultado = definirClassificacao(media);

    resultadoSimulador.className = "resultado " + resultado.classe;

    resultadoSimulador.innerHTML = `
  <strong>Índice de sustentabilidade:</strong> ${media}%<br>
  <strong>Classificação:</strong> ${resultado.nome}<br>
  <strong>Impacto ambiental:</strong> ${resultado.impacto}<br>
  <strong>Economia de recursos:</strong> ${resultado.economia}<br>
  <strong>Recomendação:</strong> ${resultado.recomendacao}

  <div class="medidor-sustentabilidade">
    <div class="barra-sustentabilidade" style="width: ${media}%;"></div>
  </div>

  <span class="selo-resultado">
    Fazenda com sustentabilidade ${resultado.nome}
  </span>

  <div class="check-final">
    <strong>Resumo:</strong><br>
    Quanto maior o equilíbrio entre água, energia limpa, preservação, tecnologia,
    solo e redução de agrotóxicos, maior será o potencial sustentável da fazenda.
  </div>
`;
    `;
  }

  function resetarSimulador() {
    const valoresIniciais = [60, 50, 55, 50, 60, 45];

    campos.forEach(function (campo, index) {
      campo.input.value = valoresIniciais[index];
    });

    atualizarValores();

    resultadoSimulador.className = "resultado";
    resultadoSimulador.innerHTML =
      "Ajuste os valores e clique no botão para ver o resultado.";
  }

  btnCalcular.addEventListener("click", calcularSustentabilidade);
  btnResetar.addEventListener("click", resetarSimulador);

  function corrigirQuiz() {
    const perguntas = ["q1", "q2", "q3", "q4", "q5", "q6"];
    let pontos = 0;
    let respondidas = 0;

    perguntas.forEach(function (pergunta) {
      const respostaSelecionada = document.querySelector(
        `input[name="${pergunta}"]:checked`
      );

      if (respostaSelecionada) {
        respondidas++;

        if (respostaSelecionada.value === "correto") {
          pontos++;
        }
      }
    });

    if (respondidas < perguntas.length) {
      resultadoQuiz.className = "resultado regular";
      resultadoQuiz.innerHTML =
        "<strong>Atenção:</strong> responda todas as perguntas antes de corrigir o quiz.";
      return;
    }

    let mensagem = "";

    if (pontos === 6) {
      mensagem = "Excelente! Você compreende muito bem o agro sustentável.";
      resultadoQuiz.className = "resultado excelente";
    } else if (pontos >= 4) {
      mensagem = "Muito bom! Você está no caminho certo.";
      resultadoQuiz.className = "resultado bom";
    } else if (pontos >= 2) {
      mensagem = "Bom começo! Ainda é possível aprender mais.";
      resultadoQuiz.className = "resultado regular";
    } else {
      mensagem =
        "Continue estudando. O campo sustentável depende de escolhas conscientes.";
      resultadoQuiz.className = "resultado baixo";
    }

    resultadoQuiz.innerHTML = `
      <strong>Resultado:</strong> você acertou ${pontos} de ${perguntas.length} perguntas.<br>
      ${mensagem}
      <br><br>
      <strong>Aprendizado:</strong><br>
      💧 A irrigação inteligente ajuda a economizar água.<br>
      ☀️ A energia solar reduz impactos ambientais.<br>
      📡 Sensores ajudam o produtor a tomar decisões com dados.<br>
      🌱 A cobertura vegetal e a rotação de culturas protegem o solo.<br>
      🚁 Drones auxiliam no monitoramento das plantações.<br>
      🌎 Uma fazenda sustentável equilibra produção, tecnologia e preservação.
    `;
  }

  function limparQuiz() {
    formQuiz.reset();

    resultadoQuiz.className = "resultado";
    resultadoQuiz.innerHTML =
      "Responda às perguntas e clique em corrigir.";
  }

  btnCorrigirQuiz.addEventListener("click", corrigirQuiz);
  btnLimparQuiz.addEventListener("click", limparQuiz);

  atualizarValores();
});