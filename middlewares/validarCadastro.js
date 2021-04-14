const { Usuario } = require('../models')

module.exports = async (request, response, next) => {
    let {email, nome, senha} = request.body
    let usuarios = await Usuario.findAll({where: {email}});

    if(!nome){
        response.status(400).json({erro: "Nome é obrigadorio"});
    }if(!email){
        response.status(400).json({erro: "Email é obrigadorio"});
    } 
    if(!senha || senha.length < 6 || senha.length > 12){
        response.status(400).json({erro: "Senha invalida"});
    }
    if(usuarios.length){
        response.status(400).json({erro: "E-mail já cadastrado"});             
    }else{
            next()                       
     }    
}
