const getCountries = async () =>
  fetch("/api/countries")
    .then((res) => res.json())
    .then((data) => data);

export default getCountries;
