//Qno 1
function displayDateTime() {
    var now = new Date();
    var formattedDateTime = now.toLocaleString();

    document.getElementById("dateTime").innerHTML = `<h1>${formattedDateTime}</h1>`;
}

displayDateTime();
setInterval(displayDateTime, 1000);
//Qno 02
function greetUser(firstName, lastName) {
    var fullName = `${firstName} ${lastName}`;
    var greeting = `Hello, ${fullName}! Welcome!`;

    console.log(greeting);

}
greetUser("Muhammad", "Ali");

//Qno 03
function calculateSum() {

    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);

  
    var sum = num1 + num2;

    document.getElementById("result").innerText = `The sum is: ${sum}`;
}

//Qno 04
function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;

    var result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById("result").innerText = `The result is: ${result}`;
}

//Qno 05
function square(number) {
    return number * number;
}

var result = square(5);
console.log(`The square of 5 is: ${result}`);

//Qno 06
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

var result = factorial(5);
console.log(`The factorial of 5 is: ${result}`);

//Qno 07
function displayCounting() {
    var start = parseInt(document.getElementById("start").value, 10);
    var end = parseInt(document.getElementById("end").value, 10);
    var result = '';

    if (!isNaN(start) && !isNaN(end) && start <= end) {
        for (let i = start; i <= end; i++) {
            result += i + '<br>';
        }
    } else {
        result = 'Please enter valid start and end numbers where start is less than or equal to end.';
    }


    document.getElementById("countingResult").innerHTML = result;
}

//Qno 08
function calculateHypotenuse() {
    
    const base = parseFloat(document.getElementById("base").value);
    const perpendicular = parseFloat(document.getElementById("perpendicular").value);

  
    function calculateSquare(value) {
        return value * value;
    }

    
    const baseSquare = calculateSquare(base);
    const perpendicularSquare = calculateSquare(perpendicular);
    const hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
    document.getElementById("result").innerText = `The hypotenuse is: ${hypotenuse.toFixed(2)}`;
        }






