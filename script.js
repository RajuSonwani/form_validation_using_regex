// console.log("hello world!");
let sAlert= document.getElementById("success");
let fAlert = document.getElementById("failed");
sAlert.style.display = "none";
fAlert.style.display = "none";
let nameValue = false;
let contactValue = false;
let emailValue = false;

let name = document.getElementById("name");
name.addEventListener("blur", () => {
    // console.log("blur event fired")
    let regex = /^([a-z0-9]){3,20}$/i;
    let str = name.value;
    console.log(str, regex)
    if (regex.test(str)) {
        nameValue = true;
        name.classList.remove("is-invalid")
    } else {
        namelValue = false;
        name.classList.add("is-invalid")
    }
    console.log(nameValue);

});

let contact = document.getElementById("contact");
contact.addEventListener("blur", () => {
    console.log("blur event fired");
    let regex = /^([0-9]){10}$/;
    let str = contact.value;
    // console.log(str,regex)
    if (regex.test(str)) {
        contactValue = true;
        contact.classList.remove("is-invalid")
    } else {
        contactValue = false;
        contact.classList.add("is-invalid")
    }
    console.log(contactValue);

});
let email = document.getElementById("email");
email.addEventListener("blur", () => {
    console.log("blur event fired")
    let regex = /^([_\-.0-9a-z])+\@+([_\-.0-9a-zs])+\.+([A-Z]){2,7}$/i;
    let str = email.value;
    console.log(str, regex)
    if (regex.test(str)) {
        emailValue = true;
        email.classList.remove("is-invalid")
    } else {
        emailValue = false;
        email.classList.add("is-invalid")
    }
    console.log(emailValue);

});

let submit = document.getElementById("btn");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(nameValue, contactValue, emailValue)
    if (nameValue && contactValue && emailValue) {
        fAlert = document.getElementById("failed");
        fAlert.style.display = "none";
        sAlert = document.getElementById("success");
        sAlert.classList.remove("hide");
        sAlert.classList.add("show");
        sAlert.style.display="block";


    } else {
        sAlert = document.getElementById("success");
        sAlert.style.display = "none";
        fAlert = document.getElementById("failed");
        fAlert.classList.remove("hide");
        fAlert.classList.add("show");
        fAlert.style.display="block";

    }
});
