import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textEl = document.querySelector('textarea');

const formText = {
  email: '',
  message: '',
};

function saveState(state) {
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}

formEl.addEventListener(
  'input',
  throttle(event => {
    if (event.target.name === 'email') {
      formText.email = event.target.value;
      saveState(formText);
    }

    if (event.target.name === 'message') {
      formText.message = event.target.value;
      saveState(formText);
    }
  }, 500)
);

const inputText = JSON.parse(localStorage.getItem('feedback-form-state'));
inputEl.value = inputText.email;
textEl.value = inputText.message;

formEl.addEventListener('submit', e => {
  console.log(inputText);
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  inputEl.value = '';
  textEl.value = '';
});
