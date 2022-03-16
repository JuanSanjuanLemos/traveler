let allList = [];
function CreateCard(url, cidade,locais,page){
    return{
        url,
        cidade,
        locais,
        page
    };
}

function cardHTML(city){
    return/*html*/`
        <div>
            <h2>${city.cidade}</h2>
            <h3>${city.locais} locais</h3>
        </div>
    `
}

function createComponent(city){
    let cityHMTL = document.createElement('article');
    cityHMTL.setAttribute('id',city.page);
    cityHMTL.classList.add('city-card');
    cityHMTL.style.backgroundImage = `url(${city.url})`;
    cityHMTL.innerHTML = cardHTML(city);
    return cityHMTL;
}

let florianopolis = CreateCard('./img/Florianópolis.png','Florianópolis',98,'city');
allList.push(createComponent(florianopolis));

let bombinhas = CreateCard('./img/Bombinhas.png','Bombinhas', 43);
allList.push(createComponent(bombinhas));

let blumenau = CreateCard('./img/Blumenau.png','Blumenal', 29);
allList.push(createComponent(blumenau));

let aguasMornas = CreateCard('./img/Aguas-Mornas.png','Águas Mornas', 13);
allList.push(createComponent(aguasMornas));

let imbituba = CreateCard('./img/Imbituba.png','Imbituba', 61);
allList.push(createComponent(imbituba));

let jaraguaDoSul = CreateCard('./img/Jaragua-do-Sul.png','Jaraguá do Sul', 13);
allList.push(createComponent(jaraguaDoSul));

let lages = CreateCard('./img/Lages.png','Lages', 19);
allList.push(createComponent(lages));

let rioDoSul = CreateCard('./img/Rio-do-Sul.png','Rio do Sul', 27);
allList.push(createComponent(rioDoSul));

export default allList;