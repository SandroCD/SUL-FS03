const readline = require('readline')
const leitor =readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const pessoa = require('./pessoa_2')

function processar (anoInformadoNoPrompt) {

    console.log (pessoa.calcular_idade(anoInformadoNoPrompt))
    leitor.close()
}

leitor.question('Digite o ano de mascimento > ', processar)