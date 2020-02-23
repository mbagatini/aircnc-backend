const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/Upload');

// Controllers
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
    return res.json("Oi API do AirCnC");
});

routes.get('/sessions', SessionController.index);
routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.get('/bookings', BookingController.index);
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;