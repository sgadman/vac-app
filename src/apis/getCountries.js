const getCountries = async () =>
  fetch("/api/countries")
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.error(error));

export default getCountries;
