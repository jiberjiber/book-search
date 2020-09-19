import axios from 'axios';

const getWrapper = (url) => (param = '') => axios.get(url + param);

export const getAllCountries = getWrapper(
  'https://restcountries.eu/rest/v2/all'
);
export const getCountryByCode = getWrapper(
  'https://restcountries.eu/rest/v2/alpha/'
);
