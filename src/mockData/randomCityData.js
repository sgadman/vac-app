const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomCityData = () => {
  const numberOfCities = randomIntFromInterval(10, 100);

  const cityData = [];

  for (let i = 1; i <= numberOfCities; i++) {
    const population = randomIntFromInterval(500, 10000000);

    const vacPercentage = randomIntFromInterval(0, 100) / 100;
    const vaccinated = Math.ceil(population * vacPercentage);

    const dosesPercentage = randomIntFromInterval(0, 100) / 100;
    const doses = Math.ceil(vaccinated * dosesPercentage);

    cityData.push({ city: `City ${i}`, population, vaccinated, doses });
  }

  return cityData;
};

export default randomCityData;
