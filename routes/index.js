const router = require('express').Router()
var Promise = require('bluebird');
var db = require('../models');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

router.get('/', function(req, res, next){
	var outerScopeContainer = {};
	Hotel.findAll()
	.then(function (dbHotels) {
		outerScopeContainer.dbHotels = dbHotels;
		return Restaurant.findAll();
	})
	.then(function (dbRestaurants) {
		outerScopeContainer.dbRestaurants = dbRestaurants;
		return Activity.findAll();
	})
	.then(function (dbActivities) {
		res.render('index', {
			templateHotels: outerScopeContainer.dbHotels,
			templateRestaurants: outerScopeContainer.dbRestaurants,
			templateActivities: dbActivities
		});
	})
	.catch(next);
})




module.exports = router