function mapa1() {
  while (true) {
    let resposta = parseInt(prompt("Qual sua ação ?"));
    if (resposta == 1) {
      alert("Game over! O martelo acertou o Luigi. \n Tente novamente.");
      location.replace("../index.html");
      break;
    } else if (resposta == 2) {
      alert("Luigi derrubou o voador e continuara sua aventura.");
      location.replace("./luigi-fase2.html");
      break;
    } else {
      alert("Escolha uma resposta valida.");
    }
  }
}

function mapa2() {
  while (true) {
    let resposta = parseInt(prompt("Qual sua ação ?"));
    if (resposta == 1) {
      alert(
        "Luigi fugiu dos fantasmas, ainda bem, porque não tem como atingi-los."
      );
      location.replace("./luigi-fase3.html");
      break;
    } else if (resposta == 2) {
      alert("Game over! \n Você morreu, nao tem como atingir os fantasmas");
      location.replace("../index.html");
      break;
    } else {
      alert("Escolha uma resposta valida.");
    }
  }
}

function mapa3() {
  while (true) {
    let resposta = parseInt(prompt("Qual sua ação ?"));
    if (resposta == 1) {
      alert("Game Over ! O casco da tartaruga o protegeu \n Tente novamente. ");
      location.replace("../index.html");
      break;
    } else if (resposta == 2) {
      alert("A tartaruga foi atingida na cabeça. \n Parabéns você venceu.");
      location.replace("../index.html");
      break;
    } else {
      alert("Escolha uma resposta valida.");
    }
  }
}
