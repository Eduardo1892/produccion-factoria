var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '172.16.30.18',
  user            : 'root',
  password        : '',
  database        : 'db_factoria_control'
});

module.exports = pool