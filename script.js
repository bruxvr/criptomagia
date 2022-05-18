// tipoDeCodigo -> escolhe cifra de césar ou base64
// se cifra de cesar -> mostra numero de passos
// se base 64 -> não mostra numero de passos
// mostra opção codificar ou decodificar
// se codificar -> campo <input> mostra Codificar!
// se decodificar -> campo <input> mostra Decodificar!
// button executa a função e mostra no output
// reset volta para a escolha de opção entre cifra de cesar ou base64

// CÓDIGO COMEÇA ABAIXO //

// input do usuário

inputDoUsuario = function () {
    let input = document.querySelector('#input')
    input = input.value
    return input
}

// retorno codificado/decodificado do input do usuário
function outputDaMensagem(resultadoDaMensagem) {
    let output = document.querySelector('#output')
    output = output.value = '${resultadoDaMensagem}'
    return output
}

// função para verificar qual tipo de código o usuário escolheu no radio button
var tipoDeCodigo = document.querySelector('#codigo')

tipoDeCodigo.addEventListener('change', function (tipoDeCodigo) {
    var codigoEscolhido = tipoDeCodigo.target.value

    if (codigoEscolhido == 'base64') {
        incremento.style.display = 'none'
        botaoPronto.setAttribute('onclick', base64())
    }
    else {
        incremento.style.display = 'inline'
        botaoPronto.setAttribute('onclick', caesarCipher())
    }  

        
})

// trocando escrita do botão -> codificar e decodificar
var botaoPronto = document.querySelector('#magica')

var encoding = document.querySelector('#encode')

encoding.addEventListener('click', function() {
    
    botaoPronto.innerText = 'Codificar!'
})

var decoding = document.querySelector('#decode') 

decoding.addEventListener('click', function() {
    botaoPronto.innerText = "Decodificar!"
    
})



//function tipoDeCodigo() {
//    const option = document.querySelector('tipoDeCodigo')
//    const caesar = select.options[select]}


