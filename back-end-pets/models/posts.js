import Sequelize from 'sequelize';
import sequelize from "../config/sequelize.js";
import Usuarios from './usuarios.js';
import Comentarios from './comentarios.js';

const Posts = sequelize.define('posts', {
    id_post: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: true
    },
    tipo_post: {
        type: Sequelize.STRING,
        allowNull: true
    },
    especie: {
        type: Sequelize.STRING,
        allowNull: true
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    raca: {
        type: Sequelize.STRING,
        allowNull: true
    },
    idade: {
        type: Sequelize.STRING,
        allowNull: true
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    freezeTableName: true,
    tableName: 'posts',
    timestamps: false,
});

Posts.hasMany(Comentarios, {
    foreignKey: 'id_post',
    as: 'comentarios_p'
});
Comentarios.belongsTo(Posts, {
    foreignKey: 'id_post',
    as: 'comentarios_p'
});

Usuarios.hasMany(Posts, {
    foreignKey: 'id_usuario',
    as: 'usuario_p'
});
Posts.belongsTo(Usuarios, {
    foreignKey: 'id_usuario',
    as: 'usuario_p'
});

export default Posts;