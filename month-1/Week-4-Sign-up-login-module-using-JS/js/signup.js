function formValidate() {
  //Name validation
  let inputName = document.getElementById("name").value;
  if(inputName == "" || inputName == null){
    document.getElementById("name-error").style.display = "block";
    document.getElementById("name-error").classList.add('error-msg');
    document.getElementById("name").classList.add('input');
  }
  
  //Email Validation
  let inputMail = document.getElementById("email").value;
  let mailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!inputMail.match(mailFormat)) {
    document.getElementById("mail-error").style.display = "block";
    document.getElementById("mail-error").classList.add('error-msg');
    document.getElementById("email").classList.add('input');
  }

  //Password validation
  let inputPassword = document.getElementById("password").value;
  let numbers = /[0-9]/g;

  if (!inputPassword.match(numbers)) {
    document.getElementById("pass-error1").style.display = "block";
    document.getElementById("pass-error1").classList.add('error-msg');
    document.getElementById("password").classList.add('input');
  }
  else if (inputPassword.length < 4 || inputPassword.length > 12) {
    document.getElementById("pass-error2").style.display = "block";
    document.getElementById("pass-error2").classList.add('error-msg');
    document.getElementById("password").classList.add('input');
  }
}
