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
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }
  listArray.push(addInput.value);
  localStorage.setItem("list", JSON.stringify(listArray));

  addInput.value = "";
  showList();
});

function showList() {
  let list = localStorage.getItem("list");
  if (list == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }

  let html = "";
  listArray.forEach((element) => {
    html += `
    <ul>  
    <div class="li-item"> 
    <input type = "checkbox" class="checkbox"/>
    <input value="${element}" class="li-element" readonly/>
    <div id="i-tags">
    <i class="fa-regular editBtn fa-pen-clip"></i>
    <i class="fa-solid saveBtn fa-floppy-disk" style="display:none"></i>
    <i class="fa-regular deleteBtn fa-trash-can"></i>
    </div>
    </ul>
    `;
  });
  let listItems = document.getElementById("listItems");
  if (listArray.length != 0) {
    listItems.innerHTML = html;
  } else {
    listItems.innerHTML = `Please add your To Do !!`;
  }

  let deleteBtns = document.querySelectorAll(".deleteBtn");
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (index) => {
      let list = localStorage.getItem("list");
      listArray = JSON.parse(list);
      listArray.splice(index, 1);
      localStorage.setItem("list", JSON.stringify(listArray));
      showList();
    });
  });

  let editBtns = document.querySelectorAll(".editBtn");
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", (event) => {
      let input =
        event.target.parentElement.parentElement.querySelector(".li-element");
      input.removeAttribute("readonly");
      let saveBtn =
        event.target.parentElement.parentElement.querySelector(".saveBtn");
      saveBtn.style.display = "block";
      let editBtn =
        event.target.parentElement.parentElement.querySelector(".editBtn");
      editBtn.style.display = "none";
    });
  });

  let saveBtns = document.querySelectorAll(".saveBtn");
  saveBtns.forEach((saveBtn, index) => {
    saveBtn.addEventListener("click", (event) => {
      let input =
        event.target.parentElement.parentElement.querySelector(".li-element");
      input.setAttribute("readonly", true);
      let saveBtn =
        event.target.parentElement.parentElement.querySelector(".saveBtn");
      saveBtn.style.display = "none";
      let editBtn =
        event.target.parentElement.parentElement.querySelector(".editBtn");
      editBtn.style.display = "block";

      let list = localStorage.getItem("list");
      listArray = JSON.parse(list);
      listArray[index] = input.value;
      localStorage.setItem("list", JSON.stringify(listArray));
    });
  });
}

let checkbox = document.querySelectorAll(".checkbox");
checkbox.forEach((checklist) => {
  checklist.addEventListener("click", (event) => {
    let checkbox = event.target;
    let input = checkbox.parentElement.querySelector(".li-element");
    if (checkbox.checked) {
      input.style.textDecoration = "line-through";
    } else {
      input.style.textDecoration = "none";
    }
  });
});


