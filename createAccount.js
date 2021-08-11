var form_name = document.getElementById('name-input')
var password = document.getElementById('pass-input')
var password2 = document.getElementById('pass-re-input')

var name_message = document.getElementById('name-message');
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

function matchingPass() {
    if (password.value.length == password2.value.length) {
        if (password.value != password2.value) {
            pass_message.innerHTML = "Passwords do not match";
            pass_message.style.color = "crimson";
        } else {
            pass_message.innerHTML = "";
        }
    } 
}