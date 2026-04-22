function Country({ country }) {
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
    </div>
  );
}
export default Country;
