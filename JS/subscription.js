window.onload = function(){

  /******************************** NAME ********************************/
  var nameInput = document.querySelector('#name_input');
  // Name ******* validation hidden at first
  var errorMessage = document.querySelector('#name_input').nextElementSibling;
    errorMessage.style.visibility =  "hidden";

  // Name ******* Blur event 
  nameInput.addEventListener("blur", nameBlur);

  function nameBlur(){
    if ((!valName(this.value) || (this.value.length <= 5)) && this.value != '') { 
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

/******************************** PASSWORD ********************************/
var passInput = document.querySelector('#pass_input');
// Password ******* validation hidden at first
var errorMessage = document.querySelector('#pass_input').nextElementSibling;
  errorMessage.style.visibility =  "hidden";
// Password ******* Blur event 
passInput.addEventListener("blur", passBlur);

function passBlur(){
  if ((!valPass(this.value) || (this.value.length <= 7)) && this.value != '') { 
    var errorMessage = document.querySelector('#pass_input').nextElementSibling;
    errorMessage.style.visibility =  "visible" ;
    errorMessage.style.color = "red";
  }else {
    console.log("Password: " + passInput.value);
  }
}
function valPass(str){
  let re =/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/;
  if(re.test(str)){
    return true;
  }
}
// Password ******* Focus event
passInput.addEventListener("focus", passHidden);

function passHidden(){
  var errorMessage = document.querySelector('#pass_input').nextElementSibling;
  errorMessage.style.visibility =  "hidden";
}

/******************************** REPEAT-PASSWORD ********************************/
var rePassInput = document.querySelector('#rep_pass_input');
// RepeatPassword ******* validation hidden at first
var errorMessage = document.querySelector('#rep_pass_input').nextElementSibling;
  errorMessage.style.visibility =  "hidden";
// RepeatPassword ******* Blur event 
rePassInput.addEventListener("blur", repPassBlur);

function repPassBlur(){
  if ((this.value != passInput.value) && this.value != '') { 
    var errorMessage = document.querySelector('#rep_pass_input').nextElementSibling;
    errorMessage.style.visibility =  "visible" ;
    errorMessage.style.color = "red";
  }else {
    console.log("Repeat-Password: OK ");
  }
}
// RepeatPassword ******* Focus event
rePassInput.addEventListener("focus", rePassHidden);

function rePassHidden(){
  var errorMessage = document.querySelector('#rep_pass_input').nextElementSibling;
  errorMessage.style.visibility =  "hidden";
}

/******************************** AGE ********************************/
var ageInput = document.querySelector('#age_input');
// Age ******* validation hidden at first
var errorMessage = document.querySelector('#age_input').nextElementSibling;
  errorMessage.style.visibility =  "hidden";
// Age ******* Blur event 
ageInput.addEventListener("blur", ageBlur);

function ageBlur(){
  if ((!valAge(this.value) || (this.value <= 18)) && this.value != '') { 
    var errorMessage = document.querySelector('#age_input').nextElementSibling;
    errorMessage.style.visibility =  "visible" ;
    errorMessage.style.color = "red";
  }else {
    console.log("Age: " + ageInput.value);
  }
}
function valAge(str){
  let re =/^[0-9]+$/;
  if(re.test(str)){
    return true;
  }
}
// Age ******* Focus event
ageInput.addEventListener("focus", ageHidden);

function ageHidden(){
  var errorMessage = document.querySelector('#age_input').nextElementSibling;
  errorMessage.style.visibility =  "hidden";
}

/******************************** PHONE NUMBER ********************************/
var phoneInput = document.querySelector('#phone_input');
// Phone ******* validation hidden at first
var errorMessage = document.querySelector('#phone_input').nextElementSibling;
  errorMessage.style.visibility =  "hidden";
// Phone ******* Blur event 
phoneInput.addEventListener("blur", phoneBlur);

function phoneBlur(){
  if ((!valPhone(this.value) || (this.value.length <=6)) && this.value != '') { 
    var errorMessage = document.querySelector('#phone_input').nextElementSibling;
    errorMessage.style.visibility =  "visible" ;
    errorMessage.style.color = "red";
  }else {
    console.log("Phone: " + phoneInput.value);
  }
}
function valPhone(str){
  let re =/^[0-9]+$/;  // '-' allowed, CHANGE IT //
  if(re.test(str)){
    return true;
  }
}
// Phone ******* Focus event
phoneInput.addEventListener("focus", phoneHidden);

function phoneHidden(){
  var errorMessage = document.querySelector('#phone_input').nextElementSibling;
  errorMessage.style.visibility =  "hidden";
}

/******************************** ADDRESS ********************************/
var addressInput = document.querySelector('#address_input');
// Address ******* validation hidden at first
var errorMessage = document.querySelector('#address_input').nextElementSibling;
  errorMessage.style.visibility =  "hidden";
// Address ******* Blur event 
addressInput.addEventListener("blur", addressBlur);

function addressBlur(){
  if (!valAddress(this.value) && this.value != '') { 
    var errorMessage = document.querySelector('#address_input').nextElementSibling;
    errorMessage.style.visibility =  "visible" ;
    errorMessage.style.color = "red";
  }else {
    console.log("Address: " + addressInput.value);
  }
}
function valAddress(str){    
  let re = /^([a-z0-9]{2,}[\s]+)+([0-9]+)$/
  if(re.test(str)){
    return true;
  }
}
// Address ******* Focus event
addressInput.addEventListener("focus", addressHidden);

function addressHidden(){
  var errorMessage = document.querySelector('#address_input').nextElementSibling;
  errorMessage.style.visibility =  "hidden";
}

/******************************** CITY ********************************/
var cityInput = document.querySelector('#city_input');
// City ******* validation hidden at first
var errorMessage = document.querySelector('#city_input').nextElementSibling;
  errorMessage.style.visibility =  "hidden";
// City ******* Blur event 
cityInput.addEventListener("blur", cityBlur);

function cityBlur(){
  if ((!valCity(this.value) || this.value.length < 3 ) && this.value != '') { 
    var errorMessage = document.querySelector('#city_input').nextElementSibling;
    errorMessage.style.visibility =  "visible" ;
    errorMessage.style.color = "red";
  }else {
    console.log("City: " + cityInput.value);
  }
}
function valCity(str){    
  let re = /^[a-zA-Z\s]+$/
  if(re.test(str)){
    return true;
  }
}
// City ******* Focus event
cityInput.addEventListener("focus", cityHidden);

function cityHidden(){
  var errorMessage = document.querySelector('#city_input').nextElementSibling;
  errorMessage.style.visibility =  "hidden";
}

}