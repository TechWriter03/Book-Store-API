const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        publishYear:{
            type:Number,
            required:true
        }
    },
    {
        Timestamps:true
    }
)

const Book = mongoose.model('bookModel',bookSchema)
module.exports = Book