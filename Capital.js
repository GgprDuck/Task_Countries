const express = require('express');
const router = express.Router();

const countries = require("./Countries");

router.get("/", async (req,res) => {
    const country = countries.find((el) => el.country == req.query.country);
    if (country){
     const answer = "Capital of " + country.country + " is " + country.city;
     
     return res.status(200).send(answer);   
    } 

    return res.status(401).send("Country not found");
});

module.exports = router;