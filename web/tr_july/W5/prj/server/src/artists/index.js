const Controller = require('./controllers');
const namespace = require('hapi-namespace');
const Joi = require('joi');
const Artist = require('./models.js');

module.exports.register = function(server, options, next) {
    const addModel = server.plugins['hapi-mongo-models'].addModel;
    addModel('Artist', Artist);

    const controller = new Controller();

    server.bind(controller);
    server.route(namespace('/api/v1/artists', [{
        method: 'GET',
        path: '',
        config: {
            handler: controller.artists,
        },
    }, {
        method: 'POST',
        path: '',
        config: {
            handler: controller.addArtist,
            validate: {
                payload: Joi.object().keys({
                    artistId: Joi.number().integer().required(),
                    name: Joi.string().required(),
                    shortDescription: Joi.string(),
                    description: Joi.string(),
                    img: Joi.string(),
                }),
            },
        },
    }, {
        method: 'GET',
        path: '/{id}',
        config: {
            handler: controller.artist,
            validate: {
                params: Joi.object().keys({
                    id: Joi.alternatives()
                        .try(
                            Joi.string().trim().lowercase(),
                            Joi.number().integer()
                        ),
                }),
            },
        },
    }, {
        method: 'POST',
        path: '/{id}',
        config: {
            handler: controller.editArtist,
            validate: {
                params: Joi.object().keys({
                    id: Joi.alternatives()
                        .try(
                            Joi.string().trim().lowercase(),
                            Joi.number().integer()
                        ),
                }),
                payload: Joi.object().keys({
                    name: Joi.string().required(),
                    shortDescription: Joi.string(),
                    description: Joi.string(),
                    img: Joi.string(),
                }),
            },
        },
    }]));

    next();
};

module.exports.register.attributes = {
    pkg: require('./package.json'),
    dependencies: ['hapi-mongo-models'],
};
