'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post}) {
      this.hasMany(Post, {
        foreignKey: 'user_id'
      })
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};