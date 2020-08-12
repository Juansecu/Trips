const Testimonial = require('../models/Testimonials');

// Método sin funciones asíncronas:
/*exports.displayTestimonials = (req, res) => {
    Testimonial.findAll()
        .then(testimonials => res.render('testimonials', {
            page: 'Testimoniales',
            testimonials
        }));
}

exports.addTestimonial = (req, res) => {
    // Validar que todos los campos estén llenos:
    let {name, email, message} = req.body;
    let errors = [];

    if (!name) {
        errors.push({'message': 'Agrega tu Nombre'});
    }

    if (!email) {
        errors.push({'message': 'Agrega tu Correo Electrónico'});
    }

    if (!message) {
        errors.push({'message': 'Agrega tu Mensaje'});
    }

    // Revisar por errores:
    if (errors.length > 0) {
        // Muestra la vista con errores:
        res.render('testimonials', {
            errors,
            name,
            email,
            message
        });
    } else {
        // Almacenar en la base de datos:
        Testimonial.create({
            name,
            email,
            message
        })
        .then(testimonial => res.redirect('/testimonials'))
        .catch(error => console.log(error));
    }
}*/

// Método con funciones asíncronas:
exports.displayTestimonials = async (req, res) => {
    const testimonials = await Testimonial.findAll()
    res.render('testimonials', {
        page: 'Testimoniales',
        testimonials
    });
}

exports.addTestimonial = async (req, res) => {
    // Validar que todos los campos estén llenos:
    let {name, email, message} = req.body;
    let errors = [];

    if (!name) {
        errors.push({'message': 'Agrega tu Nombre'});
    }

    if (!email) {
        errors.push({'message': 'Agrega tu Correo Electrónico'});
    }

    if (!message) {
        errors.push({'message': 'Agrega tu Mensaje'});
    }

    // Revisar por errores:
    if (errors.length > 0) {
        // Muestra la vista con errores:
        const testimonials = await Testimonial.findAll()
        res.render('testimonials', {
            errors,
            name,
            email,
            message
        });
    } else {
        // Almacenar en la base de datos:
        const testimonial = await Testimonial.create({
            name,
            email,
            message
        })
        res.redirect('/testimonials');
    }
}