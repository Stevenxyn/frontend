/*
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):
https://prnt.sc/tS2pRvhMLfMN

const rps = (p1, p2) => {
};

scissors 
> paper 
< rock

rock
> scissors
< paper

paper
> rock
< scissors

*/
//Primera vez
const rps = (p1, p2) => {
  if (p1 == 'scissors' && p2 == 'paper') {
    return 'Player 1 won!'
  } else if (p1 == 'scissors' && p2 == 'rock') {
    return 'Player 2 won!'
  } else if (p1 == 'rock' && p2 == 'scissors') {
    return 'Player 1 won!'
  } else if (p1 == 'rock' && p2 == 'paper') {
    return 'Player 2 won!'
  } else if (p1 == 'paper' && p2 == 'scissors') {
    return 'Player 2 won!'
  } else if (p1 == 'paper' && p2 == 'rock') {
    return 'Player 1 won!'
  } else if (p2 == 'scissors' && p1 == 'paper') {
    return 'Player 2 won!'
  } else if (p2 == 'scissors' && p1 == 'rock') {
    return 'Player 1 won!';
  } else if (p2 == 'rock' && p1 == 'scissors') {
    return 'Player 2 won!'
  } else if (p2 == 'rock' && p1 == 'paper') {
    return 'Player 1 won!'
  } else if (p2 == 'paper' && p1 == 'scissors') {
    return 'Player 1 won!'
  } else if (p2 == 'paper' && p1 == 'rock') {
    return 'Player 2 won!'
  } else if (p1 == p2) {
    return 'Draw!';
  }
}
console.log(rps("scissors", "paper"));

//Segunda vez viendo mas resultados optimizados pero no tanto xd
function piedraPapelTijeraJuego(p1, p2) {
  if (p1 == "tijera" && p2 == "papel") {
    return "P1 Gana";
  } else if (p1 == "piedra" && p2 == "tijera"){
    return "P1 Gana";
  } else if (p1 == "papel" && p2 == "piedra"){
    return "P1 Gana";
  } else if (p1 == p2){
    return "Empate";
  } else {
    return "P2 Gana";
  }
}

console.log(piedraPapelTijeraJuego("piedra","papel"));
