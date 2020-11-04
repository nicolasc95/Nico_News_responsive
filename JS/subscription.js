window.onload = function(){

  var nameInput = document.querySelector('#name_input');
  //Blur event = show error
  nameInput.addEventListener("blur", nameFunction);

  function nameFunction(){
    var valueInput = nameInput.value;
    if ((valueInput.indexOf(" ") == -1) || (valueInput.length <= 6)) { 
      var errorMessage = document.querySelector('#name_input').nextElementSibling;
      errorMessage.style.visibility =  "visible" ;
      errorMessage.style.color = "red";
    }else {
      console.log("Name: " + nameInput.value);
      return ["Name: ",nameInput.value];
    }
  }
  //Focus event = hidden error
  nameInput.addEventListener("focus", hiddenName);

  function hiddenName(){
    var errorMessage = document.querySelector('#name_input').nextElementSibling;
    errorMessage.style.visibility =  "hidden";
  }
}