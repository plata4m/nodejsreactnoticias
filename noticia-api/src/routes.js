const express = require('express');
var cors = require('cors');
const routes = express.Router();

const tokenValidation = require('./validation/validation');

const NoticiaController = require('./controllers/NoticiaControlller');

routes.use(cors());

//routes.use(function (req, res, next) {

    // valida o token antes de redirecionar as rotas.
    //const validateToken = tokenValidation.validateToken(req.header('token'));
    //if(validateToken.error == 0){

        // libera as sub rotas se token ok. 
       // next();
        // Rotas crud noticias
        routes.get('/noticia',NoticiaController.list); 
        routes.get('/noticia/:id', NoticiaController.detail);
        routes.post('/noticia', NoticiaController.create);
        routes.put('/noticia/:id', NoticiaController.update);
        routes.delete('/noticia/:id', NoticiaController.delete);

   // } else {

       // return res.json({ error: 1, message: validateToken.message });
        
   // }

//});

module.exports = routes;