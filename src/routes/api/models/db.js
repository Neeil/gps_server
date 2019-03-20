var mongoose = require('mongoose')

import {
    DB as dbConfig
} from '../../config/config'

mongoose.Promise = global.Promise
mongoose.connect(dbConfig.host)

var db = mongoose.connection

db.on('error', err => {
    //logUtil.logError(err)
})

db.once('open', open => {
    logUtil.info("db.js",'db opened')
})


exports.mongoose = mongoose