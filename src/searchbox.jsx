import { useState } from "react"
import TextField from '@mui/material/TextField';

export default function SearchBox({updateInfo}){
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_URL ='https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '8944018027a445b3f206bbf9fde87ac8';
    
    let getWeather = async ()=>{
       try{
         const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const JsonResponse = await response.json();
        let result = {
            city : JsonResponse.name,
            feelsLike : JsonResponse.main.feels_like,
            humidity : JsonResponse.main.humidity,
            temp : JsonResponse.main.temp,
            tempMax : JsonResponse.main.temp_max,
            tempMin : JsonResponse.main.temp_min,
            type : JsonResponse.weather[0].description,
        };
        return result;

       }catch(err){
        throw err;
       }
    };

    function handleInput(evt){
        setCity(evt.target.value);
    };
    async function handleSubmit(evt){
        try{
            evt.preventDefault();
        setCity("");
        const newInfo = await getWeather();
        updateInfo(newInfo);
        console.log(newInfo);
        setError(false);
        }catch(err){
            setError(true);
        };
    };

    return(
        <form onSubmit={handleSubmit}>
            <TextField
              required
              id="outlined-required"
              label="City"
              value={city}
              onChange={handleInput}
            />
            <br /><br />
            <button type="submit" variant="contained">Search</button>
            {error && <h4 style={{color : "red", opacity : "0.7"}}>Incorrect Input or Details not Available</h4>}
        </form>
    );
};