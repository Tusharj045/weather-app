const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=ba0440d570c9175d914ff6c4b8de1105&query=' + latitude + ','+ longitude
    request({url : url, json:true}, (error, response) =>{
        if (error){
            callback('Unable to connect to location services!', undefined)
        }else if (response.body.error){
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {temperature : response.body.current.temperature, 
                description : response.body.current.weather_descriptions[0]})
        }
    })
}
module.exports = forecast