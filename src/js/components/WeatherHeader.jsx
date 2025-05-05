import React from "react";
import { useState, useEffect } from "react";

const WeatherHeader = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const apiKey = "2cbb1d1e13e746aeb62abc123456abcd";

  const handleAddCity = async () => {
    if (!inputValue.trim()) {
      setError("please enter valid city name");
      setDescription("");
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        setError("cannot fetch weather");
        setDescription("");
        return;
      }
      const data = await response.json();
      const desc = data.weather[0].description;
      const temp = data.main.temp;
      setError("");

      setDescription(`It's ${desc} and ${temp}°C in ${data.name}.`);
    } catch (error) {
      console.error("error happened, please try again!");
      setError("try again");
      setDescription("");
    }
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        placeholder="type a city name..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddCity}>Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {description && <p className="CityWeather">{description}</p>}
    </>
  );
};

export default WeatherHeader;
