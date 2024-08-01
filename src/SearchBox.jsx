import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState('');
    let [json,setJson]=useState('');
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="11e4273dcb8482383f5b7d685eaa4cf3";

    let getWeatherInfo = async ()=>{
        let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();
        setJson(jsonResponse.main);
        console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelslike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }
    let handleChange=(e)=>{
        setCity(e.target.value);
    }
    let handleSubmit=async (e)=>{
        e.preventDefault();
        let info= await getWeatherInfo();
        updateInfo(info);

    }
    return(
        <>
        <div>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="CityName" variant="outlined"  onChange={handleChange}value={city}required/>
            <Button variant="contained"type="submit">search</Button>
            </form>
        </div>
        {/*<div>
            <h2>Weather Report in {city}</h2>
            <p>temperature  :{json.temp}</p>
            <p>Max temperature :{json.temp_max}</p>
            <p>Min temperature :{json.temp_min}</p>
            <p>humidity:{json.humidity}</p>
            <p>feelslike:{json.feels_like}</p>
        </div>*/}
        </>
    );
}