var email = document.getElementById("email");
var password = document.getElementById("password");
var loginButton = document.getElementById("login");

loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    var email_value = email.value.toLowerCase().trim();
    var password_value = password.value.trim();
    // validating if fields are not empty
    if (email_value.length === 0 || password_value.length === 0) {
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
    // on success
    alert("Successfully Logged In.")
})
