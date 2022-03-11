//a caralha do elemento tá sendo substituido, está o ocupando o mesmo espaço da memória
//criar função de criar listas de componente separado por tipo
//mostrar todas as listas de componentes na tela

const objectFood = [];
const objectTurism = [];
const objectEvents= [];

const componentFood = [];
const componentTurism = [];
const componentEvents= [];

const divLocal = document.querySelector('.list-local');
const divMeetAll = document.querySelector('.list-all');

function CreateLocal(url,name,type,rating,urlType){
    return{
        url,
        name,
        type,
        rating,
        urlType
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
    let localHMTL = document.createElement('article');
    localHMTL.classList.add('local-card');
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

const doceECompainha = CreateLocal('./img/doce-&-compainha.png','Doce & Compainha','Comida e Bebida',"4,7","./img/cup-img.png");
createListObjects(doceECompainha);
createComponent(doceECompainha);

const lagoaDaConceicao = CreateLocal('./img/lago-da-conceição.png', 'Lago da Conceição', 'Pontos Turísticos','5,0',"./img/cam-img.png");
createListObjects(lagoaDaConceicao);
createComponent(lagoaDaConceicao);

const praiaDoCampeche = CreateLocal('./img/praia-do-campeche.png', 'Praia do Campeche', 'Pontos Turísticos','4,9',"./img/cam-img.png");
createListObjects(praiaDoCampeche);
createComponent(praiaDoCampeche);

const expoTattoFloripa = CreateLocal('./img/expo-tatto-floripa.png', 'Expo Tatto Floripa', 'Eventos Organizados','5,0',"./img/calendar-img.png");
createListObjects(expoTattoFloripa);
createComponent(expoTattoFloripa);

const componentAll = [...componentFood,...componentTurism,...componentEvents]
const componentMeetAll = componentTurism;
componentAll.forEach(local => {
    divLocal.appendChild(local)
    console.log(local)
});
componentMeetAll.forEach(local => {
    divMeetAll.appendChild(local)
    console.log(local)
});