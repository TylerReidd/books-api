const Book = require('../../models/book')


module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
}

function index(req,res) {
    Book.find({}).then((books) => {
        res.status(200).json(books)
    })
}

function show(req,res) {
    Book.findById(req.params.id)
    .then((book) => {
        res.status(200).json(book)
    })
}

function create(req,res) {
    Book.create(req.body)
    .then((book) => {
        res.status(201).json(book)
    })
}

function deleteOne(req,res) {
    Book.findByIdAndDelete(req.params.id)
    .then((book) => {
        res.status(200).json(book)
    })
}

function update(req,res) {
    Book.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((book) => {
        res.status(200).json(book)
    })
}