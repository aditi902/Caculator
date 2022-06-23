let inputString = '';
let buttons = document.querySelectorAll('.button');
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        inputString = eval(inputString);
        document.querySelector('input').value = inputString;
      } catch (err) {
        document.querySelector('input').value = 'Error!';
      }
    } else if (e.target.innerHTML == 'AC') {
      inputString = '';
      document.querySelector('input').value = inputString;
    } else if (e.target.innerHTML == 'Del') {
      inputString = inputString.slice(0, -1);
      document.querySelector('input').value = inputString;
    } else {
      console.log(e.target);
      inputString += e.target.innerHTML;
      document.querySelector('input').value = inputString;
    }
  });
});
