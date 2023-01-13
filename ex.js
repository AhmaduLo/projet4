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
    e.preventDefault();
  
    if (fisrt_name.value === "" || fisrt_name.value == null) {
      error[0].innerHTML='Veuillez entrer 2 caractères ou plus pour le champ du prenom'
      input[0].style.border ="1px solid red";
    }
    else{
      input[0].style.border ="0px solid red";
      error[0].innerHTML="";
      
    }
  //-------------------------------------------------
    if (last_name.value === "" || last_name.value == null) {
     error[1].innerHTML='Veuillez entrer 2 caractères ou plus pour le champ du nom'
      input[1].style.border ="1px solid red";
    }
    else{
      input[1].style.border ="0px solid red";
      error[1].innerHTML="";
    }
  //-------------------------------------------------
    if (email.value === "" || email.value == null) {
      error[2].innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du email"
      input[2].style.border ="1px solid red";
    }
    else{
      input[2].style.border ="0px solid red";
      error[2].innerHTML="";
    }
  //-------------------------------------------------
    if (birthdate.value === "" || birthdate.value == null || birthdate.value === "jj/mm/aaaa") {
      error[3].innerHTML="Vous devez entrer votre date de naissance."
      input[3].style.border ="1px solid red";
    }
    else{
      input[3].style.border ="0px solid red";
      error[3].innerHTML="";
    }
  //-------------------------------------------------
    if (quantity.value === "" || quantity.value == null) {
      error[4].innerHTML="Veuillez entrer 2 caractères";
      input[4].style.border ="1px solid red";
    }
    else{
      input[4].style.border ="0px solid red";
      error[4].innerHTML="";
    }
  //-------------------------------------------------
    // if (checkbox_label.checked = true) {
    // console.log(checkbox_label);
    // }
    //-------------------------------------------------
  
    if (error.forEach(element => element.value === "" || element.value == null)) {
      modalbg.style.display = "none";
      e.preventDefault();
      modaleAfterValid.style.display = "block";
      ;
    }
    //  else {
    //   modalbg.style.display = "none";
    //   e.preventDefault();
    //   modaleAfterValid.style.display = "block";
    // }
  });
  // error.forEach(element => element.value === "" || element.value == null)

  if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) {
		errorCity.style.display = "block";
		formValidated = false;
	} else {
		errorCity.style.display = "none";
	}