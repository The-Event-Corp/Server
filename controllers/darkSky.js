var DarkSky = require('forecast.io');
var axios = require('axios')
const moment = require ('moment')
var options = {
    APIKey: '7154cd739ca2f07553df5146fc5e9bcf',
    timeout: 1000
  },
  darksky = new DarkSky(options);

module.exports = {
    darkskyapi(req,res){
        var date = new Date() 
        var unixTime = Math.floor(date.getTime()/1000); 
        axios.get(`https://api.darksky.net/forecast/7154cd739ca2f07553df5146fc5e9bcf/-6.208016,106.863150,${unixTime}`)
        .then(function (response) {
            var dataWeather = response.data.daily.data[0]
            var time = moment.unix(dataWeather.time).format("DD-MM-YYYY");
            var sunrise = moment.unix(dataWeather.sunriseTime).format("DD-MM-YYYY HH:mm:ss")
            var sunset = moment.unix(dataWeather.sunsetTime).format("DD-MM-YYYY HH:mm:ss")
            console.log(time)

            var weather = {
                            location:response.data.timezone,
                            date:time,
                            summary:dataWeather.summary,
                            temperatureHigh:dataWeather.temperatureHigh,
                            temperatureLow:dataWeather.temperatureLow,
                            windSpeed:dataWeather.windSpeed,
                            sunriseTime:sunrise,
                            sunsetTime:sunset
                        }
            console.log(weather);
            
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

    }
}