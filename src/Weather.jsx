import {useState} from 'react';
import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
export default function Weather(){
    const [weatherInfo,setWeatherInfo]=useState({
        temp:"22",
        feelslike:"25",
        tempMin:"19",
        tempMax:"26",
        humidity:"55",
        weather:"haze",
        
    });
    let updateInfo=(res)=>{
        setWeatherInfo(res);
    }
    return(
        
        <>
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    </>

    );
}