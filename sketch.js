// Variáveis da bolinha
let  xBolinha = 300
let  yBolinha = 200
let  diametro = 22

// Velocidade da bolinha
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6


function setup() {
    createCanvas(600, 400);
  }

function draw(){
    background(0)
    mostraBolinha()
    movimentaBolinha()
}

function mostraBolinha(){
    circle(xBolinha,yBolinha,diametro)
  }

function movimentaBolinha(){
    xBolinha += velocidadeXBolinha
    yBolinha += velocidadeYBolinha
  }