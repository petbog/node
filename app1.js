const http = require('http')
const fs = require('fs')
const path = require('path')


const PORT = 5000

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    console.log('Serwer request');

    //создание адресации по страницам

    const createPage = (page) => path.resolve(__dirname, 'page', `${page}.html`);

    let basePath = '';
    switch (req.url) {
        case '/':
        case '/home':
        case '/index.html':
            basePath = createPage('home')
            res.statusCode = 200
            break;
            //редирект
        case '/new':
            res.statusCode = 301;
            res.setHeader('Location','/content')
            res.end()
            break;
        case '/content':
            basePath = createPage('content')
            res.statusCode = 200
            break;
        case '/user':
            basePath = createPage('user')
            res.statusCode = 200
            break;
        default:
            basePath = createPage('error')
            res.statusCode = 404
            break
    }
    fs.readFile(basePath, (err, data) => {
        if (err) {
            console.log(err)
            res.statusCode = 500
            res.end()
        }
        else {
            res.write(data)
            res.statusCode = 200
            res.end()
        }
    })
})


server.listen(PORT, 'localhost', (error) => {
    error ? console.log('error') : console.log(`Connect port ${PORT}`)
})
