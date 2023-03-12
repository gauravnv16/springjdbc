// Importing module
var mysql = require('mysql')

var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"examly",
	// database : "aayush"
})

// Connecting to database
connection.connect(function(err) {
	if(err){
	console.log("Error in the connection")
	console.log(err)
	}
	else{
	console.log(`Database Connected`)

    connection.query('CREATE DATABASE STUDENT;',(err1) => {
        if(err1) throw err1;
        console.log("DataBaseCreated!!");
    })
	connection.query(`SHOW DATABASES`,
	function (err, result) {
		if(err)
		console.log(`Error executing the query - ${err}`)
		else
		console.log("Result: ",result)
	})
	}
})
