// Selecting form and input elements
const form = document.querySelector("form");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const numberInput = document.getElementById("number");
    const dateInput = document.getElementById("date");
    const cityInput = document.getElementById("city");

    // Getting trimmed values from input fields
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const number = numberInput.value.trim();
    const date = dateInput.value;
    const city = cityInput.value.trim();

    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
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

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Submitting the form
    form.submit();
}


// Handling form submission event
form.addEventListener("submit", handleFormData);