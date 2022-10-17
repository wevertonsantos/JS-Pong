// Variáveis da bolinha
let  xBolinha = 300
let  yBolinha = 200
let  diametro = 22


function setup() {
    createCanvas(600, 400);
  }

function draw(){
    background(0)
    mostraBolinha()
}

function mostraBolinha(){
    circle(xBolinha,yBolinha,diametro)
  }