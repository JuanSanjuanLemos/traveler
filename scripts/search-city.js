// criar cards no javascript com url,nome e tipo
// adicionar cards no top avaliados
//criar destaque mobile
//criar destaque desktop
//adicionar cards no conheça todos
//separar cards em seções por tipo
//criar avaliações

const divLocal = document.querySelector('.list-local');
const listLocal = [];


function CreateLocal(url,name,type,rating){
    return{
        url,
        name,
        type,
        rating
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
            <img class="type-img" src="./img/cup-img.png" alt="Icone xícara">
        </div>
    </div>
    `
}
function createComponent(local){
    let localHMTL = document.createElement('article');
    localHMTL.classList.add('local-card');
    localHMTL.style.backgroundImage = `url(${local.url})`;
    localHMTL.innerHTML = createHTML(local);
    return localHMTL;
}


const doceECompainha = CreateLocal('./img/doce-&-compainha.png','Doce & Compainha','Comida e Bebida',"4,7");
listLocal.push(createComponent(doceECompainha));

const lagoaDaConceicao = CreateLocal('./img/lago-da-conceição.png', 'Lago da Conceição', 'Pontos Turísticos','5,0');
listLocal.push(createComponent(lagoaDaConceicao));

const praiaDoCampeche = CreateLocal('./img/praia-do-campeche.png', 'Praia do Campeche', 'Pontos Turísticos','4,9');
listLocal.push(createComponent(praiaDoCampeche));

const expoTattoFloripa = CreateLocal('./img/expo-tatto-floripa.png', 'Expo Tatto Floripa', 'Eventos organizados','5,0');
listLocal.push(createComponent(expoTattoFloripa));


listLocal.forEach(local => {
    divLocal.insertAdjacentElement("beforeend", local);
});