import React, { useEffect, useState } from 'react';
import CountryListView from './CountryList.view';

import { getAllCountries } from '../../utils/request';
import { cleanMyCountry } from '../../utils/cleanByKey';
import pipe from '../../utils/pipe';

const cleanData = (countries) => {
  return countries.map((country) => cleanMyCountry(country));
};

function CountryListContainer(props) {
  const [countries, setCountries] = useState([]);
  const cleanAndSetCountries = pipe(cleanData, setCountries);

  useEffect(() => {
    getAllCountries().then((response) => {
      cleanAndSetCountries(response.data);
    });
  }, []);
  return <CountryListView countries={countries} />;
}

export default CountryListContainer;
