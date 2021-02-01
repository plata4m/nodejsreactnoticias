const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate");

const NoticiaSchema = new mongoose.Schema({
   
    titulo: {
        type: String,
        required: true,
    },
    conteudo: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

NoticiaSchema.plugin(mongoosePaginate);

mongoose.model('Noticia', NoticiaSchema);