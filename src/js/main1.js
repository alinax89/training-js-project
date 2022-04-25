const input = document.querySelector('input')
const theme = document.getElementById('theme')
input.addEventListener('click', () => {
    if (input.value === '1') {
        theme.classList.remove('white-theme')
        theme.classList.remove('violet-theme')
        theme.classList.add('blue-theme')
    } else if (input.value === '2') {
        theme.classList.remove('violet-theme')
        theme.classList.remove('blue-theme')
        theme.classList.add('white-theme')

    } else if (input.value === '3') {
        theme.classList.remove('blue-theme')
        theme.classList.remove('white-theme')
        theme.classList.add('violet-theme')

    }
})


const numbers = document.querySelectorAll('[data-number]');
const operands = document.querySelectorAll('[data-operand]');
const equal = document.querySelector('[data-equals]');
const del = document.querySelector('[data-delete]');
const reset = document.querySelector('[data-reset]');
const dot = document.querySelector('[data-dot]');
let previousNumberDisplay = document.querySelector('.app__previous');
let currentNumberDisplay = document.querySelector('.app__current');



// let previousNumberDisplay.textContent = '';
// let currentNumberDisplay.textContent = '';
let operand = '';

// RESET
const handleReset =()=> {
    previousNumberDisplay.textContent = '';
    currentNumberDisplay.textContent = '0';
    operand = '';

}

// DELETE
const handleDelete =()=> {
    currentNumberDisplay.textContent = currentNumberDisplay.textContent.toString().slice(0, -1);
    if (currentNumberDisplay.textContent === '') {
        currentNumberDisplay.textContent = '0'
    }

}
const handlerDot = () => {
    if (currentNumberDisplay.textContent.includes('.')) return;
    currentNumberDisplay.textContent += dot.textContent;
}
// APPEND NUMBER
const handleNumberPress =(e)=> {
    console.log(currentNumberDisplay.textContent)
    console.log(e.target.textContent)

    if (currentNumberDisplay.textContent === '0') {
        currentNumberDisplay.textContent = '';
    }
        if (e.target.textContent === '.' && currentNumberDisplay.textContent.includes('.')) {
            currentNumberDisplay.textContent = '0.'
        };

    // currentNumberDisplay.textContent += e.target.textContent.toString();
    // if (e.target.textContent === '.') {
    //     currentNumberDisplay.textContent += dot.textContent
    // }

    currentNumberDisplay.textContent += e.target.textContent


    // let previousDisplayNumber = currentNumberDisplay.textContent;
    // let currentDisplayNumber = e.target.textContent;

    // if (currentDisplayNumber === '.' && currentNumberDisplay.textContent.includes('.')) return;
    // currentNumberDisplay.textContent =
    //     previousDisplayNumber.toString() + currentDisplayNumber.toString();
    // updateDisplay();
}

// CHOOSE OPERATION
const handleOperationPress =(e)=> {
    if (currentNumberDisplay.textContent === '0') return;
    if (previousNumberDisplay.textContent !== '') {
        handleEqaulPress();
    }
    operand = e.target.textContent;
    previousNumberDisplay.textContent = `${currentNumberDisplay.textContent} ${operand} `;
    currentNumberDisplay.textContent = '0';
    // updateDisplay();

}

// CALCULATE
const handleEqaulPress =()=> {
    let resultNumber;
    const previous = parseFloat(previousNumberDisplay.textContent);
    const current = parseFloat(currentNumberDisplay.textContent);
    if (isNaN(previous) || isNaN(current)) return;

    if (operand === '+') {
        resultNumber = previous + current;
    }
    if (operand === '-') {
        resultNumber = previous - current;
    }
    if (operand === '/') {
        resultNumber = previous / current;
    }
    if (operand === 'x') {
        resultNumber = previous * current;
    }

    currentNumberDisplay.textContent = resultNumber;

    // previousNumberDisplay.textContent = currentNumberDisplay.textContent + ` ${operand}`;
    previousNumberDisplay.textContent = '';
    // updateDisplay();

}

// UPDATE DISPLAY
// const updateDisplay = () => {
//     currentNumberDisplay.textContent = currentNumberDisplay.textContent;
//     previousNumberDisplay.textContent = previousNumberDisplay.textContent + ` ${operand}`;
// }

numbers.forEach(btn => {
    btn.addEventListener('click', handleNumberPress);
});
operands.forEach(btn => {
    btn.addEventListener('click', handleOperationPress);
});
equal.addEventListener('click', handleEqaulPress);
reset.addEventListener('click', handleReset);
del.addEventListener('click', handleDelete);
// dot.addEventListener('click', handlerDot);