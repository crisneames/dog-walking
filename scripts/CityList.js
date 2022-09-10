import { getWalkers, getCities, getWalkerCities } from './database.js';

//Update the CityList module to invoke getCities() now and store its return value in cities.
const cities = getCities();

const walkers = getWalkers();

const walkerCities = getWalkerCities();

//Update the for..of loop to iterate the array value of cities.
export const CityList = () => {
  let citiesHTML = '<ol>';

  for (const city of cities) {
    citiesHTML += `<li>${city.name}</li>`;
  }

  citiesHTML += '</ol>';

  return citiesHTML;
};

// building city names string

//document.addEventListener('click', (event) => {
// for (const walker of walkers) {
//   if (walker.id === parseInt(walkerId)) {
//     const assignments = filterWalkerCitiesByWalker(walker);
//     const cities = assignedCityNames(assignments);

//       window.alert(`${walker.name} services ${cities}`);
//     }
//   }
// });
