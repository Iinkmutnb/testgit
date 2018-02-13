const Koa = require('koa')
const Router = require('koa-router')
const Bodyparser = require('koa-bodyparser')
const App = new Koa()
const router = new Router()
const sendUser =  require('./api/sendUser.js')
const name =  require('./api/name.js')
App.use(Bodyparser())

router.use('/s',sendUser.routes())
router.use('/s',name.routes())



router.get('/:name/:age',async context=> {
	console.log(context.params.name+context.params.age)
    let data={
    	name:context.params.name,
    	age:context.params.age

    }
    context.body=data
    console.log("/nasasas");
    
})
App.use(router.routes())
App.use(router.allowedMethods())
App.listen(5000)
