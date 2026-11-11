const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultWindow = document.getElementById('result');

function getNumbers() {
    const val1 = num1Input.value.trim();
    const val2 = num2Input.value.trim();

    if (val1 === '' || val2 === '' || isNaN(Number(val1)) || isNaN(Number(val2))) {
        resultWindow.textContent = 'Ошибка: введите корректные числа';
        resultWindow.style.color = 'red';
        return null;
    }

    resultWindow.style.color = '#333';
    return [Number(val1), Number(val2)];
}

function sum(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) return 'Ошибка: деление на ноль';
    return a / b;
}

document.getElementById('btn-sum').addEventListener('click', () => {
    const nums = getNumbers();
    if (nums) resultWindow.textContent = sum(nums[0], nums[1]);
});

document.getElementById('btn-sub').addEventListener('click', () => {
    const nums = getNumbers();
    if (nums) resultWindow.textContent = subtract(nums[0], nums[1]);
});

document.getElementById('btn-mul').addEventListener('click', () => {
    const nums = getNumbers();
    if (nums) resultWindow.textContent = multiply(nums[0], nums[1]);
});

document.getElementById('btn-div').addEventListener('click', () => {
    const nums = getNumbers();
    if (nums) resultWindow.textContent = divide(nums[0], nums[1]);
});
