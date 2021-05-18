//imagem da lâmpada acesa
// http://i.stack.imgur.com/ybxlO.jpg

//imagem da lâmpada quebrada
// http://i.stack.imgur.com/MRjsF.jpg

//Pega o botão consultando pelo ID
const btn = document.getElementById('botaoAcao')
//Pega a imagem consultando verificando o atributo alt pelo seletor
const imagem = document.querySelector('img[alt="lampada"]')

//iniciando o contador em zero
let cont = 0

//Adiciona um escutador de eventos do tipo click no botão
btn.addEventListener('click', function(){
  //se o texto do botão for "apagar" acende a imagem
  if(btn.innerHTML === "apagar"){
    //coloca a imagem da lâmpada apagada
    imagem.src = "http://i.stack.imgur.com/b983w.jpg"
    //troca o texto do botão pra acender
    btn.innerHTML = "acender"  
  }
  //se não, verifica se o texto é "acender"
  else if(btn.innerHTML === "acender") {
    //incrementa o contador em 1
    cont++
    //verifica se o contador chegou em 5
    if (cont === 5) {
      //coloca a imagem da lampada quebrada
      imagem.src = "http://i.stack.imgur.com/MRjsF.jpg"
      //altera o texto do botão para "trocar lâmpada"
      btn.innerHTML = "trocar lâmpada"  
    } 
    //se o contador ainda não estiver em 5
    else {
      //coloca a imagem da lâmpada acesa
      imagem.src = "http://i.stack.imgur.com/ybxlO.jpg"
      //troca o texto do botão pra apagar
      btn.innerHTML = "apagar"
    }
  } 
  //se o texto não for nem "acender" nem "apagar"
  else {
    //reinicia o contador
    cont = 0
    // coloca a imagem da lâmpada apagada novamente
    imagem.src = "http://i.stack.imgur.com/b983w.jpg"
    //troca o texto do botão para acender
    btn.innerHTML = "acender" 
  }
})