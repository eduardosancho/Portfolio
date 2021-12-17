const name = document.querySelector("#name");
const name = document.querySelector("#email");

function storeData() {
  const contactFormData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('msg').value
  };

  localStorage.setItem('contactInfo', JSON.stringify(contactFormData));
}

function displayData (){
  console.log(name);
}