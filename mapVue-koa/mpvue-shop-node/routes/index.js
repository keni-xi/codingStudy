const router = require('koa-router')({
  prefix: '/lm'
})
const controllers = require('../controllers/index')

// 首页相关的接口
router.get('/index/index', controllers.home.index)

module.exports = router