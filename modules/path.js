const path = require('path');

// Variáveis globais:
// __filename = Caminho do arquivo atual
// __dirname = Caminho diretório atual
console.log(__filename, __dirname)

// Extrai o nome de um arquivo em um diretório
console.log(path.basename(__filename))

// Extrai o nome do diretório de um arquivo
console.log(path.dirname(__filename))

// Extrai a extensão do arquivo
console.log(path.extname(__filename))

// Cria objeto path
console.log(path.parse(__filename))

// Adiciona segmentos em um caminho
console.log(path.join(__dirname, 'pasta1', 'pasta2'))