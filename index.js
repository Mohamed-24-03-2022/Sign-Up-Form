const inputs = document.querySelectorAll(".input");
const passwordInputs = document.querySelectorAll("input[type='password']");
const passwordContainer = document.querySelector(".password-container");
const passConfirmContainer = document.querySelector(
    ".password-confirmation-container"
);
const confirmationText = document.createElement("p");
const digitNumberText = document.createElement("p");
const regexValidation = /.{8,}/;
const singUpButton = document.querySelector(".button-container button");

confirmationText.textContent = "Password do not match.";
digitNumberText.textContent = "Please insert a minimum of 8 characters.";
confirmationText.style.visibility = "hidden";
digitNumberText.style.visibility = "hidden";

passwordContainer.appendChild(digitNumberText);
passConfirmContainer.appendChild(confirmationText);

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
    if (!passwordInputs[0].value.match(regexValidation)) {
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
    } else {
        confirmationText.style.visibility = "visible";
        singUpButton.disabled = true;
    }

    if (passwordInputs[1].value === "") {
        confirmationText.style.visibility = "hidden";
    }
});
