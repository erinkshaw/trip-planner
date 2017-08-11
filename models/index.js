const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/tripplanner')
var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

// write some models here?

// Hotel.belongsTo(Place);
// Restaurant.belongsTo(Place);
// Activity.belongsTo(Place);
console.log('db in index', db)

module.exports = db

