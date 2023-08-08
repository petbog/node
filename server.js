const express = require('express')
const path = require('path')


const app = express()

const PORT = 3000

const createPath = (page) => path.resolve(__dirname, 'page', `${page}.html`)

app.listen(PORT, (error) => {
    error ? console.log('error') : console.log(`listening port ${PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(createPath('home'))
})

app.get('/content', (req, res) => {
    res.sendFile(createPath('content'))
})

//редирект
app.get('/new', (req, res) => {
    res.redirect('/user')
})

app.get('/user', (req, res) => {
    res.sendFile(createPath('user'))
})


app.use((req, res) => {
    res
        .status(404)
        .sendFile(createPath('error'))
})
