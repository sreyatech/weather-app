import {useState,useEffect} from 'react'

const WeatherCard = ({tempInfo}) => {
    const { mood,temp,pressure,humidity,speed,country,sunrise,name,cod} = tempInfo
    const [weatherMood, setWeatherMood] = useState("")

    let sec = sunrise;
    const date = new Date(sec * 1000);
    const timeStr = `${date.getHours()}:${date.getMinutes()}`

    useEffect(()=>{
        if(mood){
            switch(mood) {
                case "Clouds" : setWeatherMood("wi-day-cloudy")
                break;
                case "Rain" : setWeatherMood("wi-day-rain")
                break;
                case "Haze" : setWeatherMood("wi-fog")
                break;
                case "Smoke" : setWeatherMood("wi-smoke")
                break;
                case "Mist" : setWeatherMood("wi-night-alt-cloudy")
                break;
                case "Clear" : setWeatherMood("wi-night-clear")
                break;
                default:
                case "Sunny" : setWeatherMood("wi-day-sunny")
                break;
            }
        }
    },[mood])
    return (
        <>
          <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherMood}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{mood}</div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>

                {/* 4 column section */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-sunset"}></i></p>
                        <p className="extra-info-leftside">{timeStr} PM <br />Sunset</p>
                    </div>
                    <div className="two-sided-section">
                        <p><i className={"wi wi-humidity"}></i></p>
                        <p className="extra-info-leftside">{humidity} <br />Humidity</p>
                    </div>
                </div>
                    <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-day-rain"}></i></p>
                        <p className="extra-info-leftside">{pressure} <br />Pressure</p>
                    </div>
                    <div className="two-sided-section">
                        <p><i className={"wi wi-strong-wind"}></i></p>
                        <p className="extra-info-leftside">{speed} <br />Speed</p>
                    </div>
                </div>
            </div>
        </article>   
        </>
    )
}

export default WeatherCard
