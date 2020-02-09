const mongoose = require('mongoose');

const ArtigoSchema = new mongoose.Schema({
    nome: String,
    data: Date,
    titulo: String,
    imagem: String,
    texto: String,
});

module.exports = mongoose.model('Artigo', ArtigoSchema);