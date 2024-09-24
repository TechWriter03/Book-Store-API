const Book = require('../models/bookModel');

// Save a new book
const createBook = async (request,response) => {
    try {
        if(!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({
                message: 'Send all requires fields'
            })
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        }
        const book = await Book.create(newBook)
        return response.status(201).send(book)
    }
    catch(err){
        console.log(err.message)
        response.status(500).send({message: err.message})
    }
}

// Get all books
const getAllBooks = async (request,response) => {
    try {
        const books = await Book.find({})
        return response.status(200).json({
            count: books.length,
            data: books
        })
    }
    catch(err) {
        console.log(err.message)
        response.status(500).send({message: err.message})
    }
}

// Get one book
const getOneBook = async (request,response) => {
    try {
        const {id} = request.params
        const book = await Book.findById(id)
        return response.status(200).json(book)
    }
    catch(err) {
        console.log(err.message)
        response.status(500).send({message: err.message})
    }
}

// Update a book
const updateBook = async (request,response) => {
    try {
        const {id} = request.params
        const result = await Book.findByIdAndUpdate(id,request.body)
        if(!result) {
            return response.status(404).send({message: 'Book not found'})
        }
        return response.status(200).send({message: 'Book updated successfully'})
    }
    catch(err) {
        console.log(err.message)
        response.status(500).send({message: err.message})
    }
}

// Delete a book
const deleteBook = async (request,response) => {
    try {
        const {id} = request.params
        const result = await Book.findByIdAndDelete(id)
        if(!result) {
            return response.status(404).send({message: 'Book not found'})
        }
        return response.status(200).send({message: 'Book deleted successfully'})
    }
    catch(err) {
        console.log(err.message)
        response.status(500).send({message: err.message})
    }
}

module.exports = { createBook, getAllBooks, getOneBook, updateBook, deleteBook }
