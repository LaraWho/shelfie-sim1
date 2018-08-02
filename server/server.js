const express = require('express')
    , axios = require('axios')
    // , massive = require('massive')
    , bodyParser = require('body-parser');

    require('dotenv').config();
    const app = express();
    app.use(bodyParser.json());

    let {
        SERVER_PORT
    } = process.env

    app.listen(SERVER_PORT, ( ) => {
        console.log(`Listening on port: ${SERVER_PORT}`)
    });