var inputName = document.getElementById("inputName");
var inputEmail = document.getElementById("inputEmail");
var errorMsg = document.getElementById("errorMsg");

var name,
    email,
    message;

inputName.addEventListener("keyup", function () {
    var inputValue = inputName.value;
    var textExpected = /^[a-z]+$/i;

    if (!inputValue.match(textExpected)) {
        inputName.style.border = "1px solid red";
        name = "false";
        errorMsg.innerHTML = "One or more fields is invalid or incomplete. Please ensure you have entered correct details.";
        isValid()
    } else {
        inputName.style.border = "1px solid Green"
        name = "true";
        isValid()
    }
});

inputEmail.addEventListener("keyup", function () {
    var inputValue = inputEmail.value;
    var textExpected = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!inputValue.match(textExpected)) {
        inputEmail.style.border = "1px solid red";
        email = "false";
        errorMsg.innerHTML = "One or more fields is invalid or incomplete. Please ensure you have entered correct details.";
        isValid()
    } else {
        inputEmail.style.border = "1px solid Green";
        email = "true";
        isValid()
    }
});

inputMessage.addEventListener("keyup", function () {
    var inputValue = inputMessage.value;

    if (inputValue.length < 1) {
        inputMessage.style.border = "1px solid red";
        message = "false";
        errorMsg.innerHTML = "One or more fields is invalid or incomplete. Please ensure you have entered correct details.";
        isValid()
    } else {
        inputMessage.style.border = "1px solid Green";
        message = "true";
        isValid()
    }
});

function isValid() {
    if (name == "true" && email == "true" && message == "true") {
        document.getElementById("button").disabled = false;
        errorMsg.innerHTML = "Complete! You may now click send.";
    } else {
        document.getElementById("button").disabled = true;
    };
}
