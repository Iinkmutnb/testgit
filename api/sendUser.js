const Router = require('koa-router')
const sendUser = new Router()

sendUser.post('/senduser',async function (context){
let data =context.request.body

    console.log(context.request.body.age)
if(context.request.body.age>=20){context.body="adult"}
else if(context.request.body.age<20){context.body="child"}
}) 
module.exports = sendUser