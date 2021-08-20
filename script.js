let icons = document.querySelectorAll('.arrow');

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', clickArrow);
}

function clickArrow(e) {
  icon = e.target;
  faqEntry = icon.parentElement;
  question = faqEntry.getElementsByClassName('question')[0];
  answer = faqEntry.getElementsByClassName('answer')[0];

  icon.classList.toggle('selected');
  question.classList.toggle('selected');
  answer.classList.toggle('selected');
}
