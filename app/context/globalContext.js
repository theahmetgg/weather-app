"use Client";
import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";
const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});

  const [airQuality, setairQuality] = useState({});
  const [fiveDayForecast, setFiveDayForecast] = useState({});
  const [uvIndex, setUvIndex] = useState({});

  const fetchForecast = async () => {
    try {
      const res = await axios.get("api/weather");

      setForecast(res.data);
    } catch (error) {
      console.log("Error fetching forecast data: ", error.message);
    }
  };

  //Air Quality
  const fetchAirQuality = async () => {
    try {
      const res = await axios.get("api/pollution");
      setairQuality(res.data);
    } catch (error) {
      console.log("Error fetching air quality data:", error.message);
    }
  };

  //five day forecast
  const fetchFiveDayForecast = async () => {
    try {
      const res = await axios.get("api/fiveday");
      setFiveDayForecast(res.data);
    } catch (error) {
      console.log("Error fetching five day forecast data:", error.message);
    }
  };

  //fetch uv data
  const fetchUvIndex = async () => {
    try {
      const res = await axios.get("/api/uv");
      setUvIndex(res.data);
    } catch (error) {
      console.log("Error fetching the forecast:", error);
    }
  };

  useEffect(() => {
    fetchForecast();
    fetchAirQuality();
    fetchFiveDayForecast();
    fetchUvIndex();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ forecast, airQuality, fiveDayForecast, uvIndex }}
    >
      <GlobalContextUpdate.Provider value={{ setForecast }}>
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
