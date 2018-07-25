const express = require( "express" );
const routes = require( "./routes/api.js" );
const bodyParser = require( "body-parser" );
const mongoose = require( "mongoose" );

const app = express();

//  connect to mongo db
mongoose.connect( "mongodb://localhost/ninjago" );
mongoose.Promise = global.Promise;

//  use body parser
app.use( bodyParser.json() );

//  use the router
app.use( "/api", routes );

//  error handling middleware
app.use( ( err, req, res ) => {
    res.status( 422 ).send( {
        error: err.message,
    } );
} );

app.listen( 3000, ( err ) => {
    if ( err ) throw err;
    console.log( "listening to 3000" );
} );

