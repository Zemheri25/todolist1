let mylist1 = document.querySelector(".mylist1");
let mylist2 = document.querySelector(".mylist2");
let mylist3 = document.querySelector(".mylist3");
let mylist4 = document.querySelector(".mylist4");
let mylist5 = document.querySelector(".mylist5");


let breakfast = document.querySelector("#breakfast");
let email = document.getElementById("email");
let meditation = document.getElementById("meditation");
let code = document.getElementById("code");
let screencast = document.getElementById("screencast");


let h1 = document.querySelector(".h1");
let h2 = document.querySelector(".h2");
let h3 = document.querySelector(".h3");
let h4 = document.querySelector(".h4");
let h5 = document.querySelector(".h5");


breakfast.addEventListener("click", check1)

function check1 () {
    if(breakfast.checked) {
        mylist1.style.backgroundColor = "#4D244E"
        h1.style.color = "#CF7878"
    } else {
        mylist1.style.backgroundColor = "#6D335C"
        h1.style.color = "white"
    }
}


email.addEventListener("click", check2)

function check2 () {
    if(email.checked) {
        mylist2.style.backgroundColor = "#4D244E"
        h2.style.color = "#CF7878"
    }else {
        mylist2.style.backgroundColor = "#6D335C"
        h2.style.color = "white"
    }
}


meditation.addEventListener("click", check3)

function check3 () {
    if(meditation.checked) {
        mylist3.style.backgroundColor = "#4D244E"
        h3.style.color = "#CF7878"
    }else {
        mylist3.style.backgroundColor = "#6D335C"
        h3.style.color = "white"
    }
}


code.addEventListener("click", check4)

function check4 () {
    if(code.checked) {
        mylist4.style.backgroundColor = "#4D244E"
        h4.style.color = "#CF7878"
    }else {
        mylist4.style.backgroundColor = "#6D335C"
        h4.style.color = "white"
    }
}


screencast.addEventListener("click", check5)

function check5 () {
    if(screencast.checked) {
        mylist5.style.backgroundColor = "#4D244E"
        h5.style.color = "#CF7878"
    }else {
        mylist5.style.backgroundColor = "#6D335C"
        h5.style.color = "white"
    }
}
