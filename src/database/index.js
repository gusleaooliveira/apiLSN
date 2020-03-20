const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../model/User');
const DataUser = require('../model/DataUser');
const connection = new Sequelize(dbConfig);

User.init(connection);
DataUser.init(connection);

DataUser.associate(connection.models);
User.associate(connection.models);

module.exports=connection;
