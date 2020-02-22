const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    show(){

    },

    async store(req, res){
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user } = req.headers;

        const user_ck = await User.findById(user);

        if (!user_ck){
            return res.status(400).json({ error: 'User not registered'});
        }

        const spot = await Spot.create({
            user,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        });

        return res.json(spot);
    },

    update(){

    },

    destroy(){

    }
};