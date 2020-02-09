const Artigo = require('../models/Artigo');

module.exports = {

    async index(request, response){
        const artigos = await Artigo.find();
        console.log(request.query);
        return response.json(artigos);
    },

    async store(request, response)  {
        const {nome, titulo, texto, imagem} = request.body;
        data = new Date();
        let artigo = await Artigo.findOne({titulo});

        if(!artigo){
             artigo = await Artigo.create({
                nome,
                data,
                titulo,
                imagem,
                texto
            })
        }

    
        return  response.json(artigo);
    }
};