var mongoose = require("../db").mongoose

var Schema = mongoose.Schema

var DeviceSchema = new Schema ({
    device_id : {type: String},
    set_temp  : {type: Number},
    read_temp : {type: Number},
    humidity  : {type: Number},
    latitude  : {type: String},
    longitude : {type: String},
    time      : {type: Date, default: Date.now}
})

module.exports = mongoose.model("Device", DeviceSchema)