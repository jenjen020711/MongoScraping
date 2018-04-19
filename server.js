// Dependencies
var express = require("express");
var exphbs  = require("express-handlebars");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");

// Initialize Express
var app = express();