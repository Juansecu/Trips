const express = require('express');
const homeController = require('../controllers/homeController');
const usController = require('../controllers/usController');
const tripsController = require('../controllers/tripsController');
const testimonialsController = require('../controllers/testimonialsController');

const router = express.Router();

module.exports = function() {
    router.get('/', homeController.homeQueries);
    router.get('/us', usController.usInfo);
    router.get('/trips', tripsController.displayTrips);
    router.get('/trips/:id', tripsController.displayTrip);
    router.get('/testimonials', testimonialsController.displayTestimonials);
    router.post('/testimonials', testimonialsController.addTestimonial);

    return router;
}