// App de frases motivacionais

function createPhrases() {
  console.log("Estudar é muito bom");
  console.log("Paciência e persistência");
  console.log("Revisão é a mãe do aprendizado");
}

createPhrases();

// Atividades 1 transformar notas em grades

function tranformaNotas(nota) {
  grade = "";
  if (nota <= 60) {
    grade = "F";
  } else if (nota >= 60 && nota < 70) {
    grade = "D";
  } else if (nota >= 70 && nota < 80) {
    grade = "C";
  } else if (nota >= 80 && nota < 90) {
    grade = "B";
  } else {
    grade = "A";
  }
  return console.log(`Nota: ${grade}`);
}

tranformaNotas(89);
tranformaNotas(55);
tranformaNotas(70);
tranformaNotas(66);
tranformaNotas(91);

// Atividade 2 sistema de gastos familiares

function somatorio(tabela) {
  let soma = 0;

  for (let valor of tabela) {
    soma += valor;
  }

  return soma;
}

function dividaFamilia() {
  const dividas = somatorio(familia.despesas);
  const saldo = somatorio(familia.receita);

  const balanco = saldo - dividas;

  if (balanco > 0) {
    console.log(`Parabéns seu saldo está positivo! Saldo: ${balanco}`);
  } else {
    console.log(`Seu saldo está negativo! Saldo: ${balanco}`);
  }
}

let familia = {
  receita: [260, 30, 1200, 230, 420],
  despesas: [320.63, 128.65, 176.59, 1450.0],
};

dividaFamilia(familia);

// Atividade 3 Celsius para Fahrenheit - Farenheit para Celsius

function tranformaTemperatura(temp) {
  // checa se a entrada é celsius e com a presença do "C"
  const seForCelsius = temp.toUpperCase().includes("C");
  // checa se a entrada é farenheit e com a presença do "F"
  const seForFarenheit = temp.toUpperCase().includes("F");
  // checa se as a entrada enstá em algumas das esclaas especificadas
  // erro
  if (!seForCelsius && !seForFarenheit) {
    throw new Error("Escala não identificada!");
  }

  // transformar farenheit em celsius
  let novograu = Number(temp.toUpperCase().replace("F", ""));
  let calculo = (farenh) => ((farenh - 32) * 5) / 9;
  let simbolo = "C";

  // se for celsius for true
  // transforma celsius em farenheit
  if (seForCelsius) {
    novograu = Number(temp.toUpperCase().replace("C", ""));
    calculo = (celsius) => (celsius * 9) / 5 + 32;
    simbolo = "F";
  }

  // retorna o grau tranformado e o novo simbolo
  return calculo(novograu) + simbolo;
}

try {
  console.log(tranformaTemperatura("50F"));
  console.log(tranformaTemperatura("30C"));
  console.log(tranformaTemperatura("30Z"));
} catch (error) {
  console.log(error.message);
}

// Atividade 4 buscando e contando dados em arrays

const livrosPorCategoria = [
  {
    categoria: "Riqueza",
    livros: [
      {
        titulo: "Os segredos da mente milionária",
        autor: "T. Harv Eker",
      },
      {
        titulo: "O homem mais rico da Babilônia",
        autor: "George S. Clason",
      },
      {
        titulo: "Pai rico, pai pobre",
        autor: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    categoria: "Inteligencia Emocional",
    livros: [
      {
        titulo: "Você é Insubstituível",
        autor: "Augusto Cury",
      },
      {
        titulo: "Ansiedade - Como enfrentar o mal do século",
        autor: "Augusto Cury",
      },
      {
        titulo: "Os 7 hábitos das pessoas altamente eficazes",
        autor: "Stephen R. Covey",
      },
    ],
  },
];

const totalDeCategorias = livrosPorCategoria.length;
console.log("Total de categorias de livros: ", totalDeCategorias);

for (let categoria of livrosPorCategoria) {
  console.log("Total de livros da categoria: ", categoria.categoria);
  console.log(categoria.livros.length);
}

function contarAutores() {
  let autores = [];
  // percorre as categorias com o laço
  for (let categoria of livrosPorCategoria) {
    // dentro das categorias percorre os livros
    for (let livro of categoria.livros) {
      // se no livro houver autor o array autores recebe o autor
      if (autores.indexOf(livro.autor) == -1) {
        autores.push(livro.autor);
      }
    }
  }
  // imprime o tamanho do array autores
  console.log("Total de autores: ", autores.length);
}

contarAutores();

function contarLivrosDoAugusto() {
  let livrosDoAugusto = [];
  // percorre as categorias com o laço
  for (let categoria of livrosPorCategoria) {
    // dentro das categorias percorre os livros
    for (let livro of categoria.livros) {
      // se o autor do livro for o Augusto Cury o array livros do Augusto recebe o titulo do livro
      if (livro.autor == "Augusto Cury") {
        livrosDoAugusto.push(livro.titulo);
      }
    }
  }
  console.log("Livros do Augusto Cury: ");
  // imprime o array livrosDoAugusto
  livrosDoAugusto.forEach((livro) => {
    console.log(livro);
  });
}

contarLivrosDoAugusto();

function contarQualquerLivro(autor) {
  let livrosAutor = [];
  // percorre as categorias com o laço
  for (let categoria of livrosPorCategoria) {
    // dentro das categorias percorre os livros
    for (let livro of categoria.livros) {
      // se o autor do livro for o Augusto Cury o array livros do Augusto recebe o titulo do livro
      if (livro.autor == autor) {
        livrosAutor.push(livro.titulo);
      }
    }
  }
  // imprime o array livrosDoAugusto
  console.log("Livros do: ", autor);
  livrosAutor.forEach((livro) => {
    console.log(livro);
  });
}

contarQualquerLivro("T. Harv Eker");
contarQualquerLivro("George S. Clason");
contarQualquerLivro("Robert T. Kiyosaki e Sharon L. Lechter");
contarQualquerLivro("Stephen R. Covey");
