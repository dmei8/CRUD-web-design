var form_name = document.getElementById('name-input')
var password = document.getElementById('pass-input')
var password2 = document.getElementById('pass-re-input')

var name_message = document.getElementById('name-message');
var pass_rules = document.getElementById('pass-rules');
var pass_message = document.getElementById('pass-message');

function checkName() {
    if (form_name.value.length < 3) {
        name_message.innerHTML = "Please enter 3 or more characters"
        name_message.style.color = "crimson";
    } else if (form_name.value.length > 15) {
        name_message.innerHTML = "Limit name to 15 characters.";
        name_message.style.color = "orange";
    } else {
        name_message.innerHTML = "";
    }
}

function checkPassword() {
    var re = /\d/;

    if (password.value.length < 8 || password.value.length > 15) {
        pass_rules.innerHTML = "Password must be between 8-15 characters.";
        pass_rules.style.color = "crimson";
    } else {
        pass_rules.innerHTML = "";
        if (!re.test(password.value)) {
            pass_rules.innerHTML = "Your password must contain at least 1 special character and 1 letter.";
            pass_rules.style.color = "crimson";
        }
    }
}

function matchingPass() {
   if (password.value != password2.value) {
        pass_message.innerHTML = "Passwords do not match";
        pass_message.style.color = "crimson";
    } else {
        pass_message.innerHTML = "Passwords match";
        pass_message.style.color = "green";
    }
}