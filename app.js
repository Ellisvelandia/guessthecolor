function submitMyGuess() {
  const value = document.querySelector('input').value;
  const currentColor = window.currentColor;
  if (value === currentColor) {
    alert('You are right! Congrats!')
  } else {
    alert('Wrong! Your answer was: #' + value + '. The correct answer is: #' + currentColor);
  }
  document.querySelector('input').value = '';
  setRandomColor();
}
function randomNumber() {
  const n = Math.ceil(Math.random() * 15);
  if (n > 9) {
    return 'abcdef'[n - 10];
  }
  return n + '';
}
function setRandomColor() {
  const hex = randomNumber() + randomNumber() + randomNumber();
  window.currentColor = hex;
  document.querySelector('.color-box').style.backgroundColor = '#' + hex;
}
setRandomColor();