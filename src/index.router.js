const express = require("express");
const fs = require("fs");

const router = express.Router();

router.post( "/api/index", ( req, res ) => {
    fs.readFile( "./src/cookie.json", ( err, data ) => {
        if( err ) return console.log( err.message );

        const jsonData = JSON.parse( data );

        if( Object.values( jsonData ).length == 0 ) return res.send(false);

        if( Object.values( jsonData ).find( cur => cur == req.body.cookie ).length ){
            res.send( true );
        }else {
            res.send( false );
        }
    } )
} )

module.exports = router;