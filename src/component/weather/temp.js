// https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=c7f84a63badf38bfc958408371676dbc
import { useState, useEffect } from 'react'
import './style.css'
import WeatherCard from './weatherCard'

const Temp = () => {
    const [searchValue, setSearchValue] = useState("kolkata")
    const [tempInfo, setTempInfo] = useState({})

    const getWeatherInfo = async () =>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=c7f84a63badf38bfc958408371676dbc`
            const res = await fetch(url);
            const data = await res.json();
            if(data.cod == 404){
                alert(data.message) 
            }else if(data.cod == 200){
                const {main:mood} = data.weather[0]
                const {temp,pressure,humidity} = data.main
                const {speed} = data.wind
                const {country,sunrise} = data.sys
                const {name,cod} = data
                
                const myWeather = {
                    mood,temp,pressure,humidity,speed,country,sunrise,name,cod
                }
                setTempInfo(myWeather)
            }else{
                alert(data.message)
            }
        }catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
       getWeatherInfo();
    },[])

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" id="search" placeholder="Seach..." value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} autoFocus className="searchTerm" />
                    <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
                </div>
            </div>

            {/* temp card */}
            <WeatherCard tempInfo={tempInfo} />
           
        </>
    )
}

export default Temp
