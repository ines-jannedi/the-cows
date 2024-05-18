const db = require('../database.js');






exports.postcowsmodel = (callback, name, description, age) => {
  var sql = "INSERT INTO cows (name, description , age) VALUES (?,?,?)";
 
  db.query(sql, [name, description, age], (err, result) => {
    callback(err, result);
  });
}


exports.getcowsmodel = (callback)=>{
  var sql = "select * from cows"
  db.query(sql,(err,result)=>{
   callback(err,result)
  })
}


exports.updatecowmodel = (callback,name,description,age,id)=>{
  var sql = "update cows set name = ?, description = ?, age = ? where id = ?"
  db.query(sql,[name,description,age,id],(err,result)=>{
    callback(err,result)
  })
}

exports.deletecowmodel = (callback,id)=>{
  var sql = "DELETE FROM cows WHERE id = ?"
  db.query(sql,[id],(err,result)=>{
    callback(err,result)
  })

}






