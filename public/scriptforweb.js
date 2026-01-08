const hamburger = document.querySelector(".hammenu_phone");
const navMenu = document.querySelector(".navmenu");
//Log in
const logUserIn = document.getElementById("logyourself");
const getuserlog = document.querySelector(".login");
const submittingg= document.getElementById('submitbutton');
//Check user
const form = document.getElementById('form');
const username_input = document.getElementById('usernameinput');
const pass_input = document.getElementById('passwordinput');
const error_message =document.getElementById('error_mess');
let profilePic = document.getElementById('foodpic');
let fileInput = document.getElementById('food_img');
//Access 
const reviewaccess = document.getElementById('logs');
const backGround = document.getElementById('review_access');

const realuser = "stevelovesfood";
const realpass = "123456";

//----------- Burger menu logic ----------------------
//Reference from youtube: https://youtu.be/flItyHiDm7E?si=L2LPQZs_KrVpVHtO  Web Dev Tutorials
hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); //refer to active classes in css
})

document.querySelectorAll(".navmenu").forEach(n => n.addEventListener(
    "click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
})) //once clicked remove the active displays

// -----------------------Log in pop up ----------------------
//Referred to the same video as the hamburger menu 
logUserIn.addEventListener("click", ()  =>{
    logUserIn.classList.toggle("active");
    getuserlog.classList.toggle("active");
})

document.querySelectorAll("submittingg").forEach(n => n.addEventListener(
    "click", () => {
        logUserIn.classList.remove("active");
})) //once clicked remove the active displays

//------------------ Log in logic ----------------------
// Log in validation reference from youtube: https://youtu.be/bVl5_UdcAy0?si=Uu__6xUnfYnSdrhx by Coding2Go
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const username = username_input.value;
    const password = pass_input.value;

    if( username == realuser && password  == realpass ){
        alert("Log in succesful");
        //redirection field
        loggedSuccess();
    }
    else{
        errormess.innerText = "Incorrect username or password";
    }
});

function loggedSuccess(){
    document.getElementById("logged").classList.add("hidden");  
    //The hidden class "display: none" is implemented on the logged id so the log in is hidden 
    document.querySelector(".logtolog").classList.add("hidden");  
    document.getElementById("logindicator").classList.add("hidden"); 
    //Implemented on the log indicator
    document.getElementById("greetuser").classList.remove("hidden"); 
    //Then removed on this id to show greeting message "Hello, stevelovesfood"
    document.getElementById("loggedin").classList.remove("hidden");
    //And show the entry field to log food review

    reviewaccess.addEventListener("click",() =>{
        document.getElementById("review_access").style.display = "flex";
    }) //Review access 

    backGround.addEventListener("click",() =>{
        document.getElementById("review_access").style.display = "none";
    }) // Logic reference from youtube: https://youtu.be/ptI8g-05VM0?si=e97N70YFutkQ2tQy by UM tutorial
}


// --------------------- Image Logic -------------------
// Reference from youtube: https://youtu.be/xXrs4j-p3yE?si=WMZLcVIEfYKb1o0N by Great Stack
fileInput.onchange = function(){

    profilePic.src = URL.createObjectURL(fileInput.files[0]);
}
