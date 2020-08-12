const Sequelize = require('sequelize');
const db = require('../config/database');

const Testimonial = db.define('testimonials', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    message: {
        type: Sequelize.STRING
    }
});

module.exports = Testimonial;