function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}





// form.addEventListener("submit", (e) => {
// 	e.preventDefault();

// // Function to check form inputs with regex and add errors messages if inputs are not validated
// 	function validateInput(input, regex, error, input) {
// 		const validated = input.value.match(regex);
// 		// If input is not validated : formValidated="false"
// 		if (!validated) {
// 			formValidated = false;
// 			error.style.display = "block";
// 			input.style.border = "0.2rem solid #fe142f";
// 		} else {
// 			error.style.display = "none";
// 			input.style.border = "0.05rem solid #ccc";
// 		}
// 	}

// validateInput(firstName, nameRegex, errorFirst, firstName);



// validateInput(firstName, nameRegex, errorFirst, firstName);
// // Check if one city is checked, if not add error message
// 	if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) {
// 		errorCity.style.display = "block";
// 		formValidated = false;
// 	} else {
// 		errorCity.style.display = "none";
// 	}

// 	// Check if term is checked, if not add error message
// 	if (!term.checked) {
// 		errorTerm.style.display = "block";
// 		formValidated = false;
// 	} else {
// 		errorTerm.style.display = "none";
// 	}



//------------------------------------------------------------
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

//---------form validator-----------
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (fisrt_name.value === "" || fisrt_name.value == null) {
    error[0].innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prenom";
    input[0].style.border = "1px solid red";
  } else {
    input[0].style.border = "none";
    error[0].innerHTML = "";
  }
  //-------------------------------------------------
  if (last_name.value === "" || last_name.value == null) {
    error[1].innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    input[1].style.border = "1px solid red";
  } else {
    input[1].style.border = "none";
    error[1].innerHTML = "";
  }
  //-------------------------------------------------
  if (email.value === "" || email.value == null) {
    error[2].innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du email";
    input[2].style.border = "1px solid red";
  } else {
    input[2].style.border = "none";
    error[2].innerHTML = "";
  }
  //-------------------------------------------------
  if (
    birthdate.value === "" ||
    birthdate.value == null ||
    birthdate.value === "jj/mm/aaaa"
  ) {
    error[3].innerHTML = "Vous devez entrer votre date de naissance.";
    input[3].style.border = "1px solid red";
  } else {
    input[3].style.border = "none";
    error[3].innerHTML = "";
  }
  //-------------------------------------------------
  if (quantity.value === "" || quantity.value == null) {
    error[4].innerHTML = " une valeur numérique est saisie.";
    input[4].style.border = "1px solid red";
  } else {
    input[4].style.border = "none";
    error[4].innerHTML = "";
  }
  //-------------------------------------------------
  if (
    loc1.checked ||
    loc2.checked ||
    loc3.checked ||
    loc4.checked ||
    loc5.checked ||
    loc6.checked
  ) {
    error[5].innerHTML = "";
  } else {
    error[5].innerHTML = "Un bouton radio n'est pas sélectionné.";
    // modalbg.style.display = "block";
  }
  //-----------------------------
  if (checkbox1.checked) {
    error[6].innerHTML = "";
  } else {
    error[6].innerHTML =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
  }
  //-------------validation form btn------------------------------------

  if (
    input[0].value.length !== 0 &&
    input[1].value.length !== 0 &&
    input[2].value.length !== 0 &&
    input[3].value.length !== 0 &&
    input[4].value.length !== 0 &&
    checkbox1.checked
  ) {
    modalbg.style.display = "none";
    e.preventDefault();
    modaleAfterValid.style.display = "block";
  } else {
    modalbg.style.display = "block";
  }
});








// if (
    //   loc1.checked ||
    //   loc2.checked ||
    //   loc3.checked ||
    //   loc4.checked ||
    //   loc5.checked ||
    //   loc6.checked
    // ) {
    //   errorId;
    //   e.preventDefault();
    //   error[5].innerHTML="";
    // } else {
    //   errorId = true;
    //   error[5].innerHTML = "Un bouton radio n'est pas sélectionné.";
    // }


    for (let i = 0; i < input.length; i++) {
      if (!input[i].value) {
        input[i].style.border = "1px solid red";
        errorId;
        error[0].innerHTML =
          "Veuillez entrer 2 caractères ou plus pour le champ du prenom";
        error[1].innerHTML =
          "Veuillez entrer 2 caractères ou plus pour le champ du nom";
        error[2].innerHTML =
          "Veuillez entrer 2 caractères ou plus pour le champ du email";
        error[3].innerHTML = "Vous devez entrer votre date de naissance.";
        error[4].innerHTML = " une valeur numérique est saisie.";
      } else {
        errorId = false;
        input[i].style.border = "none";
      }
  
      
    }