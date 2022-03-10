import allList from "./create-cities.js";

let citiesList = document.querySelector('.cities-list');
let notFound = document.querySelector('.not-found');
let citiesSection = document.querySelector('.cities-section');
allList.forEach(city => {
    citiesList.appendChild(city);
});

const inputCity = document.querySelector('.input-search');
document.addEventListener('keypress', function(event){
    if(event.key ==='Enter'){
        notFound.style.display = 'none';
        let valueSearch = getValue();
        let result = checkValue(valueSearch);
        if(result === true){
            addWhite();
        }else{
            notFound.style.display = 'flex';
        };
    }
})
console.log(citiesList.firstChild)
function getValue(){
    let value = inputCity.value;
    inputCity.value ='';
    value = proccesValue(value);
    return value;
}

function proccesValue(value){
    value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    value =value.toUpperCase();
    return value;
}

function checkValue(value){
    let result
    allList.forEach(city => {
        let valueOfCity = proccesValue(getCityName(city));
        if(valueOfCity === value){
            removeWhite();
            city.classList.remove('-off');
            city.classList.add('-on');
            result = true;
        }
    });
    return result;
}
function addWhite(){
    allList.forEach(city => {
        if (!city.classList.contains('-on')){
            city.classList.add('-off')
        }
    });
}
function removeWhite(){
    allList.forEach(city => {
        if (city.classList.contains('-on')){
            city.classList.remove('-on');
        }
    });
}
function getCityName(city){
    return city.children[0].children[0].innerText;
}