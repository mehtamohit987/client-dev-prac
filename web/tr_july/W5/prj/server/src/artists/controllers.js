const Boom = require('boom');

class Controller {
    // [GET] /
    artists(request, reply) {
        // return reply([
        //             {artist_id: 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg'},
        //             {artist_id: 2, name: 'Al - 2', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg'},
        //             {artist_id: 3, name: 'Al - 3', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg'},
        //             {artist_id: 4, name: 'Al - 4', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg'},
        //             {artist_id: 5, name: 'Al - 5', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg'},
        //         ]).code(200).type('application/json');

        const Artist = request.server.plugins['hapi-mongo-models'].Artist;
        Artist.find({}, (err, results) => {
            if (err) {
                return reply(err);
            }
            reply(results).code(200).type('application/json');
        });
    }

    // [POST] /
    addArtist(request, reply) {
        // return reply([{artist_id: 1, name: request.payload.name, shortDescription: request.payload.shortDescription,
        //                  description: request.payload.description, img: request.payload.img}])
        //     .code(201).type('application/json'); 

        const Artist = request.server.plugins['hapi-mongo-models'].Artist;
        const newDoc = {};
        if (request.payload.artistId) {
            newDoc['artist_id'] = parseInt(request.payload.artistId, 10);
        }
        if (request.payload.name) {
            newDoc.name = request.payload.name;
        }
        if (request.payload.shortDescription) {
            newDoc.shortDescription = request.payload.shortDescription;
        }
        if (request.payload.description) {
            newDoc.description = request.payload.description;
        }
        if (request.payload.img) {
            newDoc.img = request.payload.img;
        }
        Artist.insertOne(newDoc, (err, results) => {
            if (err) {
                return reply(err);
            }
            if (results) {
                reply(results).code(201).type('application/json');
            }
            reply({}).code(201).type('application/json');
        });
    }

    // [GET] /{id}
    artist(request, reply) {
        // return reply({artist_id: 1, name: 'Al - 1', shortDescription: 'Short d', description: 'Long d', img: '/images/1.jpg'})
        //     .code(200).type('application/json');

        const Artist = request.server.plugins['hapi-mongo-models'].Artist;
        const filter = {};
        if (request.params.id) {
            filter['artist_id'] = parseInt(request.params.id, 10);
        }
        Artist.findOne(filter, (err, result) => {
            if (err) {
                return reply(err);
            }
            if (result) {
                reply(result).code(200).type('application/json');
            }
            Boom.notFound();
        });
    }

    // [POST] /{id}
    editArtist(request, reply) {

        // return reply({artist_id: request.params.id, name: request.payload.name, shortDescription: request.payload.shortDescription,
        //                  description: request.payload.description, img: request.payload.img})
        //     .code(200).type('application/json');

        const Artist = request.server.plugins['hapi-mongo-models'].Artist;
        const filter = {};
        if (request.params.id) {
            filter['artist_id'] = parseInt(request.params.id, 10);
        }

        const updatedDoc = {};
        if (request.payload.name) {
            updatedDoc.name = request.payload.name;
        }
        if (request.payload.shortDescription) {
            updatedDoc.shortDescription = request.payload.shortDescription;
        }
        if (request.payload.description) {
            updatedDoc.description = request.payload.description;
        }
        if (request.payload.img) {
            updatedDoc.img = request.payload.img;
        }

        Artist.findOneAndUpdate(filter, { $set: updatedDoc }, (err, result) => {
            if (err) {
                return reply(err);
            }
            if (result) {
                reply(result).code(200).type('application/json');
            }
            Boom.notFound();
        });
    }
}

module.exports = Controller;
