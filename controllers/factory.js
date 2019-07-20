const Factory = require('../models/factory.js')

exports.postAddFactory = (req,res,next) => {
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

  factory.save().then(res => {
    console.log('Created Factory')
  }).catch(err => {
    console.log(err)
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
