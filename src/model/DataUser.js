const { Model, DataTypes } = require('sequelize');

class DataUser extends Model {
  static init(connection){
    super.init({
      image: DataTypes.BLOB,
      bio: DataTypes.STRING,
      site: DataTypes.STRING,
    },{
      sequelize: connection
    });
  }

  static associate(models){
    this.belongsTo(models.User, {foreignKey: 'user_id', as: 'data_users'});
  }
}

module.exports = DataUser;
