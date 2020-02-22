const Booking = require('../models/Booking');

module.exports = {
    async index(req, res){
        const booking = await Booking.find();

        return res.json(booking);
    },

    show(){

    },

    async store(req, res){
        const { user } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user,
            spot: spot_id,
            date,
        })

        // Prenche automaticamente as chaves estrangeiras
        // usuario e spot
        await booking.populate('spot').populate('user').execPopulate();
        
        return res.json(booking);
    },

    update(){

    },

    destroy(){

    }
};