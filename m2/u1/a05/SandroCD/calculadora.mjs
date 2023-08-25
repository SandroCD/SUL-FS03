// leia dois números e um operador no terminal
// use o operador para definir qual das funções
// serão executadas:
// - somar
// - subtração
// - multiplicação
// - divisão
// - módulo

import leitor from '../../../../lib/leitor.mjs'

const numero1 = await leitor('Digite o primeiro número > ')
const numero2 = await leitor('Digite o segundo número > ')
const operador = await leitor('Digite o operador > ')

if (operador === '+') {
    console.log (numero1 + numero2)
} else if (operador === '-') {
    console.log (numero1 - numero2)
} else if (operador === '*') {
    console.log (numero1 * numero2)
} else if (operador === '/') {
    console.log (numero1 / numero2)
} else if (operador === '%') {
    console.log (numero1 % numero2)
}
