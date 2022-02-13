const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 8080

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        fs.readFile(path.join(__dirname, 'teste', 'index.html'), 'utf-8', (err, data) => {
            if (err) {
                return console.log(err)
            }
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    }

    if (req.url === '/users') {
        const users = [
            {
                name: 'Luiz Fernando',
                email: 'email@email.com'
            },
            {
                name: 'Bill Gates',
                email: 'email@email.com'
            }
        ]

        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(JSON.stringify(users))
    }
})

server.listen(port, () => {
    console.log(`Server running on ${port}`)
})