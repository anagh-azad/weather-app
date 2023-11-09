import React,{useEffect,useState} from "react";
import axios from "axios";

function App() {

  const [temp,setTemp]=useState("");
  const [humidity,setHumidity]=useState("");
  const [windSpeed,setWindSpeed]=useState("");
  const [location,setLocation]=useState("Algeria");
  const [disLocation,setdisLocation]=useState("Algeria");

  //const url="https://api.openweathermap.org/data/2.5/weather?q=Algeria&APPID=794ee95e63c5a32aaf88cd813fa2e425";

  const searchLocation=(event)=>{
    if(event.key == "Enter"){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=794ee95e63c5a32aaf88cd813fa2e425`)
    .then((res)=>{
      console.log(res.data);
      setTemp(res.data.main.temp);
      setHumidity(res.data.main.humidity);
      setWindSpeed(res.data.wind.speed);
      setdisLocation(location);
    })
  }
  }

  return (
    <div className="app">

      <div className="search">
        <input
        value={location}
        onChange={event=>setLocation(event.target.value)}
        onKeyDown={searchLocation}
        placeholder="Enter Location"
        type="text"
        >
        </input>
      </div>

      <div className="container">

        <div className="top">
          <div className="location">{disLocation}</div>
          <div className="temp">{temp} K</div>
        </div>

        <div className="bottom">
          <div className="humidity">Humidity : {humidity}%</div>
          <div className="wind">Wind Speed : {windSpeed} MPH</div>
        </div>

      </div>
    </div>
  )
}

export default App;
