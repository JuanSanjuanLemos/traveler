let idCount = 0;

const objectFood = [];
const objectTurism = [];
const objectEvents= [];

const componentFood = [];
const componentTurism = [];
const componentEvents= [];

const divLocal = document.querySelector('.list-local');
const divMeetAll = document.querySelector('.list-all');

const aAll = document.getElementById('all');
const aTurism = document.getElementById('turism');
const aFood = document.getElementById('food');
const aEvents = document.getElementById('events');

function CreateLocal(url,name,type,rating,urlType){
    return{
        url,
        name,
        type,
        rating,
        urlType,
    }
}
function createHTML(local){
    return/*html*/`
    <div class="box-rating">
        <img src="./img/Star.png" alt="Icone estrela">
        <h2>${local.rating}</h2>
    </div>
    <div class="wrapper-name">
        <h2>${local.name}</h2>
        <div class="wrapper-type">
            <h3 class="local-type">${local.type}</h3>
            <img class="type-img" src="${local.urlType}" alt="Icone local">
        </div>
    </div>
    `
}
function createComponent(local){
    idCount++;
    let localHMTL = document.createElement('article');
    localHMTL.classList.add('local-card');
    localHMTL.classList.add("local"+idCount);
    localHMTL.style.backgroundImage = `url(${local.url})`;
    localHMTL.innerHTML = createHTML(local);
    switch(local.type){
        case "Comida e Bebida":
            componentFood.push(localHMTL);
            break
         case "Pontos Turísticos":
             componentTurism.push(localHMTL);
             break
         case "Eventos Organizados":
             componentEvents.push(localHMTL);
             break
    }
}

function createListObjects(local){
    switch(local.type){
        case "Comida e Bebida":
            objectFood.push(local);
            break
         case "Pontos Turísticos":
             objectTurism.push(local);
             break
         case "Eventos Organizados":
             objectEvents.push(local);
             break
    }
}
function writeTopValued(){
    componentAll.forEach(local => {
        let localClone = local.cloneNode(true);
        divLocal.appendChild(localClone)
    });
}
function writeMeetAll(array,x){
    divMeetAll.innerHTML='';
    for(let i =0; i<x;i++){
        array.forEach(local => {
            let localClone = local.cloneNode(true);
            divMeetAll.appendChild(localClone)
        });
    }
}

function removeDecoration(items){
    items.forEach(item => {
        item.classList.remove('-active');
    });
}

const doceECompainha = CreateLocal('./img/Doce-&-Compainha.png','Doce & Compainha','Comida e Bebida',"4,7","./img/cup-img.png");
createListObjects(doceECompainha);
createComponent(doceECompainha);

const lagoDaConceicao = CreateLocal('./img/Lago-da-Conceição.png', 'Lago da Conceição', 'Pontos Turísticos','5,0',"./img/cam-img.png");
createListObjects(lagoDaConceicao);
createComponent(lagoDaConceicao);

const praiaDoCampeche = CreateLocal('./img/Praia-do-Campeche.png', 'Praia do Campeche', 'Pontos Turísticos','4,9',"./img/cam-img.png");
createListObjects(praiaDoCampeche);
createComponent(praiaDoCampeche);

const expoTattoFloripa = CreateLocal('./img/Expo-tatto-Floripa.png', 'Expo Tatto Floripa', 'Eventos Organizados','5,0',"./img/calendar-img.png");
createListObjects(expoTattoFloripa);
createComponent(expoTattoFloripa);

const componentAll = [...componentFood,...componentTurism,...componentEvents]
writeTopValued();


writeMeetAll(componentAll,2);

aAll.addEventListener('click',function(event){
    writeMeetAll(componentAll,1);
    let items = document.querySelectorAll('.item');
    removeDecoration(items);
    event.path[1].classList.add('-active')
})
aTurism.addEventListener('click',function(event){
    writeMeetAll(componentTurism,1);
    let items = document.querySelectorAll('.item');
    removeDecoration(items);
    event.path[1].classList.add('-active')
})
aFood.addEventListener('click',function(){
    writeMeetAll(componentFood,1);
    let items = document.querySelectorAll('.item');
    removeDecoration(items);
    event.path[1].classList.add('-active')
    
})
aEvents.addEventListener('click',function(){
    writeMeetAll(componentEvents,1);
    let items = document.querySelectorAll('.item');
    removeDecoration(items);
})