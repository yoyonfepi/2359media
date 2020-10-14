// JavaScript Document
let mysql = require('mysql');

let connection = mysql.createConnection({
  
            host    : "localhost",
            user    : "root",
            password: "",
            db      : "task_db"
            
});

connection.connect(function(err) {  
    
    if (err) throw err;  
    console.log("Mysql connected!");
    
    /*connection.query("CREATE DATABASE task_db", function (err, result) {  
    if (err) throw err;  
    console.log("Database created");  
    }); */ 
    
    
}); // connection.connect     
