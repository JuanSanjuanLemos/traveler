const windowRating = document.querySelector('.window-all-ratings');
const openWindowRating = document.querySelector('.-view');
function closeWindow(){
    windowRating.style.display = "none";
}
openWindowRating.addEventListener('click',()=>{
    windowRating.style.display = 'flex';
})