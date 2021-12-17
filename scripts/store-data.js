function storeData() {
  const contactFormData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('msg').value,
  };

  localStorage.setItem('contactInfo', JSON.stringify(contactFormData));
}

document.getElementById('name').onchange = function saveLocalByName() {
  return storeData();
};

document.getElementById('email').onchange = function saveLocalByEmail() {
  return storeData();
};

document.getElementById('msg').onchange = function saveLocalByMessage() {
  return storeData();
};

const localObject = localStorage.getItem('contactInfo');

if (localObject) {
  const localName = JSON.parse(localObject).name;
  const localEmail = JSON.parse(localObject).email;
  const localMessage = JSON.parse(localObject).message;
  if (localName) {
    const nameid = document.querySelector('#name');
    nameid.value = JSON.parse(localObject).name;
  }

  if (localEmail) {
    const emailid = document.querySelector('#email');
    emailid.value = JSON.parse(localObject).email;
  }

  if (localMessage) {
    const messageid = document.querySelector('#msg');
    messageid.value = JSON.parse(localObject).message;
  }
}