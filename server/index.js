const express = require('express');
const path = require('path');
const routes = require('./routes');
const configs = require('./config');
const bodyParser = require('body-parser');
require('dotenv').config({path: 'variables.env'});

const app = express();
// Validar si se está en ambiente de desarrollo o de producción:
const config = configs[app.get('env')];
let host;
let port;

// Crear variable local para el sitio web:
app.locals.title = config.siteName;

// Habilitar pug:
app.set('view engine', 'pug');

// Añadir las vistas:
app.set('views', path.join(__dirname, './views'));

// Cargar una carpeta de archivos estáticos:
app.use(express.static('public'));

// Muestra el año actual y genera la ruta:
app.use((req, res, next) => {
    // Crear una nueva fecha:
    const date = new Date();

    /*
        - locals: Son variables locales que Express reconoce y que podrá pasarlas entre los diferentes archivos.
    */
    res.locals.actualDate = date.getFullYear();
    res.locals.route = req.path;

    return next();
});

// Ejecutar Body Parser:
app.use(bodyParser.urlencoded({extended: true}));

// Cargar las rutas:
app.use('/', routes());

// Puerto y host para el app:
host = process.env.HOST || '0.0.0.0';
port = process.env.PORT || 3000;

app.listen(port, host, () => {
    console.log('El servidor está funcionando correctamente.');
});