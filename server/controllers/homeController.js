const Trip = require('../models/Trips');
const Testimonial = require('../models/Testimonials');

// Método sin funciones asíncronas:
/*exports.homeQueries = (req, res) => {
    const promises = [];
    let result;

    promises.push(
        Trip.findAll({
            limit: 3
        })
    );
    promises.push(
        Testimonial.findAll({
            limit: 3
        })
    );
    // Pasar el promise y ejecutarlo:
    result = Promise.all(promises);

    result.then(result => res.render('index', {
        page: 'Próximos Viajes',
        clase: 'home',
        trips: result[0],
        testimonials: result[1]
    }))
    .catch(error => console.log(error));
}*/

// Método con funciones asíncronas:
exports.homeQueries = async (req, res) => {
    const trips = await Trip.findAll({limit: 3});
    const testimonials = await Testimonial.findAll({limit: 3});

    res.render('index', {
        page: 'Próximos Viajes',
        clase: 'home',
        trips,
        testimonials
    });
}