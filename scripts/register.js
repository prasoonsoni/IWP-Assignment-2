var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("c-password");
var phoneNumber = document.getElementById("phone");
var loginButton = document.getElementById("login");

loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    var email_value = email.value.toLowerCase().trim();
    var password_value = password.value.trim();
    var confirm_password_value = confirmPassword.value.trim();
    var phone_number_value = phoneNumber.value.toLowerCase().trim();
    // validating if fields are not empty
    if (email_value.length === 0 || password_value.length === 0 || confirm_password_value.length === 0 || phone_number_value.length === 0) {
        alert("Fields cannot be empty");
        return;
    }
    // validating email
    const email_re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isValid = email_value.match(email_re);
    if (!isValid) {
        alert("Please enter a valid e-mail");
        return;
    }
    // validating password
    const minNumberofChars = 8;
    const maxNumberofChars = 16;
    const password_re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (password_value.length < minNumberofChars || password_value.length > maxNumberofChars) {
        alert("Password length should be in between 8-16 characters.");
        return;
    }
    if (!password_re.test(password_value)) {
        alert("Password should contain atleast one number and one special character");
        return;
    }

    // validating confirm password and password
    if (password_value !== confirm_password_value) {
        alert("Please check your passwords.");
        return;
    }
    // validating phone number
    const number_re = /^\d{10}$/;
    if (!phone_number_value.match(number_re)) {
        alert("Phone number must be 10 digits.");
        return;
    }

    // on success
    alert("Successfully Registered.")
})
