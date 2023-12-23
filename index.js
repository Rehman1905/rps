var x=0
var y=0
function bextiniSina(player1, player2) {
  comChoose()
  qalibGelen()
  hesabNecedir()
}
function comChoose(){
  player1 = prompt("rock,paper yada scissor sech")
  player2 = Math.floor((Math.random() * 3) + 1)
  if (player2 == 1) {
    player2 = 'rock'
  } else if (player2 == 2) {
    player2 = 'paper'
  } else {
    player2 = 'scissor'
  }
}
function qalibGelen(){
  if (player1 == 'rock' && player2 == 'paper') {
    alert("computer qalib geldi")
    hesabCixard(2)
  } else if (player1 == 'paper' && player2 == 'rock') {
    alert("player qalib geldi")
    hesabCixard(1)
  } else if (player1 == 'paper' && player2 == 'scissor') {
    alert("computer qalib geldi")
    hesabCixard(2)
  } else if (player1 == 'scissor' && player2 == 'paper') {
    alert("player qalib geldi")
    hesabCixard(1)
  } else if (player1 == 'scissor' && player2 == 'rock') {
    alert("computer qalib geldi")
    hesabCixard(2)
  } else if (player1 == 'rock' && player2 == 'scissor') {
    alert("player qalib geldi")
    hesabCixard(1)
  } else {
    alert("draw")
  }
}
function hesabNecedir(){
  var yeniden=confirm("yeniden oynamaq istiyirsiz?")
  if(yeniden){
    bextiniSina()
  }else{
    alert("tesekkur")
  }
}
function hesabCixard(say){
  if(say==1){
    x++
  }else{
    y++
  }
  alert(`${x},${y}`)
}
bextiniSina()
