const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

// Função para saber se a lamapa está quebrada, retorna true ou false
function isLampBroke(){
  return lamp.src.indexOf( 'quebrada' ) > -1
}

// Função para ligar a lampada
function lampOn(){
  if ( !isLampBroke () ) {
    lamp.src = './img/ligada.jpg'
  }
}

// Função para desligar a lampada
function lampOff(){
  if ( !isLampBroke () ) {
    lamp.src = './img/desligada.jpg'
  }
}

//Função para quebrar a lampada
function lampBroke(){
  lamp.src = './img/quebrada.jpg'
}

// Ações para acionar as funções
turnOn.addEventListener('click', lampOn) 
turnOff.addEventListener('click', lampOff) 
lamp.addEventListener('mouseover', lampOn )
lamp.addEventListener('mouseleave', lampOff )
lamp.addEventListener('dblclick', lampBroke)