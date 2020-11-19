'use strict';
const { Model } = require('sequelize');
const db = require('.');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.hasMany(models.pet) // one to many relationships!
      //think arrows between tables
      // generates a buunch of functions to use later
      // db.user.findOne({where: {firstName: 'Billy'}}).then((billy) => {
      //   billy.findPets;
        // SELECT * FROM pets WHERE pets.userid = <billy's id>
      // define association here
    }
  };
  user.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
