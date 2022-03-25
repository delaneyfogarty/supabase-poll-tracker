import { signUp, signIn, getUser, redirectIfNotLoggedIn } from './fetch-util.js';

const signUpForm = document.querySelector('.sign-up');
const signInForm = document.querySelector('.sign-in');


redirectIfNotLoggedIn();

signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(signUpForm);
  // console.log(data.get('email'), data.get('password'));
  await signUp(data.get('email'), data.get('password'));

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