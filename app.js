const sayHi = require("./util.js")
const _ = require("lodash")

const items = [1,2,3,[4,5,6 ,[7]]]
const newItems = _.flattenDeep(items)

console.log(newItems)

sayHi("testing name")