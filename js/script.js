// Navegação atual sublinhada
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href; //Encontra o link da página atual
  const href = link.href; //Encontra os links de .header-menu a

  if (url.includes(href)) {
    //Verifica se existe o conteúdo de href dentro da String url
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

// Ativar opções prévias no Orçamento.html
const parametroLink = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametroLink.forEach(ativarProduto);

// ------> PERGUNTAS FREQUENTES
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget; // captura qual a pergunta que o usuário está clicando
  const controls = pergunta.getAttribute("aria-controls"); // procura no elemento clicado qual o valor de aria-controls, afim de identificá-lo
  const resposta = document.getElementById(controls); // como o valor de aria-controls é o mesmo de ID, é possível associar estes dois valores para ligar a função

  resposta.classList.toggle("ativa");

  const verificarAtiva = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", true);
}

function eventosPerguntas(perguntaAtual) {
  perguntaAtual.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// ------> GALERIA DE IMAGENS MENU COMPRAR
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galariaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const tamanhoTela = window.matchMedia("(min-width: 1000px)").matches; //Verifica o tamanho da tela e o .matches é o operador lógico
  if (tamanhoTela) {
    galariaContainer.prepend(img); // função que remove um elemento de sua posição e adiciona onde o usuário clicar (e estiver dentro do parâmetro de possíveis mudanças, claro)
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// PLUGIN ANIMAR
if (window.SimpleAnime) {
  new SimpleAnime();
}
