const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(connection){
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },{
      sequelize: connection
    });
  }

  static associate(models){
    this.hasMany(models.DataUser, {foreignKey: 'user_id', as: 'data_users'});
  }
}

module.exports = User;
