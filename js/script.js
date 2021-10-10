const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const btn = document.querySelector(".btn");
const fullNameError = document.querySelector("#fullNameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");
const success = document.querySelector("#success");
const allErrors = document.querySelector("#form-errors");

const fullNameValue = fullName.value.trim();
const messageValue = message.value.trim();
const emailValue = email.value.trim();

var errors = [];

form.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  ClearAllErrors();
  const fullNameValue = fullName.value.trim();
  const messageValue = message.value.trim();
  const emailValue = email.value.trim();
  if (fullNameValue === "" || fullNameValue === null) {
    errors.push("Name cannot be empty");
    allErrors.style.display = "block";
  }
  if (fullNameValue.length < 5) {
    errors.push("Name must be at least 5 characters");
    allErrors.style.display = "block";
  }
  const checkEmail = validateEmail(emailValue);
  if (emailValue === "" || emailValue === null) {
    errors.push("Email message cannot be empty");
    allErrors.style.display = "block";
  }
  if (!checkEmail) {
    errors.push("Email message is not valid");
    allErrors.style.display = "block";
  }
  if (messageValue.length < 25) {
    errors.push("message must be at least 25 characters");
    allErrors.style.display = "block";
  }
  if (errors.length > 0) {
    errors.forEach((element) => {
      allErrors.innerHTML += `${element}<br />`;
    });
  } else {
    success.innerHTML = "Your information has been sent :)";
    allErrors.style.display = "none";
    ClearAllFields();
    SuccessInfo();
  }
}
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function ClearAllErrors() {
  allErrors.innerHTML = "";
  success.innerHTML = "";
  errors = [];
}
function ClearAllFields() {
  fullName.value = "";
  message.value = "";
  email.value = "";
}
function SuccessInfo() {
  setTimeout(function () {
    success.style.display = "none";
  }, 2000);
}
