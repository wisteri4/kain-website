const hamburger = document.querySelector(".hammenu_phone");
const navMenu = document.querySelector(".navmenu");
const form = document.getElementById('form');
const username_input = document.getElementById('usernameinput');
const pass_input = document.getElementById('passwordinput');
const error_message =document.getElementById('error_mess');

const realuser = "stevelovesfood";
const realpass = "12345678";

//Burger logic
hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); //refer to active classes in css
})

document.querySelectorAll(".navitem").forEach(n => n.addEventListener(
    "click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
})) //once clicked remove the active displays


//form logic
form.addEventListener("submit", (e) =>{

    const username = username_input.value;
    const password = pass_input.value;

    let errors = getLoginFormErrors(username_input.value, pass_input.value)

    if(errors.length > 0){
        e.preventDefault(); //prevent submission
        error_message.innerText = errors.join(". ");
    }

    if( username == realuser && password  == realpass ){
        alert("Log in succesful");
        //redirection field
        loggedSuccess();
    } else{
        errors_message.innerText = "Incorrect username or password";
    }
})

function loggedSuccess(){
    document.getElementById("logged").classList.add("hidden"); //Display of hidden is none
    document.getElementById("loggedin").classList.remove("hidden"); //Remove class and show the other displays
    document.getElementById("addrev").classList.remove("hidden");
}


function getLoginFormErrors(users, passwor){
    let errors = [];

    if(users == '' ||  users == null){
        errors.push('Username field is required')
    }

    if(passwor == '' ||  passwor == null){
        errors.push('Password field is required')
    }

    return errors;
}
