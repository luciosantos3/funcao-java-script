
//Função anônima tradicional
const soma = function (x, y){
    return x + y
}

//Arrow functions anônimas
const multiplicacao = (x, y) => x * y
const divisao = (x, y) => x/y

const imprimirResultado = function (a, b, operacao = divisao) {
    console.log(operacao(a, b))
}

imprimirResultado(10, 5)

