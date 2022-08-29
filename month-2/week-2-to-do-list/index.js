showList();

let addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", () => {
  let addInput = document.getElementById("addInput");
  if (addInput.value == "") {
    document.getElementById('input-error').style.display = "block";
    document.getElementById("input-error").classList.add("error-msg");
    return;
  }
  let list = localStorage.getItem("list");
  if (list == null) {
    listObj = [];
  } else {
    listObj = JSON.parse(list);
  }
  listObj.push(addInput.value);
  localStorage.setItem("list", JSON.stringify(listObj));
 
  addInput.value = "";
  showList();
});

function showList() {
  let list = localStorage.getItem("list");
  if (list == null) {
    listObj = [];
  } else {
    listObj = JSON.parse(list);
  }

  let html = "";
  listObj.forEach((element) => {
    html += `
    <ul>            
    <div class="li-items"> 
    <li class="li-element"> ${element}</li>
    <div id="i-tags">
    <i class="fa-regular editBtn fa-pen-clip"></i>
    <i class="fa-regular deleteBtn fa-trash-can"></i>
    </div>
    </ul> `;
  });
  let listItems = document.getElementById("listItems");
  if (listObj.length != 0) {
    listItems.innerHTML = html;
  } else {
    listItems.innerHTML = `Please add your To Do !!`;
  }

  let deleteBtns = document.querySelectorAll(".deleteBtn");
  deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", (index) => {
  let list = localStorage.getItem("list");
  listObj = JSON.parse(list);
  listObj.splice(index, 1);
  localStorage.setItem("list", JSON.stringify(listObj));
  showList();
  });
});
}



// let liElement = document.getElementsByClassName('li-element');
// liElement.type = 'text';
// liElement.setAttribute('readonly', 'readonly');


// let editBtn = document.querySelector(".editBtn");
// editBtn.addEventListener('click', () => {
//   let list = localStorage.getItem("list");
//   listObj = JSON.parse(list);
// });
