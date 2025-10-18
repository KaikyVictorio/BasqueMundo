const cardsContainer = document.getElementById('container-west');
const allCardBody = document.querySelectorAll(".card-body")
const cardsContainerEast = document.getElementById('container-east');
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

const cardsEast = [
  { nome:"Boston Celtics", img: "./assets/celticslogo.png", texto: "Com Tatum e Brown, são uma das forças mais equilibradas e históricas da liga." },
  { nome:"Milwaukee Bucks", img: "./assets/buckslogo.png", texto: "Guiados por Giannis Antetokounmpo, combinam força, defesa e consistência." },
  { nome:"Miami Heat", img: "./assets/heatlogo.png", texto: "Conhecidos por sua cultura de esforço e disciplina sob Erik Spoelstra e Jimmy Butler." },
  { nome:"Philadelphia 76ers", img: "./assets/sixerslogo.png", texto: "Joel Embiid é o coração do time, buscando finalmente alcançar as finais." },
  { nome:"Cleveland Cavaliers", img: "./assets/cavslogo.png", texto: "Com Donovan Mitchell e jovens talentos, são uma potência emergente." },
  { nome:"New York Knicks", img: "./assets/knickslogo.png", texto: "Tradicional franquia que busca reviver seus dias de glória em Nova York." },
  { nome:"Brooklyn Nets", img: "./assets/netslogo.png", texto: "Após reestruturação, aposta em jovens e versatilidade para o futuro." },
  { nome:"Indiana Pacers", img: "./assets/pacerslogo.png", texto: "Tyrese Haliburton lidera um ataque veloz e criativo no Leste." },
  { nome:"Atlanta Hawks", img: "./assets/hawkslogo.png", texto: "Trae Young é o maestro de um ataque dinâmico e de alta pontuação." },
  { nome:"Chicago Bulls", img: "./assets/bullslogo.png", texto: "Histórico time de Jordan busca consistência com DeRozan e LaVine." },
  { nome:"Toronto Raptors", img: "./assets/raptorslogo.png", texto: "Em reconstrução, mantém foco em jovens talentos e desenvolvimento tático." },
  { nome:"Orlando Magic", img: "./assets/magiclogo.png", texto: "Elenco jovem e atlético, liderado por Paolo Banchero." },
  { nome:"Charlotte Hornets", img: "./assets/hornetslogo.png", texto: "LaMelo Ball guia um time empolgante, mas ainda em amadurecimento." },
  { nome:"Washington Wizards", img: "./assets/wizardslogo.png", texto: "Após mudanças, focam em reconstruir com paciência e draft picks." },
  { nome:"Detroit Pistons", img: "./assets/pistonslogo.png", texto: "Time jovem liderado por Cade Cunningham, com foco em evolução gradual." },
];

function renderCards(cards, container) {
  cards.forEach((card, index) => {
    const cardHTML = `
      <div class="card" style="width: 16rem;">
        <img src="${card.img}" alt="${card.nome}" class="card-img-top">
        <div class="card-body">
          <h3 class="team-name">${card.nome}</h3>
          <p class="card-text">${card.texto}</p>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// ======== RENDERIZAÇÃO ======== //
renderCards(cards, cardsContainer);
renderCards(cardsEast, cardsContainerEast);