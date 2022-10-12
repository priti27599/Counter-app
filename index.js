// Import stylesheets
import './style.css';

//set initial count
let count = 0;

//select value and buttons
let values = document.querySelector('#value');
let btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('reset')) {
      count = 0;
    } else {
      count++;
    }
    if (count < 0) {
      values.style.color = 'red';
    } else if (count === 0) {
      values.style.color = 'black';
    } else {
      values.style.color = 'green';
    }
    values.textContent = count;
  });
});
