function emailValidate(e) {
  let inputText = document.getElementById("email").value;

  // if(inputText.indexOf('@')<1){
  //     alert('Please add @');
  //     return false;
  // }

  let mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

  if (!inputText.match(mailFormat)) {
    document.getElementById("errorMsg").style.display = "block";
  }
  e.preventDefault();
  return false;
    
}

