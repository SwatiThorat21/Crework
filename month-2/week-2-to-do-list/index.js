let addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', (element)=>{
let addInput = document.getElementById('addInput').value;
let listObj= [];
listObj.push(addInput);
localStorage.setItem('list', JSON.stringify(listObj));
showList();
});

function showList(){
let list = localStorage.getItem('list');
listObj = JSON.parse(list);
let html = "" ;
listObj.forEach(element => {
    html += `
                <div class="li-items"> 
                <li> ${element}</li>
                <div id="i-tags">
                  <i class="fa-regular fa-pen-clip"></i>
                  <i class="fa-regular fa-trash-can"></i>
                </div>
       `
});


}