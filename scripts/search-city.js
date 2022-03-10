//pegar o valor digitado pelo usuário
//verificar se o valor corresponde com algum cadastrado
//deixar todos o card brancos
//deixar o card selecionado na cor normal

const inputCity = document.querySelector('.input-search');
document.addEventListener('keypress', function(event){
    if(event.key ==='Enter'){
        console.log(inputCity.value)
    }
})