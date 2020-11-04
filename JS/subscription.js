window.onload = function(){

  var nameInput = document.querySelector('#name_input');

  // Name ******* validation hidden at first
  var errorMessage = document.querySelector('#name_input').nextElementSibling;
    errorMessage.style.visibility =  "hidden";
    
  // Name ******* Blur event 
  nameInput.addEventListener("blur", nameBlur);

  function nameBlur(){
    if ((!valName(this.value) || (this.value.length <= 6)) && this.value != '') { 
      var errorMessage = document.querySelector('#name_input').nextElementSibling;
      errorMessage.style.visibility =  "visible" ;
      errorMessage.style.color = "red";
    }else {
      console.log("Name: " + nameInput.value);
    }
  }
  function valName(str){
    let re = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;
    if(re.test(str)){
      return true;
    }
  }
  // Name ******* Focus event
  nameInput.addEventListener("focus", nameHidden);

  function nameHidden(){
    var errorMessage = document.querySelector('#name_input').nextElementSibling;
    errorMessage.style.visibility =  "hidden";
  }
}
