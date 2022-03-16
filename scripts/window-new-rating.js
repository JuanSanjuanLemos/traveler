const windowNewRating = document.querySelector('.window-new-rating');
const openWindowNewRating = document.querySelector('.-new');
function closeWindowNew(){
    windowNewRating.style.display = 'none';
}
openWindowNewRating.addEventListener('click',()=>{
    windowNewRating.innerHTML = /*html*/`
    <div class="box-new-rating">
        <div class="header-new-rating">
            <h2>Adicionar avaliação</h2>
            <button class="button-close" onclick="closeWindowNew()"><img src="../img/Fechar.png" alt="Icone fechar"></button>
        </div>
        <form action="">
            <input type="file" name="file" id="file" accept="image/png, image/jpeg" class="input-img">
            <div class="img-and-name">
                <label class="submit-file" for="file">Upload da sua foto</label>
                <input type="text" id="name" class="full-name" placeholder="Seu nome completo">
            </div>
            <textarea name="comment" class="comment" id="comment" maxlength="240" placeholder="Escreva aqui..."></textarea>
            <div class="box-rating">
                <h2>Sua nota de 1 a 5:</h2>
                <article class="bar-rating" onclick="clickStar(event)">
                    <div class="wrapper-star" id="1">
                        <img src="../img/Star-null.png" alt="Estrela sem valor">
                    </div>
                    <div class="wrapper-star" id="2">
                        <img src="../img/Star-null.png" alt="Estrela sem valor">
                    </div>
                    <div class="wrapper-star" id="3">
                        <img src="../img/Star-null.png" alt="Estrela sem valor">
                    </div>
                    <div class="wrapper-star" id="4">
                        <img src="../img/Star-null.png" alt="Estrela sem valor">
                    </div>
                    <div class="wrapper-star" id="5">
                        <img src="../img/Star-null.png" alt="Estrela sem valor">
                    </div>
                </article>
            </div>
            <div class="alert-and-submit">
                <div class="box-alert">
                    <img src="../img/Alert-orange.png" alt="Icone de alerta">
                    <p>Sua avaliação será analisada
                        para poder ser publicada.</p>
                </div>
                <input type="submit" class="button-submit" value="Enviar avaliação">
            </div>
        </form>
    </div>
    `
    windowNewRating.style.display = `flex`;

    const addPhoto = document.querySelector('.input-img');
    const labelPhoto = document.querySelector('.submit-file');
    const starsRating = document.querySelectorAll('.wrapper-star');
    const submitBtn = document.querySelector('.button-submit');
    const clickStar = document.querySelector('.bar-rating');

    submitBtn.addEventListener('click',()=>{
        windowNewRating.innerHTML = /*html*/`
        <div class='rating-sent'>
            <img src="../img/Emoji-smile.png" alt="Emoji sorridente" />
            <h1 >Avaliação enviada!</h1>
            <p>Agradecemos pelo seu tempo e colaboração.</p>
            <button onclick="closeWindowNew()">Disponha :)</button>
        </div>
        `
    })

    function changeStyle(idStar){
        starsRating.forEach(el => {
            if(el.id<=idStar){
                el.classList.add('-active');
                el.innerHTML=/*html*/`
                <img src="../img/colored-star.png" alt="Estrela com valor">
                `
            }else{
                el.classList.remove('-active');
                el.innerHTML=/*html*/`
                    <img src="../img/Star-null.png" alt="Estrela sem valor">
                    `
            }
        });
    }

    clickStar.addEventListener('click',(event)=>{
        const idStar = event.target.id;
        changeStyle(idStar);
    })
    
    addPhoto.addEventListener('change',()=>{
    labelPhoto.style.background="linear-gradient(90deg, #DCF5DD 0%, rgba(220, 245, 221, 0) 100%)";
    labelPhoto.style.justifyContent= 'space-between';
    labelPhoto.innerHTML = /*html*/`
            <h2>Feito</h2>
            <h3>Trocar foto</h3>
    `
    })
})