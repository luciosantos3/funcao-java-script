//Formas de criação de função em JS
//Higjer-Order function

//Criação de forma literal//
function func1() {}

//Armazenando função em uma variável
const func2 = function(){}

//Armazenar em um array
const funcs = [function (a, b) {return a + b}, func1, func2]
console.log('Resultado da função da posição 0 do array: ' + funcs[0](1,2))

//Armazenar em um atributo de um objeto
const obj = {}
obj.nome = 'Flávio'
obj.falar = function () {return 'Olá, ' + obj.nome + '. Tudo bem?'}
console.log(obj.falar())

//Passar Função como parâmetro
function run(funcao){
    funcao()
}
run(function () {console.log('Resultado da sua função.')})

//Retornar ou conter uma função
function soma(a, b){
    return function (c) {
        console.log(a + b + c)
    }
}
const tresMais = soma(1, 2)
tresMais(2)
