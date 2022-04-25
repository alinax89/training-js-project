const darkTheme = document.querySelectorAll('[data-theme]')
const theme = document.querySelector('body')

darkTheme.forEach(toggle => {
    toggle.addEventListener('click', e => {
        if (toggle.getAttribute('data-theme') === 'dark') {
            theme.setAttribute('data-theme', 'dark')
        }
        if (toggle.getAttribute('data-theme') === 'light') {
            theme.setAttribute('data-theme', 'light')
        }
        if (toggle.getAttribute('data-theme') === 'neon') {
            theme.setAttribute('data-theme', 'neon')
        }
    })
})

const numbers = document.querySelectorAll('[data-number]');
const operands = document.querySelectorAll('[data-operand]');
const equal = document.querySelector('[data-equals]');
const del = document.querySelector('[data-delete]');
const reset = document.querySelector('[data-reset]');
const dot = document.querySelector('[data-dot]');
let previous = document.querySelector('.app__previous');
let current = document.querySelector('.app__current');
let symbol = ''

const handlerNumber = (number) => {
    if (current.textContent === '0') {
        current.textContent = '';
    }
    current.textContent += number.textContent.toString();
}

const handlerDot = () => {
    if (current.textContent.includes('.')) return;
    current.textContent += dot.textContent;
}

const handlerOperand = (operand) => {
    if (current.textContent === '0') return;

    if (previous.textContent !== '') {
        handlerEqual()
    }
    symbol = operand.textContent
    previous.textContent = current.textContent + ' ' + symbol
    current.textContent = '0'
}

const handlerEqual = () => {
    let result
    let prev = parseFloat(previous.textContent);
    let cur = parseFloat(current.textContent);

    if (isNaN(prev) || isNaN(cur)) return;

    switch (symbol) {
        case "+":
            result = prev + cur
            break
        case "-":
            result = prev - cur
            break
        case "x":
            result = prev * cur
            break
        case "/":
            result = prev / cur
            break
        default:
            return
    }
    current.textContent = result
    previous.textContent = '';
}

const handlerDelete = () => {
    current.textContent = current.textContent.toString().slice(0, -1)
    if (current.textContent === '') {
        current.textContent = '0'
    }
}
const handlerReset = () => {
    current.textContent = '0'
    previous.textContent = ''
}

numbers.forEach(number => {
    number.addEventListener('click',
        () => {
            handlerNumber(number);
        }
    )
})

operands.forEach(operand => {
    operand.addEventListener('click',
        () => {
            handlerOperand(operand)
        }
    )
})

equal.addEventListener('click', handlerEqual)
del.addEventListener('click', handlerDelete)
dot.addEventListener('click', handlerDot)
reset.addEventListener('click', handlerReset)