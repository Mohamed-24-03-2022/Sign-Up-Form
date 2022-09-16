const inputs = document.querySelectorAll(".input");
const passwordInputs = document.querySelectorAll("input[type='password']");
const passwordContainer = document.querySelector(".password-container");
const passConfirmContainer = document.querySelector(".password-confirmation-container");
const telContainer = document.querySelector(".tel-container");
const confirmationText = document.createElement("p");
const digitNumberText = document.createElement("p");
const telNumberText = document.createElement("p");
const singUpButton = document.querySelector(".button-container button");
const telInput = document.querySelector("input[type='tel']");

//*********************************  RegEx ************************************************/
const regexPasswordValidation = /.{8,}/;
const regexTelValidation = /^[0-9]+$/;
//*****************************************************************************************/

confirmationText.textContent = "Password do not match.";
digitNumberText.textContent = "Please insert a minimum of 8 characters.";
telNumberText.textContent = "Please insert a valid number";
confirmationText.style.visibility = "hidden";
digitNumberText.style.visibility = "hidden";
telNumberText.style.visibility = "hidden";

passwordContainer.appendChild(digitNumberText);
passConfirmContainer.appendChild(confirmationText);
telContainer.appendChild(telNumberText);

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        input.classList.add("validation");
        if (input.value === "") {
            input.classList.remove("validation");
        }
    });
});
passwordInputs[0].addEventListener("input", () => {
    confirmationText.style.visibility = "hidden";
    passwordInputs[1].value = "";
    if (!passwordInputs[0].value.match(regexPasswordValidation)) {
        digitNumberText.style.visibility = "visible";
    } else {
        digitNumberText.style.visibility = "hidden";
    }
    if (passwordInputs[0].value === "") {
        digitNumberText.style.visibility = "hidden";
    }
});
passwordInputs[1].addEventListener("input", () => {
    if (passwordInputs[1].value === passwordInputs[0].value) {
        confirmationText.style.visibility = "hidden";
        singUpButton.disabled = false;
        // light blue colors
        passwordInputs[1].style.borderBottom = "2px solid #335fdb";
        passwordInputs[1].style.backgroundColor = "#3360db1d";

    } else {
        confirmationText.style.visibility = "visible";
        singUpButton.disabled = true;
        // light red colors
        passwordInputs[1].style.borderBottom = "2px solid #ce6060";
        passwordInputs[1].style.backgroundColor = "#ce606026";
    }

    if (passwordInputs[1].value === "") {
        confirmationText.style.visibility = "hidden";
    }
});

telInput.addEventListener("input", (e) => {
    const slicedValue = telInput.value.slice(0, -1);
    if (e.data === null) {
        return;
    } else if (!e.data.match(regexTelValidation)) {
        telInput.value = slicedValue;
        telNumberText.style.visibility = "visible";
    } else {
        telNumberText.style.visibility = "hidden";
    }
});
