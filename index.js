const express = require('express')
const mongoose = require('mongoose')
const { PORT, mongoDBURL } = require('./config')
const bookRoute = require('./routes/bookRoute')

const app = express()

app.use(express.json())

app.use('/books',bookRoute)

mongoose.connect(mongoDBURL)
.then(() => {
    console.log('App connected to database')
    app.listen(PORT, () => {
        console.log(`App is listening on port: ${PORT}`)
    })
})
.catch((err) => console.log(err))