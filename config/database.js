const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/books',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection 

db.on('connected', ()=> {
    console.log(`Mongoose connected to: ${db.host}:${db.port}`)
})

