let button = document.querySelector('button');
let h2elem = document.querySelector('h2');
let background = document.getElementById('container-1');

button.addEventListener('click',()=>{
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    console.log(color);
    background.style.backgroundColor = color;
})
