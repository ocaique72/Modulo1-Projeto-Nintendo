function mapa1() {
  while (true) {
    let resposta = parseInt(prompt("Qual sua ação ?"));
    if (resposta == 1) {
      alert(
        "Game over! Peach nao conseguiu mata-lo e tomou dano. \n Tente novamente."
      );
      location.replace("../index.html");
      break;
    } else if (resposta == 2) {
      alert("Peach acerta em cheio e poderá continuar a sua aventura.");
      location.replace("./peach-fase2.html");
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
        "Peach conseguiu derruba-lo, tomar seu tapete voador e atravesar o buraco"
      );
      location.replace("./peach-fase3.html");
      break
    } else if (resposta == 2) {
      alert(
        "Game over! \n Peach não conseguiu flutuar o suficiente para atravesar o buraco."
      );
      location.replace("../index.html");
      break
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
        "Game Over ! A Dinossaura é muito forte para atacar diretamente \n Tente novamente. "
      );
      location.replace("../index.html");
    } else if (resposta == 2) {
      alert("A Dinossaura foi atingida na cabeça. \n Parabéns você venceu.");
      location.replace("../index.html");
      break
    } else {
      alert("Escolha uma resposta valida.");
    }
  }
}
