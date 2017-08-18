'use strict'

const express = require('express');
//const expressGraphQL = require('express-graphql');

const port = process.env.PORT || 4889;

const app = express();

app.listen(port,(err) => {
    if(err){
        console.log(err);
    } else{
        console.log("Server is listening on "+port);
    }
});

