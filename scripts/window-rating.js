const windowRating = document.querySelector('.window-all-ratings');
const openWindowRating = document.querySelector('.-view');


function closeWindow(){
    windowRating.style.display = "none";
}

openWindowRating.addEventListener('click',()=>{
    windowRating.style.display = 'flex';
    windowRating.innerHTML= /*html*/`
        <div class="box-ratings">
            <div class="header-all-ratings">
                <div class="rating-and-comment">
                    <h2>Nota 4,5</h2>
                    <div class="wrapper-comments">
                        <img src="../img/message-square.png" alt="Icone mensagem">
                        <p class="amount-comments">23 comentários</p>
                </div>
                </div>
                <div class="add-and-close">
                    <p>Adicionar avaliação</p>
                    <button class="button-close" onclick="closeWindow()"><img src="../img/Fechar.png" alt="Icone fechar"></button>
                </div>
            </div>
            <div class="all-ratings">
                <article class="rating-card -all">
                    <img src="../img/Avatar-patricksom.png" alt="Avatar Patricksom Vieras">
                    <div>
                        <div class="name-and-stars">
                            <h2 class="user-name">Patricksom Vieras</h2>
                        </div>
                        <p>
                            Grande variedade de bolos, cucas, tortas e algumas opções de salgados.
                        </p>
                        <div class="wrapper-stars">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colorless-star.png" alt="Estrela não preenchida">
                        </div>
                    </div>
                </article>
                <article class="rating-card -all">
                    <img src="../img/avatar-Maria-Eduarda.png" alt="Avatar Maria Eduarda">
                    <div>
                        <div class="name-and-stars">
                            <h2 class="user-name">Maria Eduarda</h2>
                        </div>
                        <p>
                            Todos os produtos comercializados são de excelente qualidade, recomendo!
                        </p>
                        <div class="wrapper-stars">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                        </div>
                    </div>
                </article>
                <article class="rating-card -all">
                    <img src="../img/Avatar-Antônio.png" alt="Avatar Antônio Rachaduz">
                    <div>
                        <div class="name-and-stars">
                            <h2 class="user-name">Antônio Rachaduz</h2>
                        </div>
                        <p>
                            Parabéns aos proprietários e funcionários pelo bom atendimento. Lugar aconchegante e com delícias variadas.
                        </p>
                        <div class="wrapper-stars">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colorless-star.png" alt="Estrela não preenchida">
                        </div>
                    </div>
                </article>                
                <article class="rating-card -all">
                    <img src="../img/Avatar-patricksom.png" alt="Avatar Patricksom Vieras">
                    <div>
                        <div class="name-and-stars">
                            <h2 class="user-name">Patricksom Vieras</h2>
                        </div>
                        <p>
                            Grande variedade de bolos, cucas, tortas e algumas opções de salgados.
                        </p>
                        <div class="wrapper-stars">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colorless-star.png" alt="Estrela não preenchida">
                        </div>
                    </div>
                </article>
                <article class="rating-card -all">
                    <img src="../img/avatar-Maria-Eduarda.png" alt="Avatar Maria Eduarda">
                    <div>
                        <div class="name-and-stars">
                            <h2 class="user-name">Maria Eduarda</h2>
                        </div>
                        <p>
                            Todos os produtos comercializados são de excelente qualidade, recomendo!
                        </p>
                        <div class="wrapper-stars">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                        </div>
                    </div>
                </article>
                <article class="rating-card -all">
                    <img src="../img/Avatar-Antônio.png" alt="Avatar Antônio Rachaduz">
                    <div>
                        <div class="name-and-stars">
                            <h2 class="user-name">Antônio Rachaduz</h2>
                        </div>
                        <p>
                            Parabéns aos proprietários e funcionários pelo bom atendimento. Lugar aconchegante e com delícias variadas.
                        </p>
                        <div class="wrapper-stars">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colorless-star.png" alt="Estrela não preenchida">
                        </div>
                    </div>
                </article>                
                <article class="rating-card -all">
                    <img src="../img/Avatar-patricksom.png" alt="Avatar Patricksom Vieras">
                    <div>
                        <div class="name-and-stars">
                            <h2 class="user-name">Patricksom Vieras</h2>
                        </div>
                        <p>
                            Grande variedade de bolos, cucas, tortas e algumas opções de salgados.
                        </p>
                        <div class="wrapper-stars">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colorless-star.png" alt="Estrela não preenchida">
                        </div>
                    </div>
                </article>
                <article class="rating-card -all">
                    <img src="../img/avatar-Maria-Eduarda.png" alt="Avatar Maria Eduarda">
                    <div>
                        <div class="name-and-stars">
                            <h2 class="user-name">Maria Eduarda</h2>
                        </div>
                        <p>
                            Todos os produtos comercializados são de excelente qualidade, recomendo!
                        </p>
                        <div class="wrapper-stars">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                        </div>
                    </div>
                </article>
                <article class="rating-card -all -last-rating">
                    <img src="../img/Avatar-Antônio.png" alt="Avatar Antônio Rachaduz">
                    <div>
                        <div class="name-and-stars">
                            <h2 class="user-name">Antônio Rachaduz</h2>
                        </div>
                        <p>
                            Parabéns aos proprietários e funcionários pelo bom atendimento. Lugar aconchegante e com delícias variadas.
                        </p>
                        <div class="wrapper-stars">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colored-star.png" alt="Estrela preenchida">
                            <img src="../img/colorless-star.png" alt="Estrela não preenchida">
                        </div>
                    </div>
                </article>
            </div>
        </div>
    `
})

