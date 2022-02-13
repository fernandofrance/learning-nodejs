const fs = require('fs')
const path = require('path')

// Criar uma pasta
fs.mkdir(path.join(__dirname, 'teste'), (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Pasta criada')
})

// Criar arquivo
fs.writeFile(path.join(__dirname, 'teste', 'teste.txt'), 'Hello World\n', (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Arquivo criado')
})

// Adicionar conteúdo ao arquivo
fs.appendFile(path.join(__dirname, 'teste', 'teste.txt'), 'Msg adicionada', (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Conteúdo adicionado')
})

// Ler conteúdo de um arquivo
fs.readFile(path.join(__dirname, 'teste', 'teste.txt'), 'utf-8', (err, data) => {
    if (err) {
        return console.log(err)
    }
    console.log(data)
})