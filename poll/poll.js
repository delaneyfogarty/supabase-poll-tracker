import { createPoll } from '../fetch-util';

const currentPollContainer = document.querySelector('.poll-form-container');
const submitButton = document.querySelector('.submit-button');
const formEl = document.querySelector('.poll-form');
const questionInputEl = document.querySelector('.question-input');
const option1InputEl = document.querySelector('.option-1-input');
const option2InputEl = document.querySelector('.option-2-input');
const option1VotesEl = document.querySelector('option-1-votes');
const option2VotesEl = document.querySelector('option-2-votes');
const option1AddButton = document.getElementById('option1-add');
const option1SubButton = document.getElementById('option1-sub');
const option2AddButton = document.getElementById('option2-add');
const option2SubButton = document.getElementById('option2-sub');
const finishPollButton = document.getElementById('finish-poll-button');

let currentQuestion = '';
let option1 = '';
let option2 = '';
let score1 = 0;
let score2 = 0;

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(formEl);

  currentQuestion = data.get('question-input');
  option1 = data.get('option-1-input');
  option2 = data.get('option-2-input');
  score1 = data.get('option-1-votes');
  score2 = data.get('option-2-votes');

  questionInputEl.textContent = currentQuestion;
  option1InputEl.textContent = option1;
  option2InputEl.textContent = option2;
  option1VotesEl.textContent = score1;
  option2VotesEl.textContent = score2;

  formEl.reset();

});

option1AddButton.addEventListener('click', () => {
  score1++;
  option1VotesEl.textContent = score1;
});

option2AddButton.addEventListener('click', () => {
  score2++;
  option2VotesEl.textContent = score2;
});

option1SubButton.addEventListener('click', () => {
  score1--;
  option1VotesEl.textContent = score1;
});

option2SubButton.addEventListener('click', () => {
  score2--;
  option2VotesEl.textContent = score2;
});

finishPollButton.addEventListener('click', async () => {
  await createPoll(currentQuestion, option1, option2, score1, score2);

// displayPolls;
});