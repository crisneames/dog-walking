import { getWalkers, getWalkerCities, getCities } from './database.js';

const walkerCities = getWalkerCities();
const cities = getCities();

//Finding cities per walker
// The function need the walker information, so define a parameter
export const filterWalkerCitiesByWalker = (walker) => {
  // Define an empty array to store all of the assignment objects
  const assignments = [];

  // Iterate the array value of walkerCities
  for (const assignment of walkerCities) {
    // Check if the primary key of the walker equals the foreign key on the assignment
    if (assignment.walkerId === walker.id) {
      // If it does, add the current object to the array of assignments
      assignments.push(assignment);
    }
  }

  // After the loop is done, return the assignments array
  console.log(assignments);
  return assignments;
};

// Define a function that builds a string of city names. Needs a paramter for assignments array.
const assignedCityNames = (assignments) => {
  // Define an empty string that will get appended with matching cities
  let cityNames = '';

  // Iterate the array of assignment objects
  for (const assignment of assignments) {
    // For each assignment, iterate the cities array to find the match
    for (const city of cities) {
      if (city.id === assignment.cityId) {
        // Add the name of the matching city to the string of city names
        //cityNames = `${cityNames} and ${city.name}`;
        cityNames += `${city.name} `;
      }
    }
  }

  // After the loop is done, return the string
  console.log(cityNames);
  return cityNames;
};

document.addEventListener('click', (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith('walker')) {
    //const [, walkerId] = itemClicked.id.split('--');
    const walkerId = itemClicked.id.split('--')[1];

    for (const walker of walkers) {
      if (walker.id === parseInt(walkerId)) {
        const assignments = filterWalkerCitiesByWalker(walker);
        const cities = assignedCityNames(assignments);

        window.alert(`${walker.name} services ${cities}`);
      }
    }
  }
});

const walkers = getWalkers();

export const Walkers = () => {
  let walkerHTML = '<ul>';

  for (const walker of walkers) {
    walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`;
  }

  walkerHTML += '</ul>';
  return walkerHTML;
};
