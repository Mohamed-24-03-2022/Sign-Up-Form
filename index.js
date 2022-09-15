const inputs = document.querySelectorAll(".input");
const passwordInputs = document.querySelectorAll("input[type='password']");
const firstColumn = document.querySelector(".first-column");
const secondColumn = document.querySelector(".second-column");
const confirmationText = document.createElement("p");
const digitNumberText = document.createElement("p");
const regexValidation = /^[a-zA-Z0-9]{8,}$/;
const signUpButton = document.querySelector(".button-container button");

confirmationText.textContent = "Password do not match.";
digitNumberText.textContent = "Please insert a minimum of 8 characters.";
confirmationText.style.visibility = "hidden";
digitNumberText.style.visibility = "hidden";
firstColumn.appendChild(digitNumberText);
secondColumn.appendChild(confirmationText);



inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.classList.add("validation");
    })
    input.addEventListener("blur", () => {
        input.classList.remove("validation");
    })
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
    confirmationText.style.visibility = "visible";
    if (passwordInputs[1].value === passwordInputs[0].value) {
        confirmationText.style.visibility = "hidden";
        signUpButton.disabled = false;
    }
    if (passwordInputs[1].value === "") {
        confirmationText.style.visibility = "hidden";
    }
    if (confirmationText.style.visibility === "visible" ||
        digitNumberText.style.visibility === "visible") {
        signUpButton.disabled = true;
    }
});

signUpButton.addEventListener("click", (e) => {
    e.preventDefault();
});




