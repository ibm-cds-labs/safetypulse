/*jshint node:true*/

// app.js
// This file contains the server side JavaScript code for your application.
// This sample application uses cron to run this app every day
// console.log('TESTVAR: ' + process.env.TESTVAR);
var express = require('express');
var app = express();
var http = require('http');
var request = require('request');

//-- Cloudant settings
// var password = process.env.CLOUDANTPASSWORD || process.argv[4];
// var dbuser = process.env.CLOUDANTUSER || process.argv[3] || 'opendata';
// var dbname = process.env.CLOUDANTDB || process.argv[2] || 'crimes';
var dbservice = process.env.DBSERVICE || process.argv[2] || 'https://opendata.mybluemix.net/crimes';
//-- end Cloudant

//-- express web server settings
app.set('title', 'SafetyPulse');

// set root to return the map location UI
app.use(express.static(__dirname + '/public'));
app.get('/querycrimes', queryCrimes);
//-- end express settings

// The IP address of the Cloud Foundry DEA (Droplet Execution Agent) that hosts this application:
var host = (process.env.VCAP_APP_HOST || 'localhost');
// The port on the DEA for communication with the application:
var port = (process.env.PORT || 3000);
// Start server
app.listen(port, host);

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