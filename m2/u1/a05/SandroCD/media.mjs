import leitor from '../../../../lib/leitor.mjs'

const numero1 = await leitor('Digite o primeiro número > ')
const numero2 = await leitor('Digite o segundo número > ')

const media = (parseInt(numero1) + parseInt(numero2)) / 2

console.log('A média dos números é: ' + media)