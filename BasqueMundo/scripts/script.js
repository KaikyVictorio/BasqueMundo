const cardsContainer = document.getElementById('container-west');

const cards = [
  { nome:"Golden State Warrios", img: "./assets/gswlogo.jpg", texto: "Liderado pelo icônico armador Stephen Curry, o time revolucionou o basquete com seu estilo de jogo baseado em arremessos de três pontos. Eles consolidaram uma dinastia no século XXI, conquistando múltiplos títulos e dominando a liga por anos." },
  { nome:"Los Angeles Lakers", img: "./assets/lakerslogo.jpg", texto: "A franquia mais vitoriosa do Oeste, ostentando inúmeros títulos e lendas históricas. Liderado por LeBron James, busca manter a tradição de sucesso e dominação na liga." }, 
  { nome:"Denver Nuggets", img: "./assets/nuggetslogo.jpeg", texto: "são liderados pelo talento singular do pivô Nikola Jokic, duas vezes MVP da liga. Possuem um ataque metódico e eficiente, sendo o time a ser batido no Oeste." }, 
  { nome:"Minnesota Timberwolves", img: "./assets/timberwolveslogo.png", texto: "Uma equipe alta e fisicamente imponente, apoiada na dupla de pivôs e na ascensão de Anthony Edwards. Buscam transformar seu potencial defensivo e atlético em um sucesso consistente nos playoffs." }, 
  { nome:"Oklahoma Thunder City", img: "./assets/okclogo.jpeg", texto: "Um dos elencos mais jovens e promissores da liga, centralizado no talento do armador All-Star Shai Gilgeous-Alexander. Contam com escolhas de draft futuras para construir uma nova dinastia vencedora." }, 
  { nome:"Utah Jazz", img: "./assets/jazzlogo.png", texto: "Em fase de reconstrução, a equipe aposta em jovens talentos e peças promissoras após desfazer seu núcleo veterano. Priorizam o desenvolvimento e buscam surpreender com sua ética de trabalho e sistema de jogo." }, 
  { nome:"Sacramento Kings", img: "./assets/kingslogo.png", texto: "Um time jovem e empolgante que joga em ritmo acelerado, sendo guiado pela dupla Fox e Sabonis. Tentam se consolidar como força da Conferência, após anos de ausência nos playoffs." }, 
  { nome:"LA Clippers", img: "./assets/clipperslogo.png", texto: "Conhecidos pela sua profundidade de elenco e defesa forte, buscam superar o histórico de lesões e decepções nos playoffs. A dupla de astros tem a missão de levar o time ao seu primeiro anel." }, 
  { nome:"Phoenix Suns", img: "./assets/sunlogo.jpeg", texto: "Uma equipe montada para vencer imediatamente, contando com um trio ofensivo de estrelas talentosas. Buscam a redenção e o tão sonhado primeiro título da franquia na NBA." }, 
  { nome:"Portland Trail Blazers", img: "./assets/blazerslogo.png", texto: "Em uma nova era após a saída de sua principal estrela, a franquia investe em jovens atletas para reestruturar seu futuro. Estão focados em paciência e desenvolvimento para construir um time competitivo a longo prazo." }, 
  { nome:"Dallas Maverick", img: "./assets/dallaslogo.png", texto: "Centralizado no armador All-Star Kyrie Irving, o time agora conta com o poder defensivo e ofensivo de Anthony Davis. Buscam reestruturar a equipe com novas estrelas e um foco renovado em ambas as extremidades da quadra." }, 
  { nome:"Memphis Grizzlies", img: "./assets/grizzlieslogo.png", texto: "Famosos por seu estilo físico e agressivo, conhecido como Grit and Grind moderno, o time aposta na força de seu jovem núcleo. Buscam recuperar o ritmo de candidato após lidarem com ausências de jogadores chave." }, 
  { nome:"New Orleans Pelicans", img: "./assets/pelicanslogo.jpg", texto: "Com uma mistura de profundidade e potencial explosivo, dependem da saúde de Zion Williamson para atingir seu potencial máximo. Tentam juntar todas as peças para se tornar uma ameaça constante nos playoffs do Oeste." }, 
  { nome:"Houston Rockets", img: "./assets/rocketslogo.png", texto: "Após uma reconstrução, a equipe está recheada de jovens atletas atléticos e com alto potencial ofensivo. Adicionaram veteranos importantes para guiar o desenvolvimento e acelerar o retorno à competitividade." }, 
  { nome:"San Antonio Spurs", img: "./assets/spurslogo.png", texto: "Sob a liderança do lendário técnico Gregg Popovich, a equipe inicia uma nova era promissora com Victor Wembanyama. Estão focados no desenvolvimento paciente do seu novo astro para reviver os anos de glória." }, 
];

cards.forEach(card => {
  const cardHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${card.img}" class="card-img-top" alt="Imagem do card">
      <div class="card-body">
        <h3 class="gsw-name">${card.nome}</h3>
        <p class="card-text">${card.texto}</p>
      </div>
    </div>
  `;
  cardsContainer.innerHTML += cardHTML;
});
