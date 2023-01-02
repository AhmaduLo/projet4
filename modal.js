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
const error = document.querySelector(".error");
const input = document.querySelectorAll("input");
const fisrt_name = document.getElementById("first");
const last_name = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox_label = document.querySelector(".checkbox-label");
const textControl = document.querySelector(".text-control");


//close modal
closeModal.forEach((btn) => btn.addEventListener("click", close));
function close() {
  modalbg.style.display = "none";
  modaleAfterValid.style.display = "none";
  location.reload()  
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
  location.reload()  
}

//---------form validator-----------
form.addEventListener("submit", (e) => {
  let message = [];
  e.preventDefault();

  if (fisrt_name.value === "" || fisrt_name.value == null) {
    message.push(
      "Veuillez entrer 2 caractères ou plus pour le champ du prenom"
    );
    //input.style.borderColor = "red";  
  }

  if (last_name.value === "" || last_name.value == null) {
    message.push(
      "Veuillez entrer 2 caractères ou plus pour le champ du prenom"
    );
  }

  if (email.value === "" || email.value == null) {
    message.push(
      "Veuillez entrer 2 caractères ou plus pour le champ du prenom"
    );
  }

  if (birthdate.value === "" || birthdate.value == null) {
    message.push(
      "Vous devez entrer votre date de naissance."
    );
  }

  if (quantity.value === "" || quantity.value == null) {
    message.push(
      "Veuillez entrer 2 caractères "
    );
  }

  // if (checkbox_label.checked = true) {
  //   message.push(
  //     "Vous devez choisir une option"
  //   );
  // }
  
  
  if (message.length > 0) {
    e.preventDefault();
    error.innerHTML = message.join(", ");
  } else {
    modalbg.style.display = "none";
    e.preventDefault();
    modaleAfterValid.style.display = "block";
  }
});
