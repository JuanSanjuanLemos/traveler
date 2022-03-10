import allList from "./create-cities.js";

let list1 = document.getElementById('list1');
let list2 = document.getElementById('list2');

for(let i = 0; i<4;i++){
    if(i<2){
        list1.appendChild(allList[i])
    }else{
        list2.appendChild(allList[i])
    }
}