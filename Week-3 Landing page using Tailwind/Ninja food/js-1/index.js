let burger =  document.getElementById('burger');
let menu = document.getElementById('menu');

burger.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
    }
})