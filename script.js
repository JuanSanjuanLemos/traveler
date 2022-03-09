let list1 = document.getElementById('list1');
let list2 = document.getElementById('list2');
let allList = [];
function CreateCard(url, cidade,locais){
    return{
        url,
        cidade,
        locais
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
    cityHMTL.classList.add('city-card');
    cityHMTL.style.backgroundImage = `url(${city.url})`;
    cityHMTL.innerHTML = cardHTML(city);
    return cityHMTL;
}

let florianopolis = CreateCard('./img/florianópolis.png','Florianópolis', 98);
list1.appendChild(createComponent(florianopolis));
allList.push(createComponent(florianopolis));

let bombinhas = CreateCard('./img/bombinhas.png','Bombinhas', 43);
list1.appendChild(createComponent(bombinhas));
allList.push(createComponent(bombinhas));

let blumenau = CreateCard('./img/blumenau.png','Blumenal', 29);
list2.appendChild(createComponent(blumenau));
allList.push(createComponent(blumenau));

let aguasMornas = CreateCard('./img/aguas-mornas.png','Águas Mornas', 13);
list2.appendChild(createComponent(aguasMornas));
allList.push(createComponent(aguasMornas));

let imbituba = CreateCard('./img/imbituba.png','Imbituba', 61);
allList.push(createComponent(imbituba));

let jaraguaDoSul = CreateCard('./img/jaragua-do-sul.png','Jaraguá do Sul', 13);
allList.push(createComponent(jaraguaDoSul));

let lages = CreateCard('./img/lages.png','Lages', 19);
allList.push(createComponent(lages));

let rioDoSul = CreateCard('./img/rio-do-sul.png','Rio do Sul', 27);
allList.push(createComponent(rioDoSul));