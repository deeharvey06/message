const { hash } = window.location;
const messageForm = document.querySelector('#message-form');
const messageShow = document.querySelector('#message-show');
const linkForm = document.querySelector('#link-form');


const message = atob(hash.replace('#', ''));

if (message) {
  messageForm.classList.add('hide');
  messageShow.classList.remove('hide');

  document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();

  const messageInput  = document.querySelector('#message-input');
  const encrypted = btoa(messageInput.value);

  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;
  console.log('window.location');
  linkInput.select();

  messageForm.classList.add('hide');
  linkForm.classList.remove('hide');

});