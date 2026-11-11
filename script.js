const resultBox = document.getElementById('result');
const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');
const messageBox = document.getElementById('message');

let count = 0;

function updateUI() {
    resultBox.textContent = count;

    resultBox.classList.remove('red', 'yellow', 'green');
    if (count > 0) {
        resultBox.classList.add('yellow');
    } else if (count < 0) {
        resultBox.classList.add('green');
    } else {
        resultBox.classList.add('red');
    }

    plusBtn.disabled = (count >= 10);
    minusBtn.disabled = (count <= -10);

    if (count === 10 || count === -10) {
        messageBox.textContent = 'Вы достигли экстремального значения';
    } else {
        messageBox.textContent = '';
    }
}

plusBtn.addEventListener('click', () => {
    if (count < 10) {
        count++;
        updateUI();
    }
});

minusBtn.addEventListener('click', () => {
    if (count > -10) {
        count--;
        updateUI();
    }
});
