const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysqldb',
  user: 'root',
  password: 'root',
  database: 'z_users'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

module.exports = connection;
