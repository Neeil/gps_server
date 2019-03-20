const router = require('koa-router')()
var apiController = require("./api/controllers/index")

router.prefix('/api')

router
    .post("/device/:deviceId/status", apiController.device.Post)

module.exports = router
