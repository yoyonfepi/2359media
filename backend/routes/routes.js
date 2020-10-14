// JavaScript Document
'use strict';

module.exports = function(app) {
    var 2359media = require('./../controller/controller');

    app.route('/')
        .get(2359media.index);
        
    app.route('/participant')
        .post(2359media.participant);
           
}; 
