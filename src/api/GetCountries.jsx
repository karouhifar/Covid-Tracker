const getCountries = async () =>
  await fetch("https://disease.sh/v3/covid-19/countries");
// eslint-disable-next-line
export default { getCountries };
