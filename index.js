'use strict';

var log4js = require('log4js');
var logger =  log4js.getLogger('index');
var hfc = require('fabric-client');

require('./config.js');

var helper = require('./app/helper');
var query = require('./app/query');

query.getBlockByNumber('peer0.org1.example.com',1,'Jim','org1').then((res) => {
    logger.info(res);
})