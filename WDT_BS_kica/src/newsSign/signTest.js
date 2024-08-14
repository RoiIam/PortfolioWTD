//variables
const form = document.querySelector("#signup");
const reqName = "Please enter your name!";
const reqEmail = "Please enter your email!";
const reqFav = "Please choose one option!";
const emailInvalid = "Please enter a valid email address!";

//listener that starts it all
form.addEventListener("submit", function (event) {

    event.preventDefault();//dont submit


    let nameValid = hasValue(form.elements["name"], reqName);
    let emailValid = validateEmail(form.elements["email"], reqEmail,emailInvalid);
    let favouritesValid = validateFavourites(form.elements["favourite"], reqFav);

    if (nameValid && emailValid && favouritesValid) {
        alert("Congratulations, now you are signed up to the newsletter!");
    }
});


// show a message with a type of the input
function showMessage(input, message, type) {
    // get the small element and set the message
    const msg = input.parentNode.querySelector("small");
    const box = input.parentNode.querySelector("input");
    //set the coloring
    input.classList.remove("red", "green");
    if(type == "err") {
        input.classList.add('red');
        box.classList.add('red');
        ret = false;
    }
    else
    {
        input.classList.add('green');
        ret = true;
    }
    msg.innerText = message;

    //input.className = type ? "success" : "error";
    return ret;
}

function showError(input, message) {
    return showMessage(input, message, false);
}

function showResult(input, message, success)
{
    if(success === true)
        return showMessage(input, "", "");
    else if(success=== false)
        return showMessage(input, message, "err");

}
//test if it has some input
function hasValue(input, message) {
    if (input.value.trim() === "") {
        return showResult(input, message,false);
    }
    return showResult(input, "",true);
}

function validateEmail(input, requiredMsg, invalidMsg) {
    // check if the value is not empty
    if (!hasValue(input, requiredMsg)) {
        return false;
    }
    // validate email format
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();
    if (!emailRegex.test(email)) {
        return showResult(input, invalidMsg, false);
    }
    return true;
}
function validateFavourites(input, Msg)
{
    var radios = document.getElementsByName("favourites");
    var formValid = false;
    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;
    }

    return showResult(input, Msg, formValid);
}


