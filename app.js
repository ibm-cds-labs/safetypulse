/*jshint node:true*/

// app.js
var express = require('express');
var app = express();
var http = require('http');
var request = require('request');

var dbservice = process.env.DBSERVICE || process.argv[2] || 'https://opendata.mybluemix.net/crimes';

//-- express web server settings
app.set('title', 'SafetyPulse');

// set root to return the map location UI
app.use(express.static(__dirname + '/public'));
app.get('/querycrimes', queryCrimes);
//-- end express settings

var host = (process.env.HOST || 'localhost');
var port = (process.env.PORT || 3000);

app.listen(port, host); // Start server

function queryCrimes(req, res) {
    radius = req.query.radius ? parseInt(req.query.radius) : 500;
	// var q = "https://" + dbuser + ".cloudant.com/" + dbname + "/_design/geo/_geo/spatial?radius="+radius;
    var q = dbservice + "?radius="+radius;
	q += "&lon=" + req.query.lon + "&lat=" + req.query.lat;// + "&limit=200&include_docs=true&format=geojson";
	console.log("calling: " + q);
	request(q, function (err, resp, body) {
		if (err) {
			res.send(err);
			return;
		}
		body = JSON.parse(body);
		res.send(body);
	});
}