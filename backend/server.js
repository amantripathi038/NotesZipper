const express = require('express')
const notes = require('./data/notes')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.get('/', function (req, res) {
    res.send("<h1><center><u>Working Bro</u><center/></h1>")
})

app.get('/api/notes', function (req, res) {
    res.json(notes)
})

app.get('/api/notes/:id', function (req, res) {
    const note = notes.find((n) =>
        n._id === req.params.id
    )

    res.send(note)
})


const PORT = process.env.PORT || 4000
app.listen(PORT, console.log(`Server started on PORT: ${PORT}`))