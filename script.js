// tipoDeCodigo -> escolhe cifra de césar ou base64
// se cifra de cesar -> mostra numero de passos
// se base 64 -> não mostra numero de passos
// troca opção codificar ou decodificar
// se codificar -> campo <input> mostra Codificar!
// se decodificar -> campo <input> mostra Decodificar!
// button executa a função e mostra no output
// reset limpa os campos de input e output

// CÓDIGO COMEÇA ABAIXO //

// input do usuário

function inputDoUsuario() {
    let input = document.getElementById("inputDoUsuario")
    return input.value
}

// retorno codificado/decodificado do input do usuário

function outputDaMensagem(resultadoDaMensagem) {
    let output = document.querySelector('#outputDaMensagem')
    output.value = resultadoDaMensagem
    return
}

// função para verificar qual tipo de código o usuário escolheu no radio button

var tipoDeCodigo = document.querySelector('#codigo')

tipoDeCodigo.addEventListener('change', function (tipoDeCodigo) {
    var codigoEscolhido = tipoDeCodigo.target.value
    console.log(codigoEscolhido)
    if (codigoEscolhido == 'base64') {
        incremento.style.display = 'none'
    }
    else if (codigoEscolhido == 'caesarCipher') {
        incremento.style.display = 'inline'
    }


})

// trocando escrita do botão -> codificar e decodificar

var magica = document.getElementById('magica')

var encoding = document.getElementById('encode')
var decoding = document.getElementById('decode')

encoding.addEventListener('click', function() {

    magica.innerText = 'Codificar!'
    magica.setAttribute('onClick', 'encodeText()')
})


decoding.addEventListener('click', function() {
    magica.innerText = "Decodificar!"
    magica.setAttribute('onClick', 'decodeText()')

})

// criando funções de codificar e decodificar

function encodeText() {
    let deslocamento = Number(document.getElementById('incremento').value)
    let selecao = document.getElementById("codigo")
    if (selecao.value == 'caesarCipher') {
        outputDaMensagem(algoritmoCaesar(inputDoUsuario(), deslocamento))
    } else if (selecao.value == 'base64') {
        outputDaMensagem(btoa(inputDoUsuario()))
    } else { outputDaMensagem('Escolha um algoritmo no menu') }
}

function decodeText() {
    let deslocamento = 26 - Number(document.getElementById('incremento').value)
    let selecao = document.getElementById("codigo")
    if (selecao.value == 'caesarCipher') {
        outputDaMensagem(algoritmoCaesar(inputDoUsuario(), deslocamento))
    } else if (selecao.value == 'base64') {
        outputDaMensagem(atob(inputDoUsuario()))
    } else { outputDaMensagem('Escolha um algoritmo no menu')
}
}

// Lógica Cifra de César

function algoritmoCaesar(mensagem, passos) {
    let mensagemCifrada = ''

    for (i = 0; i <= mensagem.length; i++) {
        let varCaesar = mensagem.charCodeAt(i)
        if (mensagem.match(/[a-z]/i)) {
            if (varCaesar >= 97 && varCaesar <=122) {
                varCaesar = (varCaesar - 97 + passos) % 26 + 97
            } else if (varCaesar >= 65 && varCaesar <=90){
                varCaesar = (varCaesar - 65 + passos) % 26 + 65
            }
            mensagemCifrada = mensagemCifrada + String.fromCharCode(varCaesar)
        }
    }
    return mensagemCifrada
}

// botão RESET //

var buttonReset = document.querySelector('#botaoReset')
var textAreaInput = document.getElementById('inputDoUsuario')
var textAreaOutput = document.getElementById('outputDaMensagem')
console.log(buttonReset)
console.log(textAreaInput)
buttonReset.addEventListener('click', function(){
    textAreaInput.value = ' '
    textAreaOutput.value = ' '
})
