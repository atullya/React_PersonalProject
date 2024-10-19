import { createContext, useContext, useEffect, useState } from "react";

// Create the context
export const WeatherContext = createContext();

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

// Function to fetch weather data
let getWeatherData = async (setWeather,city) => {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`
    );
    let data = await response.json();
    setWeather(data);
    console.log("Weather Data", data); // Check the response in the console
  } catch (error) {
    console.log("Error fetching weather data:", error);
  }
};

// WeatherContextProvider component
export const WeatherContextProvider = ({ children }) => {
  let [weatherr, setWeather] = useState(null); // Initialize as an object
let [city,setCity]=useState("")
  useEffect(() => {
    getWeatherData(setWeather,city);
  }, [city]);

  return (
    <WeatherContext.Provider value={{weatherr,setCity}}>
      {children}
    </WeatherContext.Provider>
  );
};
