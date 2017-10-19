require('dotenv').config()
var mysql      = require('mysql');
var data = require('./data');


var conn = mysql.createConnection({
  host     : process.env.DB_HOST,
  port     : process.env.DB_PORT,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE,
});

conn.connect();

var  sql = 'INSERT INTO tmp_area(code,name,parent) VALUES(?,?,?)';

for (parent in data) {
	const item = data[parent];  
	for (key in item) {

		const params = [key,item[key],parent];

		conn.query(sql,params,function (err, result) {
	        if(err){
	         console.log('[INSERT ERROR] - ',err.message);
	         return;
	        }  
		});
	}
}


conn.query('SELECT COUNT(1) as cnt from tmp_area', function (error, results, fields) {
  if (error) throw error;
  console.log('Total : ', results[0].cnt);
});


 
conn.end();