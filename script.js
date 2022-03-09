let list1 = document.getElementById('list1');
let list2 = document.getElementById('list2');
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

function createComponent(city,cityHTML){
    let cityHMTL = document.createElement('article');
    cityHMTL.classList.add('city-card');
    cityHMTL.style.backgroundImage = `url(${city.url})`;
    cityHMTL.innerHTML = cardHTML(city);
    return cityHMTL;
}

let florianopolis = CreateCard('./img/florianópolis.png','Florianópolis', 98);
list1.appendChild(createComponent(florianopolis,'florianopolisHTML'));

let bombinhas = CreateCard('./img/bombinhas.png','Bombinhas', 43);
list1.appendChild(createComponent(bombinhas,'bombinhasHTML'));

let blumenau = CreateCard('./img/blumenau.png','Blumenal', 29);
list2.appendChild(createComponent(blumenau,'blumenalHTML'));

let aguasMornas = CreateCard('./img/aguas-mornas.png','Águas Mornas', 13);
list2.appendChild(createComponent(aguasMornas,'blumenalHTML'));