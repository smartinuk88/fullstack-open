import axios from "axios";
import { useEffect, useState } from "react";

function Country({ country }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&units=metric&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
      )
      .then((res) => {
        const data = res.data;
        setWeatherData(data);
      })
      .catch((error) => {
        console.log(`Error fetching weather data: ${error}`);
      });
  }, [country]);
  return (
    <div>
      <header>
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital[0]}</p>
        <p>Area {country.area}</p>
      </header>
      <section>
        <h2>Languages</h2>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </section>
      <section>
        <div>
          <img
            src={country.flags.svg}
            alt={country.flags.alt}
            style={{ width: 200, height: "auto" }}
          />
        </div>
      </section>
      {weatherData && (
        <section>
          <h2>Weather in {country.capital[0]}</h2>
          <p>Temperature {weatherData.main.temp} Celsius</p>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={`${weatherData.weather[0].main} icon`}
            />
          </div>
          <p>Wind {weatherData.wind.speed} m/s</p>
        </section>
      )}
    </div>
  );
}
export default Country;
