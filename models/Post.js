module.exports = (sequelize, Datatypes ) =>{

    const Post = sequelize.define(
        'Post',{
            texto: Datatypes.INTEGER(100),
            img: Datatypes.STRING(100),
            usuarios_id: Datatypes.INTEGER,
            n_likes: Datatypes.INTEGER
        }, {
            tableName: "posts",
            timestamps: false
        }
    );
    Post.associate = (models) =>{
        //relação 1:N (usuario tem vários posts)
        Post.belongsTo(models.Usuario, {as:"usuario", foreignKey:"usuarios_id"});
        Post.hasMany(models.Comentario, {as:"comentarios", foreignKey:"posts_id"});
        Post.belongsToMany(models.Usuario, {
            as: "curtiu",
            through: "curtidas",
            foreignKey: "usuarios_id",
            otherKey: "posts_id",
            timestamps: false
        })
    }
    return Post;
}