let mongoose = require('mongoose')
var Device   = mongoose.model("Device")



export let Post = async(ctx, next) => {
    console.log("What have I got")
    console.log(ctx.params)
    console.log(ctx.query)

    var deviceStatus = {
        device_id   : ctx.request.body.device_id,
        set_temp    : ctx.request.body.set_temperature,
        read_temp   : ctx.request.body.read_temperature,
        humidity    : ctx.request.body.humidity,
        latitude    : ctx.request.body.location.latitude,
        longitude   : ctx.request.body.location.longitude,
        time        : ctx.request.body.time,
    }

    console.log(deviceStatus)
    ctx.body = {
        success: true
    }
}