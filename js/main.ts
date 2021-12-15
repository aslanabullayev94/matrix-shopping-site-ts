let searchBtn = document.querySelector("#search-btn")! as HTMLElement;
let searchForm = document.querySelector(".search-form")! as HTMLElement;
let searchInput = document.querySelector("#search-box")! as HTMLInputElement;
let searchBtnClick = document.querySelector(
  "#search-btn--click"
)! as HTMLElement;
let cartBtn = document.querySelector("#cart-btn")! as HTMLElement;
let cartItemsContainer = document.querySelector(
  ".cart-items-container"
)! as HTMLElement;
let menuBtn = document.querySelector("#menu-btn")! as HTMLElement;
let navbar = document.querySelector(".navbar")! as HTMLElement;

// ----------------------------------------------------------     ------------------------------------------------------ //
const contactForm = document.querySelector(
  "form#contact-form"
)! as HTMLFormElement;

// checking form element on every input
contactForm.addEventListener("input", (e) => {
  let targetInput = e.target as HTMLInputElement;
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

function checkName(nameInput: HTMLInputElement) {
  let isValid = false;
  // console.log("checking name: " + nameInput.value);
  errorMessage("");
  errorStyling(nameInput, false);
  if (nameInput.value.trim() === "") {
    isValid = false;
    // console.log("Name area can not be blank");
    errorMessage("Name area can not be blank");
    errorStyling(nameInput, true);
  } else if (nameInput.value.trim().length < 3) {
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
function checkNumber(numberInput: HTMLInputElement) {
  let isValid = false;
  errorMessage("");
  errorStyling(numberInput, false);
  if (
    !numberInput.value.includes("050") &&
    !numberInput.value.includes("055")
  ) {
    errorMessage("Your phone number should start with 055 or 050");
    errorStyling(numberInput, true);
  } else if (numberInput.value.length < 10) {
    errorMessage("Number can not to be shorter than 10 characters");
    errorStyling(numberInput, true);
  }
  // console.log("checking number: " + numberInput.value);
  return isValid;
}

function errorMessage(message: string) {
  let messageContainerElem = document.querySelector(
    ".errorMsgBox"
  ) as HTMLElement;

  let messageTextElem = document.querySelector(
    ".errorMsgBox .errorMsg"
  ) as HTMLElement;
  if (!message) {
    messageContainerElem.classList.remove("display");
  }
  messageContainerElem.classList.add("display");
  messageTextElem.innerText = message;
}

function errorStyling(inputName: HTMLInputElement, isError: boolean) {
  if (!isError) {
    inputName.parentElement.classList.remove("error");
    inputName.parentElement.classList.add("valid");
  } else {
    inputName.parentElement.classList.remove("valid");
    inputName.parentElement.classList.add("error");
  }
}
// ----------------------------------------------------------     ------------------------------------------------------ //

searchBtn.onclick = (): void => {
  searchForm.classList.toggle("active");
  cartItemsContainer.classList.remove("active");
  navbar.classList.remove("active");
};

searchBtnClick.onclick = (): void => {
  let dataSearch = {
    search: searchInput.value,
  };

  let dataSearchStorage = JSON.parse(localStorage.getItem("dataSearch"));

  dataSearchStorage !== null && //true
  dataSearchStorage !== undefined && // true
  dataSearchStorage && // true
  dataSearchStorage.search === searchInput.value // true
    ? alert("Bu product haqqinda evvelce axtarish etmisiniz")
    : localStorage.setItem("dataSearch", JSON.stringify(dataSearch));
};

cartBtn.onclick = (): void => {
  cartItemsContainer.classList.toggle("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

menuBtn.onclick = (): void => {
  navbar.classList.toggle("active");
  cartItemsContainer.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = (): void => {
  navbar.classList.remove("active");
  cartItemsContainer.classList.remove("active");
  searchForm.classList.remove("active");
};
