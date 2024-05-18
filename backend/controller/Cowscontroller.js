const cowmodel = require("../model/Cowsmodel.js");






exports.postcowcontroller = (req,res) => {
  cowmodel.postcowsmodel(
    (err, result) => {
      res.json(result);
    },
    req.body.name,
    req.body.description,
    req.body.age
  );
}

exports.getcowcontroller = (req,res)=>{
  cowmodel.getcowsmodel((err,result)=>{
    res.send(result)
  })
}

exports.updatecowcontroller =(req,res)=>{
 cowmodel.updatecowmodel((err,result)=>{
  res.send(result)
 },req.body.name,req.body.description,req.body.age,req.params.id)
}


exports.deletecowcontroller = (req,res)=>{
  cowmodel.deletecowmodel((err,result)=>{
    res.send(result)
  },req.params.id)
}
