import { useEffect, useState } from "react";
import axios from "axios";
import Country from "./components/Country";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((error) => {
        console.log(`Error fetching countries: ${error}`);
      });
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()) ||
      country.name.official.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <form>
        <label htmlFor="search">find countries </label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div>
        {search && filteredCountries.length > 10 && (
          <p>Too many matches. Specify another filter</p>
        )}

        {search &&
          filteredCountries.length <= 10 &&
          filteredCountries.length > 1 &&
          filteredCountries.map((country) => (
            <p key={country.name.official}>{country.name.common}</p>
          ))}

        {search && filteredCountries.length === 1 && (
          <Country country={filteredCountries[0]} />
        )}
      </div>
    </div>
  );
}
export default App;
