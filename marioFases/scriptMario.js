function mapa1() {
  while (true) {
    let resposta = parseInt(prompt("Qual sua ação ?"));
    if (resposta == 2) {
      alert("Você amassou o dino e passou para a proxima fase.");
      location.replace("./fase2.html");
      break;
    } else if (resposta == 1) {
      alert("Game over! o dino te matou. \n Tente novamente!");
      location.replace("../index.html");
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
      alert("Mario passou ileso pela Bala, e continuara a sua aventura.");
      location.replace("./fase3.html");
      break;
    } else if (resposta == 2) {
      alert(
        "Gamer over! a Bala foi mais rapido e o atingiu. \n Tente novamente!"
      );
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
      alert(
        "Game Over !A bolinha de fogo não foi o suficiente para vence-la \n Tente novamente. "
      );
      location.replace("../index.html");
      break;
    } else if (resposta == 2) {
      alert("A tartaruga caiu no fogo. \n Parabéns você venceu.");
      location.replace("../index.html");
      break;
    } else {
      alert("Escolha uma resposta valida.");
    }
  }
}
