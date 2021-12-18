// show a message with a type of the input
function showMessage(input, message, type, num) {
  // get the small element and set the message

  switch (num) {
    case 1:
      const msg1 = document.querySelector('.small-1');
      msg1.innerText = message;
      break;
    case 2:
      const msg2 = document.querySelector('.small-2');
      msg2.innerText = message;
      break;
    case 3:
      const msg3 = document.querySelector('.small-3');
      msg3.innerText = message;
      break;
    default:
      break;
  }

  // update the class for the input
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message, num) {
  return showMessage(input, message, false, num);
}

function showSuccess(input, num) {
  return showMessage(input, '', true, num);
}

function hasValue(input, message, num) {
  if (input.value.trim() === '') {
    return showError(input, message, num);
  }
  return showSuccess(input, num);
}

function validateEmail(input, requiredMsg, invalidMsg, capitalsInEmail, num) {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg, num)) {
    return false;
  }
  // validate email format
  const emailRegex = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg, num);
  } if (email !== email.toLowerCase()) {
    return showError(input, capitalsInEmail, num);
  }
  return true;
}

const form = document.querySelector('#signup');

const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email address format';
const EMAIL_HASCAPITALS = 'Please make sure your email is only in lower case';
const MSG_INVALID = 'Please enter a message';

form.addEventListener('submit', function (event) {
  // stop form submission
  event.preventDefault();

  // validate the form
  const nameValid = hasValue(form.elements.name, NAME_REQUIRED, 1);
  const emailValid = validateEmail(form.elements.email, EMAIL_REQUIRED, EMAIL_INVALID,
    EMAIL_HASCAPITALS, 2);
  const msgValid = hasValue(form.elements.msg, MSG_INVALID, 3);
  // if valid, submit the form.
  if (nameValid && emailValid && msgValid) {
    this.submit();
  }
});
