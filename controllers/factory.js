const Factory = require('../models/factory.js')
const { validationResult } = require('express-validator')

exports.postAddFactory = (req,res,next) => {
  const errors = validationResult(req)
  const factName = req.body.factName;
  const childGen = req.body.childGen;
  const lRange = req.body.lRange;
  const hRange = req.body.hRange;
  const children = req.body.children;

  const factory = new Factory({
    factName: factName,
    childGen: childGen,
    lRange: lRange,
    hRange: hRange,
    children: children
  })

  //factory.save().then(res => {
    //console.log('Created Factory')
    //console.log("res", res)
    //res.json(`id: ${res._id}`)
  //}).catch(err => {
    //console.log(err)
  //})
  factory.save((err, factory) => {
    if (err) {
      if (!errors.isEmpty()) {
      console.log(`${errors.array()[0].msg}`)
        let message = `${errors.array()[0].msg}`
      res.json(`${message}`).status(500)
      }
    } else {
        console.log(`factory ${factory}`)
        res.status(200).json(`${factory} `)

    }
  })
}

exports.getFactory = (req,res,next) => {
  Factory.find({},(err, factories) => {
    if (err) {
      console.log(err)
    } else {
      res.json(factories)
    }
  })
}

exports.removeFactory = (req,res,next) => {
  console.log(req.body)
  const id = req.body._id
  //id = req.params._id
  console.log(id)
  Factory.deleteOne({"_id": id}, function(err) {
    if (err) {
      console.log(err)
    } else {
      res.status(200).json(`DELETED, ${id}`)
    }
  })
}

exports.updateFactoryName = async (req,res,next) => {
  console.log(req.body)
  const id = await req.body._id;
  const newName = req.body.newName;
  console.log(id, newName)
  Factory.updateOne({"_id": id}, {$set: {factName: newName}}, function(err) {
    if (err) {
    return res.status(500).json("Internal Error")
    } else {
      res.status(200).json(`Name Updated, ${newName}, ${id}`)
    }
  })
}
