//Funções tradicionais:
let dobro = function (a) {
    return 2 * a
}

let imprimeNome = function (nome) {
    return nome
}
console.log(imprimeNome('Lucio Flávio.'))

let imprimeSaudacao = function (saudacao) {
    return saudacao
}
console.log(imprimeSaudacao('Olá, como vai você?'))

//Funções Refatoradas para Arrow Function:
dobro = a => 2 * a
console.log(dobro(Math.PI))

saudacao = msg => 'Olá,'
console.log(saudacao())

imprimeNome = () => 'Flávio'
console.log(imprimeNome())