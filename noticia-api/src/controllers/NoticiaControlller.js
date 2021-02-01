const mongoose = require('mongoose');

const Noticia = mongoose.model('Noticia');

module.exports = {
    async list(req, res){
        const { page = 1 } = req.query;
        const noticia = await Noticia.paginate({}, { page, limit: 10 });
        return res.json(noticia);
    },

    async create(req, res){
        const noticia = await Noticia.create(req.body);

        return res.json(noticia);
    },

    async detail(req, res){
        const noticia = await Noticia.findById(req.params.id);

        return res.json(noticia);
    },

    async update(req, res){
        const noticia = await Noticia.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(noticia);
    }, 

    async delete(req, res){
        await Noticia.findByIdAndRemove(req.param.id);

        return res.send();
    }

    
} 