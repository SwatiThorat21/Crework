
function emailValidate(){
    let inputText = document.getElementById('email').value;
   
    if(inputText.indexOf('@')<1){
        alert('Please add @');
        return false;
    }
   
}

