window.onload = function(){

  /******************************** NAME ********************************/
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

/******************************** EMAIL ********************************/
  var emailInput = document.querySelector('#email_input');
  // Email ******* validation hidden at first
  var errorMessage = document.querySelector('#email_input').nextElementSibling;
    errorMessage.style.visibility =  "hidden";
  // Email ******* Blur event 
  emailInput.addEventListener("blur", emailBlur);

  function emailBlur(){
    if (!valEmail(this.value) && this.value != '') { 
      var errorMessage = document.querySelector('#email_input').nextElementSibling;
      errorMessage.style.visibility =  "visible" ;
      errorMessage.style.color = "red";
    }else {
      console.log("Email: " + emailInput.value);
    }
  }
  function valEmail(str){
    let re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(str)){
      return true;
    }
  }
  // Email ******* Focus event
  emailInput.addEventListener("focus", emailHidden);

  function emailHidden(){
    var errorMessage = document.querySelector('#email_input').nextElementSibling;
    errorMessage.style.visibility =  "hidden";
  }
}
