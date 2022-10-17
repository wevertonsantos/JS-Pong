// Variáveis da bolinha
let  xBolinha = 300
let  yBolinha = 200
let  diametro = 22
let  raio     = diametro / 2

// Variáveis da raquete
let  xRaquete = 5
let  yRaquete = 150
let  raqueteComprimento = 10
let  raqueteAltura = 90

// Velocidade da bolinha
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6

// Variáveis do oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente;

// Variáveis de pontos
let meusPontos = 0;
let pontosDoOponente = 0;

let colidiu = false;

function setup() {
    createCanvas(600, 400);
  }

  function draw() {
    background(0);
    mostraBolinha()
    //movimentaBolinha()
    verificaColisaoBorda()
    mostraRaquete(xRaquete, yRaquete)
    mostraRaquete(xRaqueteOponente, yRaqueteOponente)
    movimentaRaquete()
    verificaColisaoRaquete(xRaquete, yRaquete)
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
    movimentaRaqueteOponente()
    incluiPlacar()
  }

function mostraBolinha(){
    circle(xBolinha,yBolinha,diametro)
  }

function movimentaBolinha(){
    xBolinha += velocidadeXBolinha
    yBolinha += velocidadeYBolinha
  }

function mostraRaquete(x,y){
    rect(x, y, raqueteComprimento, raqueteAltura)
  }

function verificaColisaoBorda(){
    if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1
  }
  
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1    
  }
  
}

function movimentaRaquete(){
    if (keyIsDown(UP_ARROW)){
      yRaquete -= 10;
    }
    
    if (keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
    }
  }
  
function verificaColisaoRaquete(x,y){
    colidiu = 
    collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio)
    if (colidiu){
       velocidadeXBolinha *= -1
    }
  }

function movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30
    yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar(){
    fill(255);
    text(meusPontos, 200, 26);
    text(pontosDoOponente,400, 26)
}