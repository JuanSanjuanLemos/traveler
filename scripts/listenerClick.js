window.onload = ()=>{
    const componentDoceECompainha = document.querySelectorAll('.local1');
    const componentLagoDaConceicao = document.querySelectorAll('.local2');
    const componentPraiaDoCampeche = document.querySelectorAll('.local3');
    const componentExpoTattoFloripa = document.querySelectorAll('.local4');
    componentDoceECompainha.forEach(el => {
        el.addEventListener('click',(event)=>{
            window.location.href=`/locals/doceECompainha.html`;
        });
    });
    componentLagoDaConceicao.forEach(el => {
        el.addEventListener('click',(event)=>{
            window.location.href=`/locals/lagoDaConceicao.html`;
        });
    });
    componentPraiaDoCampeche.forEach(el => {
        el.addEventListener('click',(event)=>{
            window.location.href=`/locals/praiaDoCampeche.html`;
        });
    });
    componentExpoTattoFloripa.forEach(el =>{
        el.addEventListener('click',(event)=>{
            window.location.href=`/locals/expoTatto.html`;
        });
    });
}