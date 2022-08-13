function formValidate() {
  
  let inputText = document.getElementById("email").value;

  let mailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!inputText.match(mailFormat)) {
    document.getElementById("errorMsg").style.display = "block";
    return false;
  }
  else{
    document.getElementById("errorMsg").style.display = "none";
    return true;
   }
      
}

