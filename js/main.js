var searchBtn = document.querySelector("#search-btn");
var searchForm = document.querySelector(".search-form");
var searchInput = document.querySelector("#search-box");
var searchBtnClick = document.querySelector("#search-btn--click");
var cartBtn = document.querySelector("#cart-btn");
var cartItemsContainer = document.querySelector(".cart-items-container");
var menuBtn = document.querySelector("#menu-btn");
var navbar = document.querySelector(".navbar");
// ----------------------------------------------------------     ------------------------------------------------------ //
var contactForm = document.querySelector("form#contact-form");
// checking form element on every input
contactForm.addEventListener("input", function (e) {
    var targetInput = e.target;
    switch (targetInput.getAttribute("type")) {
        case "text":
            checkName(targetInput);
            break;
        case "email":
            // checkEmail(targetInput);
            break;
        case "number":
            checkNumber(targetInput);
            break;
    }
});
function checkName(nameInput) {
    var isValid = false;
    // console.log("checking name: " + nameInput.value);
    errorMessage("");
    errorStyling(nameInput, false);
    if (nameInput.value.trim() === "") {
        isValid = false;
        // console.log("Name area can not be blank");
        errorMessage("Name area can not be blank");
        errorStyling(nameInput, true);
    }
    else if (nameInput.value.trim().length < 3) {
        // console.log("Name has to be longer than 3 characters");
        errorMessage("Name has to be longer than 3 characters");
        errorStyling(nameInput, true);
    }
    return isValid;
}
// function checkEmail(emailInput: HTMLInputElement) {
//   let isValid = false;
//   emailInput.parentElement.classList.remove("valid", "error");
//   console.log("checking email: " + emailInput.value);
//   console.log(emailInput.parentElement);
//   return isValid;
// }
function checkNumber(numberInput) {
    var isValid = false;
    errorMessage("");
    errorStyling(numberInput, false);
    if (!numberInput.value.includes("050") &&
        !numberInput.value.includes("055")) {
        errorMessage("Your phone number should start with 055 or 050");
        errorStyling(numberInput, true);
    }
    else if (numberInput.value.length < 10) {
        errorMessage("Number can not to be shorter than 10 characters");
        errorStyling(numberInput, true);
    }
    // console.log("checking number: " + numberInput.value);
    return isValid;
}
function errorMessage(message) {
    var messageContainerElem = document.querySelector(".errorMsgBox");
    var messageTextElem = document.querySelector(".errorMsgBox .errorMsg");
    if (!message) {
        messageContainerElem.classList.remove("display");
    }
    messageContainerElem.classList.add("display");
    messageTextElem.innerText = message;
}
function errorStyling(inputName, isError) {
    if (!isError) {
        inputName.parentElement.classList.remove("error");
        inputName.parentElement.classList.add("valid");
    }
    else {
        inputName.parentElement.classList.remove("valid");
        inputName.parentElement.classList.add("error");
    }
}
// ----------------------------------------------------------     ------------------------------------------------------ //
searchBtn.onclick = function () {
    searchForm.classList.toggle("active");
    cartItemsContainer.classList.remove("active");
    navbar.classList.remove("active");
};
searchBtnClick.onclick = function () {
    var dataSearch = {
        search: searchInput.value
    };
    var dataSearchStorage = JSON.parse(localStorage.getItem("dataSearch"));
    dataSearchStorage !== null && //true
        dataSearchStorage !== undefined && // true
        dataSearchStorage && // true
        dataSearchStorage.search === searchInput.value // true
        ? alert("Bu product haqqinda evvelce axtarish etmisiniz")
        : localStorage.setItem("dataSearch", JSON.stringify(dataSearch));
};
cartBtn.onclick = function () {
    cartItemsContainer.classList.toggle("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
};
menuBtn.onclick = function () {
    navbar.classList.toggle("active");
    cartItemsContainer.classList.remove("active");
    searchForm.classList.remove("active");
};
window.onscroll = function () {
    navbar.classList.remove("active");
    cartItemsContainer.classList.remove("active");
    searchForm.classList.remove("active");
};
