const Usuario = (sequelize, DataTypes) =>{
    return sequelize.define('Usuario', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        patch: DataTypes.STRING
    });
}

module.exports = Usuario;