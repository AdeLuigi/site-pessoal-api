const Artigo = require('../models/Artigo');

module.exports = {

    async index(request, response){
        const {_id} = request.params;

        const artigo = await Artigo.findOne({_id});
        
        console.log(artigo);
        return response.json(artigo);
    }
};