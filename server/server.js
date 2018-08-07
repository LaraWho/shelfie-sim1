const express = require('express')
    , axios = require('axios')
    , massive = require('massive')
    , bodyParser = require('body-parser');

    require('dotenv').config();
    const app = express();
    app.use(bodyParser.json());

    const cntrl = require('./product_controller');

    let {
        SERVER_PORT,
        CONNECTION_STRING
    } = process.env

    massive(CONNECTION_STRING).then(db => {
        console.log("database connected!");
        app.set('db', db)
    }).catch( error => console.error('ERROR!', error))

    app.post('/shelf/:id/add/:addproduct', cntrl.create);
    app.get('/shelf/:id/bin/:number', cntrl.view);
    app.put('shelf/:id/bin/:number', cntrl.edit);
    app.delete('shelf/:id/bin/:number', cntrl.delete);

    app.listen(SERVER_PORT, ( ) => {
        console.log(`Listening on port: ${SERVER_PORT}`)
    });