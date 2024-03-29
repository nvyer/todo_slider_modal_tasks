const email = document.querySelector(".email-input");
const phoneNumber = document.querySelector(".phone-number-input");
const phoneNumberError = document.querySelector(".phone-number-error");
const emailError = document.querySelector(".email-error");
const btn = document.querySelector(".submit-btn");
const modal = document.querySelector(".modal");
const closeIcon = document.querySelector(".close-icon");
const okayBtn = document.querySelector(".okay-btn");

const validInputs = {
  email: false,
  phoneNumber: false,
};

const validatedEmail = email.addEventListener("input", (event) => {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!re.test(event.target.value)) {
    emailError.style.visibility = "visible";
  } else {
    validInputs.email = true;
    emailError.style.visibility = "hidden";
  }

  if (event.target.value.length === 0) {
    validInputs.phoneNumber = false;
    emailError.style.visibility = "hidden";
  }

});

const validatedPhoneNumber = phoneNumber.addEventListener("input", (event) => {
  if (isNaN(event.data)) {
    phoneNumberError.style.visibility = "visible";
  } else {
    validInputs.phoneNumber = true;
    phoneNumberError.style.visibility = "hidden";
  }

  if (event.target.value.length === 0) {
    validInputs.phoneNumber = false;
    phoneNumberError.style.visibility = "hidden";
  }

  if (event.data === "+" && event.target.value.includes("+")) {
    validInputs.phoneNumber = true;
    event.target.value = event.target.value.slice(
      0,
      event.target.value.length - 1
    );
    return;
  }
  const normalizedValue = event.target.value.replace("+", "");
  event.target.value = `+${normalizedValue}`;
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
  }
};

btn.addEventListener("click", () => {
  if (validInputs.email && validInputs.phoneNumber) {
    modal.style.visibility = "visible";
  }
});

closeIcon.addEventListener("click", () => {
  modal.style.visibility = "hidden";
});

okayBtn.addEventListener("click", () => {
  modal.style.visibility = "hidden";
});
