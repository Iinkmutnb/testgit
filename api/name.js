const Router = require('koa-router')
const name = new Router()

name.post('/name',async function (context){


   
context.body=context.request.body.name

}) 
module.exports = name