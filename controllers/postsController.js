const { Post, sequelize } = require('../models');

const postsController = {
    index: async (request, response) => {
        let posts =  await Post.findAll();
        
        return response.json(posts);
    },
    create: async (request, response) => {
        let {texto, img, usuarios_id, n_likes} = request.body;

        let postNovo = await Post.create({
            texto,
            img,
            usuarios_id,
            n_likes
        });
        
        return response.json(postNovo);
    },

    update: async(request, response) => {
        const {id} = request.params; //filtrar a busca pelo id
        let {texto, img, usuarios_id, n_likes}  = request.body;

        let postAtualizado = await Post.update({
            texto,
            img,
            usuarios_id,
            n_likes
        },{
            where: {id}
        });

        return response.json(postAtualizado);  
    },

    delete: async(request, response) =>{
        const {id} = request.params; //filtrar a busca pelo id

        let postDeletado = await Post.destroy({
            where : {id}
        });

        return response.json(postDeletado);  
    },

    show: async(request, response) =>{
        const { usuarios_id} = request.params; //filtrar a busca pelo id

        let postUsuario = await Post.findAll({
            where : {
                usuarios_id 
            }
        });

        return response.json(postUsuario);  
    }

}

module.exports = postsController;