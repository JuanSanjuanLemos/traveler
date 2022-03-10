import allList from "./create-cities.js";

let citiesList = document.querySelector('.cities-list');

allList.forEach(city => {
    citiesList.appendChild(city);
});

const inputCity = document.querySelector('.input-search');
document.addEventListener('keypress', function(event){
    if(event.key ==='Enter'){
        let valueSearch = getValue();
        let result = checkValue(valueSearch);
        if(result === true){
            addWhite();
        } 
    }
})

function getValue(){
    return inputCity.value;
}
function checkValue(value){
    let result
    allList.forEach(city => {
        let valueOfCity = (city.innerText);
        if(valueOfCity.includes(value)){
            removeWhite();
            city.classList.remove('-off');
            city.classList.add('-on');
            console.log(value);
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