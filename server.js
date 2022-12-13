/********************************************************************************* 
*  WEB322 – Assignment 6 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: Sandeep Prashar  Student ID: 161968219 Date: 12-12-2022
* 
*  Online (Cyclic) URL: https://red-troubled-tortoise.cyclic.app/
* 
********************************************************************************/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
app.get("/", (req, res) => {
    res.send("Sandeep_Prashar - 161968219");
});
app.listen(HTTP_PORT);