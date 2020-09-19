const cleanByKey = (keys) => (obj) =>
  keys.reduce((newObj, key) => {
    newObj[key] = obj[key];
    return newObj;
  }, {});

export const cleanMyCountry = cleanByKey([
  'name',
  'alpha2Code',
  'capital',
  'region',
  'population',
  'flag',
]);
