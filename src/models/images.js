const mongoose = require('../database')

const ImageSchema = new mongoose.Schema({
    url: {
        type: String,
        require: true,
    },
    likes: {
        type: Number,
    },
})

const Image = mongoose.model('Image' , ImageSchema)

module.exports = Image;