const express = require( 'express' );
const router = express.Router();
// axios on server
const axios = require( 'axios' );
require( 'dotenv').config();

router.get( '/', ( req, res )=>{
    console.log( '/giphy GET' );
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${ process.env.GIPHY_API_KEY}&limit=10&rating=pg-13`).then( ( 
        response)=>{
            res.send( response.data.data );
        }).catch( ( err )=>{
            console.log( err );
            res.send( 500 );
        })
})

module.exports = router;