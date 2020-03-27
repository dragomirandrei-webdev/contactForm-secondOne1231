const form = document.getElementById("form");
const infoForm = document.getElementById("contact_form");
const successBox = document.getElementById("congrats");

const h1 = document.getElementById("h1");

const firstSubject = document.getElementById("firstSubject");
const secondSubject = document.getElementById("secondSubject");
const message = document.getElementById("message");
const feedback = document.getElementById("feedback");

const firstName = document.getElementById("firstName");
const secondName = document.getElementById("secondName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");

const prevBtn = document.getElementById("previousBtn");

let isSubject1Valid = false;
let isSubject2Valid = false;
let isMessageValid = false;

let isFirstNameValid = false;
let isSecondNameValid = false;
let isEmailValid = false;
let isPhoneNumberValid = false;

function goBack() {
  window.history.back();
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

form.addEventListener("submit", event => {
  event.preventDefault();

  checkReasonInput();
});

infoForm.addEventListener("submit", event => {
  event.preventDefault();

  checkInfoInput();
});

function sendToNextForm() {
  if (isSubject1Valid && isSubject2Valid && isMessageValid) {
    form.style.display = "none";
    infoForm.style.display = "block";
    prevBtn.style.visibility = "visible";
  } else {
    return;
  }
}

function checkReasonInput() {
  const firstSubjectValue = firstSubject.value.trim();
  const secondSubjectValue = secondSubject.value.trim();
  const messageValue = message.value.trim();
  const feedbackValue = feedback.value.trim();

  if (firstSubjectValue === "") {
    setErrorFor(firstSubject, "This cannot be blank, we must know...");
  } else {
    setSuccessFor(firstSubject, "");
    isSubject1Valid = true;
  }

  if (secondSubjectValue === "") {
    setErrorFor(secondSubject, "This cannot be blank, we must know...");
  } else {
    setSuccessFor(secondSubject, "");
    isSubject2Valid = true;
  }

  if (messageValue === "") {
    setErrorFor(message, "C mon just send us a message");
  } else {
    setSuccessFor(message, "");
    isMessageValid = true;
  }
}

function checkInfoInput() {
  const firstNameValue = firstName.value.trim();
  const secondNameValue = secondName.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();

  if (firstNameValue === "") {
    setErrorFor(firstName, "This cannot be blank, we must know...");
  } else {
    setSuccessFor(firstName, "");
    isFirstNameValid = true;
  }

  if (secondNameValue === "") {
    setErrorFor(secondName, "This cannot be blank, we must know...");
  } else {
    setSuccessFor(secondName, "");
    isSecondNameValid = true;
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
    isEmailValid = true;
  }

  if (phoneNumberValue === "") {
    setErrorFor(phoneNumber, "This cannot be blank, we must know...");
  } else {
    setSuccessFor(phoneNumber, "");
    isPhoneNumberValid = true;
  }

  if (phoneNumberValue === "") {
    setErrorFor(phoneNumber, "This cannot be blank, we must know...");
  } else {
    setSuccessFor(phoneNumber, "");
    isPhoneNumberValid = true;
  }

  if (
    isEmailValid &&
    isFirstNameValid &&
    isSecondNameValid &&
    isPhoneNumberValid
  ) {
    form.parentNode.removeChild(form);
    infoForm.parentNode.removeChild(infoForm);
    prevBtn.style.visibility = "hidden";
    h1.style.display = "none";
    successBox.style.display = "block";
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
