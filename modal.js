function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
//-------------add DOM-------------------
const btnSubmit = document.querySelectorAll(".btn-submit");
const modaleAfterValid = document.querySelector(".modale_after_valid");
const closeModal = document.querySelectorAll(".close");
const btnCloseModal = document.querySelectorAll(".btn_close");
//-------------add DOM form-------------------
const form = document.querySelector("form");
const error = document.querySelectorAll(".error");
const input = document.querySelectorAll(".text-control");
const fisrt_name = document.getElementById("first");
const last_name = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
//---------------------checkbox DOM----------------------------------------
checkbox_input = document.querySelector("checkbox-input");
const loc1 = document.getElementById("location1");
const loc2 = document.getElementById("location2");
const loc3 = document.getElementById("location3");
const loc4 = document.getElementById("location4");
const loc5 = document.getElementById("location5");
const loc6 = document.getElementById("location6");

const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

//close modal
closeModal.forEach((btn) => btn.addEventListener("click", close));
function close() {
  modalbg.style.display = "none";
  modaleAfterValid.style.display = "none";
  location.reload();
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//button close modal after validation
btnCloseModal.forEach((btn) => btn.addEventListener("click", closeMod));
function closeMod() {
  modaleAfterValid.style.display = "none";
  location.reload();
}

let maxDate;
// birthdate max date
document.addEventListener("DOMContentLoaded", maxBirthdate);

//---------form validator-----------
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate();

  if (
    validFisrtName() == true &&
    validLastName() == true &&
    validEmail() == true &&
    validBirthdate() == true &&
    validQuantity() == true &&
    validLocation() == true &&
    validCGV() == true
  ) {
    modalbg.style.display = "none";
    e.preventDefault();
    modaleAfterValid.style.display = "block";
  } else {
    modalbg.style.display = "block";
  }
});

// Form validation
function validate() {
  validFisrtName();
  validLastName();
  validEmail();
  validBirthdate();
  validQuantity();
  validLocation();
  validCGV();
}

// ------------------FirstName validation-----------
function validFisrtName() {
  if (!fisrt_name.value) {
    error[0].innerHTML = "Veuillez renseigner un prénom.";
    return false;
  } else if (fisrt_name.value.length <= 1) {
    error[0].innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prenom.";
    return false;
  } else if (!fisrt_name.value.match(/[a-zA-Z]+/g)) {
    error[0].innerHTML = "Veuillez entrer un prénom valide.";
    return false;
  } else {
    //setValid(fisrt_name);
    error[0].innerHTML = "";
    return true;
  }
}

// ------------------LastName validation-----------
function validLastName() {
  if (!fisrt_name.value) {
    error[1].innerHTML = "Veuillez renseigner un nom.";
    return false;
  } else if (fisrt_name.value.length <= 1) {
    error[1].innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  } else if (!fisrt_name.value.match(/[a-zA-Z]+/g)) {
    error[1].innerHTML = "Veuillez entrer un nom valide.";
    return false;
  } else {
    //setValid(fisrt_name);
    error[1].innerHTML = "";
    return true;
  }
}

// ------------------email validation-----------
function validEmail() {
  let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
  if (!email.value) {
    error[2].innerHTML = "Veuillez renseigner un E-mail.";
    return false;
  } else if (fisrt_name.value.length <= 1) {
    error[2].innerHTML = "Veuillez renseigner un E-mail.";
    return false;
  } else if (!email.value.match(mailRegex)) {
    error[2].innerHTML = "Veuillez entrer un nom valide.";
    return false;
  } else {
    //setValid(fisrt_name);
    error[2].innerHTML = "";
    return true;
  }
}

// ------------------Birthdate validation-----------
function maxBirthdate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getUTCFullYear();
  
  if (day < 10){
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  maxDate = year + "-" + month + "-" + day;
  maxDate = maxDate;
  document.getElementById("birthdate").setAttribute('max', maxDate);
}
function validBirthdate() {
  if (!birthdate.value) {
    error[3].innerHTML= "Veuillez renseigner une date de naissance.";
    return false;
  } else {
      //setValid(birthdate);
      error[3].innerHTML="";
      return true;
  }
}
// ------------------quantity validation-----------
function validQuantity() {
  if (!quantity.value) {
    error[4].innerHTML="Veuillez renseigner a combien de tournois GameOn avez-vous déjà participé.";
    return false;
  } else {
    //setValid(quantity);
    error[4].innerHTML="";
    return true;
  }
}
// ------------------checkValue validation-----------
function validLocation() {
  let radioCheck = document.querySelector('input[name = "location"]:checked');
  //console.log(radioCheck);

  if (radioCheck == null) {
    error[5].innerHTML="Veuillez renseigner une localisation.";
    return false;
  } else {
    error[5].innerHTML="";
    return true;
  }
}

// ------------------CGV validation-----------
function validCGV(){
  if(checkbox1.checked){
    error[6].innerHTML="";
    return true;
  }else{
    error[6].innerHTML="Veuillez accepter les CGV."
    return false;
  }
}