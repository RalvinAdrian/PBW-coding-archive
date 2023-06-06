import Calculator from '../model/calculator.js?';
// optional challenge terakhir

function validateInput(req, res, next) {
    const { a, b, opt } = req.query;

    if (isNaN(a) || isNaN(b) || !['add', 'subtract', 'multiply', 'divide'].includes(opt)) {
        res.status(400).send('Invalid Input');
    } else {
        next();
    }
}

// Challenge implementation :
function calculate_get(data) {
    const calculator = new Calculator();
    let a = parseInt(data.a);
    let b = parseInt(data.b);
    let operation = data.operation;


    const operations = {
        add: calculator.add,
        subtract: calculator.subtract,
        multiply: calculator.multiply,
        divide: calculator.divide
    };

    if (operations.hasOwnProperty(operation)) {
        return operations[operation](a, b);
    } else {
        return 'Invalid operation';
    }
}

// function calculate_get(data) {
//     const calculator = new Calculator();
//     let a = parseInt(data.a);
//     let b = parseInt(data.b);
//     let operation = data.operation;

//     let result;
//     switch (operation) {
//         case 'add':
//             result = calculator.add(a, b);
//             break;
//         case 'subtract':
//             result = calculator.subtract(a, b);
//             break;
//         case 'multiply':
//             result = calculator.multiply(a, b);
//             break;
//         case 'divide':
//             result = calculator.divide(a, parseFloat(b));
//             break;
//         default:
//             result = 'Invalid operation';
//     }
//     return result;
// }

// default implementation is used in method post
function calculate_post(data) {
    const calculator = new Calculator();
    let a = parseInt(data.a);
    let b = parseInt(data.b);
    let operation = data.operation;

    let result;
    switch (operation) {
        case 'add':
            result = calculator.add(a, b);
            break;
        case 'subtract':
            result = calculator.subtract(a, b);
            break;
        case 'multiply':
            result = calculator.multiply(a, b);
            break;
        case 'divide':
            result = calculator.divide(a, b);
            break;
        default:
            result = 'Invalid operation';
    }
    return result;
}

export { calculate_get, calculate_post };