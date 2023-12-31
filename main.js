const home = document.querySelector(".home");
const messageScreen = document.querySelector(".messageScreen");
const resetCookieButton = document.querySelector(".resetCookieButton");
const fortuneCookie = document.querySelector(".fortuneCookie");
const fortuneCookieMessage = document.querySelector(".fortuneCookieMessage");

const phrases = [
  "A solução que procuras nem sempre é uma resposta... pode ser a própria pergunta",
  "É preciso coragem para fazer a travessia.",
  "Use os números com sabedoria: 11 24 30 35 44 54",
  "O sucesso está à porta, basta abrir com confiança.",
  "Seja a mudança que você deseja ver no mundo – e comece com um sorriso!",
  "A jornada de mil milhas começa com um simples passo. O seu próximo passo está próximo.",
  "A sorte favorece os audazes. Arrisque-se e colha os frutos da coragem.",
  "Acredite no poder dos seus sonhos, pois eles são a chave para um futuro brilhante.",
  "A paciência é uma virtude. Grandes conquistas demandam tempo e esforço.",
  "A cada dificuldade, surge uma oportunidade. Enxergue o positivo nas adversidades.",
  "Cada momento é uma dádiva.",
  "A amizade é o maior tesouro da vida. Cultive boas relações e verá sua fortuna crescer.",
  "O otimismo é o sol da alma. Deixe sua luz brilhar e ilumine o caminho para o sucesso.",
  "O amor é a resposta para todas as perguntas. Ame mais e veja como a vida se transforma.",
  "A felicidade está dentro de você. Encontre-a, cultive-a e compartilhe-a com o mundo.",
  "Não tema os desafios, pois cada obstáculo é uma oportunidade disfarçada.",
  "O sorriso é a chave mestra que abre todas as portas. Mantenha-o sempre por perto.",
  "Siga seu coração, ele conhece o caminho para a realização dos seus sonhos.",
];

fortuneCookie.addEventListener("click", drawPhrase);
resetCookieButton.addEventListener("click", handleToggleScreen);

function handleToggleScreen() {
  home.classList.toggle("hide");
  messageScreen.classList.toggle("hide");
}

function drawPhrase() {
  handleToggleScreen();
  fortuneCookieMessage.innerText =
    phrases[Math.round(Math.random(Math.random()) * (phrases.length - 1))];
}
