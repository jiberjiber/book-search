import React from 'react';

function CountryListView(props) {
  return (
    <div>
      {props.countries.map((country) => (
        <div key={country.alpha2Code}>
          <div>Name: {country.name}</div>
          <div>Capital: {country.capital}</div>
          <div>Region: {country.region}</div>
          <div>Population: {country.population}</div>
          <img src={country.flag} />
        </div>
      ))}
    </div>
  );
}

export default CountryListView;
