const mongoose = require('momgoose');

const PostSchema = new mongoose.Schema({
    titulo: {
        type: String,
        require : true
    },
    descricao: {
        type: String,
        require: true
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'autor',
        require: true
    },
    categoria: {
        type: String,
        required: true,
        enum: ['tech', 'esportes', 'entreterimento'],
        default: 'created'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;