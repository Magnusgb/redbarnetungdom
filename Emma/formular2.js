// varibaler
const form = document.querySelector("form"); /* selve formularen */

// Funktion - viser fejlmelding
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Funktion  - Hvad der sker ved en fejl
const handleFormData = (e) => {
    e.preventDefault();

    // Henter input elementer
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const numberInput = document.getElementById("number");
    const dateInput = document.getElementById("date");
    const cityInput = document.getElementById("city");

    // Fjerner whitespace - så det kun er det "rigtige" der kommer med videre
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const number = numberInput.value.trim();
    const date = dateInput.value;
    const city = cityInput.value.trim();

    // Validering af e-mail
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // når man retter på en fejl, så fjerner den tidligere fejlmeldinger
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Fejlmeldingerne
    if (fullname === "") {
        showError(fullnameInput, "Skriv dit fuldenavn");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Skriv en valid email");
    }
    if (number === "") {
        showError(numberInput, "Skriv dit telefonnummer");
    }
    if (date === "") {
        showError(dateInput, "Vælg din fødselsdag");
    }
    if (city === "") {
        showError(cityInput, "Skriv din by");
    }

    // loop - tjekker formular listen igennem for fejlmeldinger (ved flere fejl end 0 sendes man tilbage til siden)
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // send input /den udfyldte formular)
    form.submit();
}


// Event - Ved tryk på "send ansøgning" vil den køre hele funktionen: handleFormData
form.addEventListener("submit", handleFormData);