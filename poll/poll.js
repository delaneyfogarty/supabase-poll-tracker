import { createPoll, getAllPolls, logout } from '../fetch-util.js';
import { renderPoll } from '../render-utils.js';

const currentPollContainer = document.querySelector('.current-poll-container');
const form = document.querySelector('form');
const option1AddButton = document.getElementById('option1-add');
const option1SubButton = document.getElementById('option1-sub');
const option2AddButton = document.getElementById('option2-add');
const option2SubButton = document.getElementById('option2-sub');
const finishPollButton = document.getElementById('finish-poll-button');
const pastPollsEl = document.querySelector('.past-polls');
const logoutButton = document.querySelector('.logout');
// const voteButtons = document.querySelector('.vote-buttons-container');

let currentQuestion = '';
let option1 = '';
let option2 = '';
let score1 = 0;
let score2 = 0;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);

  currentQuestion = data.get('question-input');
  option1 = data.get('option-1-input');
  option2 = data.get('option-2-input');

  displayCurrentPoll();

  form.reset();

});

option1AddButton.addEventListener('click', () => {
  score1++;
  displayCurrentPoll();
});

option2AddButton.addEventListener('click', () => {
  score2++;
  displayCurrentPoll();
});

option1SubButton.addEventListener('click', () => {
  score1--;
  displayCurrentPoll();
});

option2SubButton.addEventListener('click', () => {
  score2--;
  displayCurrentPoll();
});

finishPollButton.addEventListener('click', async () => {
  const pastPoll = {
    question: currentQuestion,
    option_1: option1,
    option_2: option2,
    score_1: score1,
    score_2: score2,
  };
  await createPoll(pastPoll);
  await fetchAndDisplayPolls();

  currentQuestion = '',
  option1 = '',
  option2 = '',
  score1 = 0,
  score2 = 0;

  //pastPollsEl.append(pastPoll);
  displayCurrentPoll();

});

async function fetchAndDisplayPolls() {
  const polls = await getAllPolls();

  pastPollsEl.textContent = '';
  for (let poll of polls) {
    const newPoll = renderPoll(poll);

    pastPollsEl.append(newPoll);
  }
}

function displayCurrentPoll() {

  currentPollContainer.textContent = '';

  const pastPoll = {
    question: currentQuestion,
    option_1: option1,
    option_2: option2,
    score_1: score1,
    score_2: score2,
  };

  // questionInputEl.textContent = currentQuestion;
  // option1InputEl.textContent = option1;
  // option2InputEl.textContent = option2;

  const pollEl = renderPoll(pastPoll);

  currentPollContainer.append(pollEl);
}


logoutButton.addEventListener('click', async () => {
  await logout();

  window.location.href = '../';
});

window.addEventListener('load', async () => {
  await fetchAndDisplayPolls();
});