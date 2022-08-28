showList();

let addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", (element) => {
  let addInput = document.getElementById("addInput").value;
  let list = localStorage.getItem('list');
  if(list == null){
    listObj = [];
  }
  else{
    listObj = JSON.parse(list);
  }
  listObj.push(addInput);
  localStorage.setItem("list", JSON.stringify(listObj));
  addInput = "";
  showList();
});

function showList() {
  let list = localStorage.getItem("list");
  if(list == null){
    listObj = [];
  }
  else{
  listObj = JSON.parse(list);
  }

  let html = "";
  listObj.forEach((element) => {
    html += `
    <ul>            
    <div class="li-items"> 
    <li> ${element}</li>
    <div id="i-tags">
    <i class="fa-regular fa-pen-clip"></i>
    <i class="fa-regular fa-trash-can"></i>
    </div>
    </ul> `;
  });
  let listItems = document.getElementById('listItems');
  listItems.innerHTML = html;
}
