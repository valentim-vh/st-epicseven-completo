var carta0 = {
  nome: "Ravi",
  imagem: "https://epic7x.com/wp-content/uploads/2019/01/ravi-full.png",
  atributos: {
    HP: 7323,
    ATK: 966,
    DEF: 657,
      }
}
var carta1 = {
  nome: "Fallen Cecilia",
  imagem: "https://epic7x.com/wp-content/uploads/2019/06/fallen-cecilia-full.png",
  atributos: {
    HP: 6840,
    ATK: 894,
    DEF: 694,
   
  }
}
var carta2 = {
  nome: "Lilias",
  imagem: "https://epic7x.com/wp-content/uploads/2019/09/lilias.png",
  atributos: {
    HP: 6751,
    ATK: 821,
    DEF: 648,
    
  }
}
var carta3 = {
  nome: "Celine",
  imagem: "https://epic7x.com/wp-content/uploads/2020/06/Celine.png",
  atributos: {
    HP: 6267,
    ATK: 1228,
    DEF: 473,
    
  }
}
var carta4 = {
  nome: "Landy",
  imagem: "https://epic7x.com/wp-content/uploads/2020/09/Landy-1.png",
  atributos: {
    HP: 6002,
    ATK: 1158,
    DEF: 553,
    
  }
}
var carta5 = {
  nome: "Sigret",
  imagem: "https://epic7x.com/wp-content/uploads/2019/01/sigret-full.png",
  atributos: {
    HP: 5784,
    ATK: 1228,
    DEF: 553,
    
  }
}
var carta6 = {
  nome: "Bellona",
  imagem: "https://epic7x.com/wp-content/uploads/2019/01/Bellona-1.png",
  atributos: {
    HP: 5704,
    ATK: 1003,
    DEF: 585,
    
  }
}
var carta7 = {
  nome: "Cermia",
  imagem: "https://epic7x.com/wp-content/uploads/2019/03/Cermia-2.png", 
  atributos: {
    HP: 5542,
    ATK: 1359,
    DEF: 585,
    
  }
}
var carta8 = {
  nome: "Baiken",
  imagem: "https://epic7x.com/wp-content/uploads/2019/04/Baiken-test.png",
  atributos: {
    HP: 6266,
    ATK: 1228,
    DEF: 473,
    
  }
}
var carta9 = {
  nome: "Vivian",
  imagem: "https://epic7x.com/wp-content/uploads/2019/08/vivian.png",
  atributos: {
    HP: 4378,
    ATK: 1228,
    DEF: 662,
    
  }
}



var cartaMaquina
var cartaJogador
var cartas = [carta0, carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9];

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeCartas()

function atualizaQuantidadeCartas(){
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
  
 }

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Maquina"
  
  divPlacar.innerHTML = html
}


function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)    
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)
    

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}


function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  
    if (cartas.length == 0){
        alert("Fim do jogo")
        if (pontosJogador > pontosMaquina){
            htmlResultado = '<p class="resultado-final">Você venceu a partida</p>'
        }else if (pontosMaquina > pontosJogador){
          htmlResultado = '<p class="resultado-final">Você perdeu a partida</p>'
        }else htmlResultado = '<p class="resultado-final">Tivemos um empate!!</p>'
    }else {
      document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
    
  
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  document.getElementById("btnSortear").disabled = false
  document.getElementById("btnJogar").disabled = true
  document.getElementById("btnProximaRodada").disabled = true
  
  var divResultado = document.getElementById("resultado")
  divResultado.innerHTML = " "
}
