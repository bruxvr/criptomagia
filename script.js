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

    if (codigoEscolhido == 'base64') {
        incremento.style.display = 'none'
    }
    else {
        incremento.style.display = 'inline'
    }


})

// trocando escrita do botão -> codificar e decodificar
var magica = document.getElementById('magica')

var encoding = document.getElementById('encode')

encoding.addEventListener('click', function () {

    magica.innerText = 'Codificar!'
    magica.setAttribute('onClick', 'encodeText()')
})

var decoding = document.getElementById('decode')

decoding.addEventListener('click', function () {
    magica.innerText = "Decodificar!"
    magica.setAttribute('onClick', 'decodeText()')

})

// criando funções base64 e cifra de césar

function encodeText() {
    let deslocamento = Number(document.getElementById('incremento').value)
    let selecao = document.getElementById("codigo")
    if (selecao.value = 'caesarCipher') {
        outputDaMensagem(algoritmoCaesar(inputDoUsuario(), deslocamento))
    } else if (selecao.value == 'base64') {
        outputDaMensagem(algoritmoBase64(inputDoUsuario()))
    } else { outputDaMensagem('Escolha um algoritmo no menu') }
}

function decodeText() {
    let deslocamento = 26 - Number(document.getElementById('incremento').value)
    let selecao = document.getElementById("codigo")
    if (selecao.value = 'caesarCipher') {
        outputDaMensagem(algoritmoCaesar(inputDoUsuario(), deslocamento))
    } else if (selecao.value == 'base64') {
        outputDaMensagem(algoritmoBase64(inputDoUsuario()))
    } else { outputDaMensagem('Escolha um algoritmo no menu') }
}

// Lógica Cifra de César

function algoritmoCaesar(mensagem, passos) {
    let caesarLogic = []
    let mensagemCifrada = ''

    for (i = 0; i <= mensagem.length; i++) {
        let varCaesar = mensagem.charCodeAt(i)
        if (1) {
            if (varCaesar >= 97) {
                varCaesar = (varCaesar - 97 + passos) % 26 + 97
            } else {
                varCaesar = (varCaesar - 65 + passos) % 26 + 65
            }
            mensagemCifrada = mensagemCifrada + String.fromCharCode(varCaesar)
        }
    }
    return mensagemCifrada
}

function algoritmoBase64(mensagem) {


}