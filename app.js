const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.status(200).send('Jill Kidman')
})

app.get('/search', (req, res) => {
    res.send('This is a search page.')
})

app.get('/about', (req, res) => {
    res.send('A good place for stuff about me.')
})

app.get('/contact', (req, res) => {
    res.send('Maybe some contact info here.')
})

app.get('/animals', (req, res) => {
    res.send('This would be a great place for baby animal pics.')
})

app.get('/weird', (req, res) => {
    res.status(204).send('Sorry no content.')
})

app.get('/moved', (req, res) => {
    res.status(301).send('Sorry we moved to http://localhost:4000.')
})

app.get('/coffee', (req, res) => {
    res.status(418).send('Sorry no coffee with only a teapot.' )
})

app.get('*', (req, res) => {
    res.status(404).send("Sorry there's nothing here for you.")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})