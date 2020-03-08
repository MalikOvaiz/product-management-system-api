var express = require('express');
var router = express.Router();
const pool = require('../db_connector');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
	res.send(' uer login api');

	pool.getConnection(function(err, connection) {
	  	if (err) {
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }  
	  	connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
		    // When done with the connection, release it.
		    connection.release();
		 	console.log('The solution is: ', results[0].solution);
		    // Handle error after the release.
		    if (error) throw error;
		 
		    // Don't use the connection here, it has been returned to the pool.
		 });
	});

});

module.exports = router;
