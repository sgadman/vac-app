const getVacData = async (country, state) => {
  const params = { country, state };

  const query = Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join("&");

  const url = `/api/vacData?${query}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export default getVacData;
