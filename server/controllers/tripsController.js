const Trip = require('../models/Trips');

// Método sin funciones asíncronas:
/*exports.displayTrips = (req, res) => {
    Trip.findAll()
        .then(trips => res.render('trips', {
            page: 'Próximos Viajes',
            trips
        }))
        .catch(error => console.log(error));
}

exports.displayTrip = (req, res) => {
    Trip.findByPk(req.params.id)
        .then(trip => res.render('trip', {
            trip
        }))
        .catch(error => console.log(error));
}*/

// Método con funciones asíncronas:
exports.displayTrips = async (req, res) => {
    const trips = await Trip.findAll()
    res.render('trips', {
        page: 'Próximos Viajes',
        trips
    });
}

exports.displayTrip = async (req, res) => {
    const trip = await Trip.findByPk(req.params.id)
    res.render('trip', {
        trip
    });
}