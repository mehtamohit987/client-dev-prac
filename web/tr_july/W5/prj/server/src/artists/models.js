const Joi = require('joi');
const MongoModels = require('mongo-models');

class Artist extends MongoModels {

}

Artist.collection = 'artists';

Artist.schema = Joi.object().keys({
    artist_id: Joi.number().integer().required(),
    name: Joi.string().required(),
    shortDescription: Joi.string(),
    description: Joi.string(),
    img: Joi.string(),
});

module.exports = Artist;
