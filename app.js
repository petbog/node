const http = require('http')


const PORT = 3000

//создание сервера
const server = http.createServer((req, res) => {
    console.log('Serwer request');
    console.log(req.url, req.method)
    // //заголовок ответа
    res.setHeader('Content-Type','application/json')
    // //запись данных
    // res.write('<h1>Hello!</h1>')
    // //завершение отдачи данных

    //создание json
    const data = JSON.stringify([
        { name: 'valera', age: 29 }
    ])

    res.end(data)
})

//порт
server.listen(PORT, 'localhost', (error) => {
    error ? console.log('error') : console.log(`Connect port ${PORT}`)
})

