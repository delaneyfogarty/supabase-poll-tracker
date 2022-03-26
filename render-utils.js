export function renderPoll(poll) {

  const pollEl = document.createElement('div');
  const questionEl = document.createElement('p');
  const option1El = document.createElement('p');
  const option2El = document.createElement('p');
  const score1El = document.createElement('p');
  const score2El = document.createElement('p');

  questionEl.textContent = poll.question;
  option1El.textContent = poll.option_1;
  option2El.textContent = poll.option_2;
  score1El.textContent = poll.score_1;
  score2El.textContent = poll.score_2;

  pollEl.classList.add('poll');

  pollEl.append(questionEl, option1El, option2El, score1El, score2El);

  return pollEl;
}