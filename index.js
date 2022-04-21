import './style.css';

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.keyboard__button');

let switcher = true;
let number = '';

buttons.forEach((e) => {
  e.addEventListener('click', () => {
    const buttonValue = e.getAttribute('data-value');
    const saveButton = buttonValue === '99';
    const resetButton = buttonValue === '-99';

    if (switcher && buttonValue.length === 1) {
      number += buttonValue;
    } else if (saveButton) {
      display.style.display = 'inline-block';
      switcher = false;
    } else if (resetButton) {
      switcher = true;
      display.style.display = 'none';
      number = '';
    }
    display.textContent = number;
  });
});
