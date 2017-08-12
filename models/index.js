const Sequelize = require('sequelize')
var db = require('./_db');
var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

// write some models here?

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);
console.log('db in index', db)

module.exports = db;

