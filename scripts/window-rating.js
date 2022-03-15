const windowRating = document.querySelector('.window-all-ratings');
const windowNewRating = document.querySelector('.window-new-rating');
const openWindowRating = document.querySelector('.-view');
const openWindowNewRating = document.querySelector('.-new');
function closeWindow(){
    windowRating.style.display = "none";
}
function closeWindowNew(){
    windowNewRating.style.display = 'none';
}
openWindowRating.addEventListener('click',()=>{
    windowRating.style.display = 'flex';
})
openWindowNewRating.addEventListener('click',()=>{
    windowNewRating.style.display = 'flex';
})