import { signUp, signIn, getUser, redirectIfNotLoggedIn } from './fetch-util.js';

const signUpForm = document.querySelector('.sign-up');
const signInForm = document.querySelector('.sign-in');


redirectIfNotLoggedIn();

signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(signUpForm);

  await signUp(data.get('sign-up-email'), data.get('sign-up-password'));

  const user = getUser();

  if (user) {
    window.location.href = './poll';
  }

});

signInForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(signInForm);

  await signIn(data.get('email'), data.get('password'));

  const user = getUser();

  if (user) {
    window.location.href = './poll';
  }

});