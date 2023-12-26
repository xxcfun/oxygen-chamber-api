const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const useRoutes = require('../router')

const app = new Koa()

app.useRoutes = useRoutes

app.use(bodyParser())
app.useRoutes()

module.exports = app
