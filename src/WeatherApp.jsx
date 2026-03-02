import SearchBox from './searchbox'
import InfoBox from './infoBox';
import { useState } from 'react';
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
      city : "Delhi",
      feelslike : 24,
      temp : 25,
      tempMin : 34,
      tempMax : 36,
      humidity : 47,
      weather : "haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };

    return(<div>
        <h2>Weather App By Mahi</h2>
        <SearchBox updateInfo = {updateInfo}/><br/>
        <InfoBox Info={weatherInfo}/>
    </div>)
}