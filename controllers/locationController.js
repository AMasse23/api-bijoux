const Location = require('../models/locationModel');
const Bijou = require('../models/bijouModel');

exports.createLocation = (req, res) => {
    console.log("createLocation");
    const { dateDebutLocation, dateFinLocation, idBijou } = req.body;
    const idUser = req.user.id;
    Location.create({ dateDebutLocation, dateFinLocation, idUser, idBijou })
        .then(location => res.json(location))
        .catch(err => res.status(400).json({ error: err }));
}

exports.getLocations = (req, res) => {
    const locations_by_user = Location.findAll({ where: { idUser: req.user.id } })
        .then(locations => {
            const bijouIds = locations.map(location => location.idBijou);
            Bijou.findAll({ where: { id: bijouIds } })
                .then(bijous => {
                    const locationsWithBijous = locations.map(location => {
                        const bijou = bijous.find(bijou => bijou.id === location.idBijou);
                        return { ...location.toJSON(), bijou };
                    });
                    res.json(locationsWithBijous);
                })
                .catch(err => res.status(400).json({ error: err }));
        })
        .catch(err => res.status(400).json({ error: err }));
}
