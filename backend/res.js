// JavaScript Document
'use strict';

exports.send = function(values,status, res) {
  
  var data = {
      
      'status': status,
      'values': values
      
  };
  
  res.json(data);
  res.end();
  
};
