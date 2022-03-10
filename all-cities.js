import allList from "./create-cities.js";

let citiesList = document.querySelector('.cities-list');

allList.forEach(city => {
    citiesList.appendChild(city);
});