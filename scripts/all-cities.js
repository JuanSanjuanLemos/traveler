import allList from "./create-cities.js";

let citiesList = document.querySelector('.cities-list');
let notFound = document.querySelector('.not-found');
allList.forEach(city => {
    citiesList.appendChild(city);
});

const city1 = document.getElementById('city');

city1.addEventListener('click',function(event){
    console.log(event);
    window.location.href=`/${city1.id}.html`;
})

const inputCity = document.querySelector('.input-search');
document.addEventListener('keypress', function(event){
    if(event.key ==='Enter'){
        resultsearch();
    }
})

const imgSearch = document.querySelector('.img-search');
imgSearch.addEventListener('click',function(){
    resultsearch();
})

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
function resultsearch(){
    notFound.style.display = 'none';
    let valueSearch = getValue();
    let result = checkValue(valueSearch);
    if(result === true){
        addWhite();
    }else{
        notFound.style.display = 'flex';
    };
}
