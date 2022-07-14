function showMessage(input, message, status) {
  const msgContainer = document.querySelector('.error-messages');
  const msg = document.createElement('li');
  msg.className = 'error-msg';
  msg.innerHTML = message;

  input.closest('div').className = status ? 'success' : 'error';

  if (status) {
    return status;
  }
  msgContainer.style.display = 'flex';
  msgContainer.appendChild(msg);
  return status;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg, capitalsInEmail) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  const emailRegex = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  } if (email !== email.toLowerCase()) {
    return showError(input, capitalsInEmail);
  }
  return true;
}

const form = document.querySelector('#signup');

const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email address format (abc@email.com)';
const EMAIL_HASCAPITALS = 'Please make sure your email is only in lower case';
const MSG_INVALID = 'Please enter a message';

form.addEventListener('submit', function validateInputs(event) {
  event.preventDefault();

  document.querySelector('.error-messages').innerHTML = '';

  const nameValid = hasValue(form.elements.name, NAME_REQUIRED);
  const emailValid = validateEmail(form.elements.email, EMAIL_REQUIRED, EMAIL_INVALID,
    EMAIL_HASCAPITALS);
  const msgValid = hasValue(form.elements.msg, MSG_INVALID);
  
  if (nameValid && emailValid && msgValid) {
    this.submit();
  }
});
