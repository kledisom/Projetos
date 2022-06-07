var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("conected!");
    var sql = "CREATE TABLE testes (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result){
      if (err) throw err;
      console.log("tabela criada");
    });
});


