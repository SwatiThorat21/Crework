showList();

let addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", () => {
  let addInput = document.getElementById("addInput");
  if (addInput.value == "") {
    document.getElementById("input-error").style.display = "block";
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
         
    <div class="li-item" onClick ="setLineThrough"> 
    <input value="${element}" class="li-element" readonly/>
    <div id="i-tags">
    <i class="fa-regular editBtn fa-pen-clip"></i>
    <i class="fa-regular deleteBtn fa-trash-can"></i>
    </div>
    `;
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

  let editBtns = document.querySelectorAll(".editBtn");
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", (event) => {
      let list = localStorage.getItem("list");
      listObj = JSON.parse(list);
      listObj[index].removeAttribute('readonly');
    });
  });
}

document.addEventListener('click', (event) => {
  if(event.target.classList.contains('li-element')){
    if (event.target.style.textDecoration == "line-through") {
      event.target.style.textDecoration = "";
    } else {
      event.target.style.textDecoration = "line-through";
    }
  }

});