//==================chapter 31 to 35 ================================
//Qno 1
// var now = new Date();

// document.write(now);

//Qno 02
// var now = new Date();
// var monthIndex = now.getMonth();
// var monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];
// var currentMonth = monthNames[monthIndex];
// alert("The current month is: " + currentMonth);

//Qno 03
// var now = new Date();
// var dayIndex = now.getDay();

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var currentDay = dayNames[dayIndex];
// var dayAbbreviation = currentDay.substring(0, 3);

// alert("Today is: " + dayAbbreviation);

//Qno 04
// var now = new Date();
// var dayIndex = now.getDay();

// if (dayIndex === 0 || dayIndex === 6) {
//     alert("It’s Fun day");
// } else {
//     alert("it's a regular day");
// }

//Qno 05

// var now = new Date();            
// var currentDate = now.getDate(); 

// if (currentDate < 16) {          
//     alert("First fifteen days of this month");
// } else {
//     alert("Last days of this month");
// }

// //Qno 06
var time =d.getTime();
document.write("Eclapsed Milliseconds since January 1, 1970:"+time)
varnewVariable = Math.floor((new Date() - new Date(0))/ (1000 * 60));
document.write("Minutes since midnight, january 1,1970:", newVariable);

//Qno 07
// var currentDate = new Date();
// var currentHour = currentDate.getHours();

// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// //Qno 08
// var laterDate = new Date(2020, 11, 31);


// console.log("Date object for the last day of 2020:", laterDate);
// console.log("Later date:", laterDate.toDateString());


// //Qno 09
// var ramadanStart = new Date(" March 12, 2024");
// var currentDate = new Date();
// var timeDifference = currentDate - ramadanStart;
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


// alert("Number of days passed since 1st Ramadan: " + daysPassed);
// //Qno 10
// var referenceDate = new Date('December 5, 2015 22:50:16 GMT+0500');
// var startOf2015 = new Date('January 1, 2015 00:00:00 GMT+0000'); // GMT+0000 (UTC) for consistency
// var timeDifference = referenceDate - startOf2015;


// var secondsElapsed = Math.floor(timeDifference / 1000); // 1 second = 1000 milliseconds

// console.log('Seconds elapsed since January 1, 2015:', secondsElapsed);

// //Qno 11
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// console.log('Current hours:', currentHours);

// currentDate.setHours(currentHours + 1);


// console.log('Updated Date and Time:', currentDate.toString());

//Qno12
var currentDate = new Date();

currentDate.setFullYear(currentDate.getFullYear() - 100);

alert('Date 100 years back: ' + currentDate.toDateString());

// var currentDate = new Date();
// console.log('Current Date and Day:', currentDate.toDateString());


// currentDate.setFullYear(currentDate.getFullYear() - 100);


// alert('Date 100 years back: ' + currentDate.toDateString());

// alert('Date 100 years back:', currentDate.toDateString());

//Qno 13
var age = prompt("Please enter your age:");
age = Number(age);

var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

alert('Your birth year is: ' + birthYear);


//Qno 14
        window.onload = function() {
           
            var customerName = "John Doe"; 

            var currentDate = new Date();
            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var currentMonth = monthNames[currentDate.getMonth()];

            var unitsConsumed = 150; 
            var ratePerUnit = 12.50; 
            var latePaymentSurcharge = 50.00; 
            var netAmountPayable = unitsConsumed * ratePerUnit;
            var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

            netAmountPayable = netAmountPayable.toFixed(2);
            grossAmountPayable = grossAmountPayable.toFixed(2);

        
            document.getElementById('customerName').textContent = 'Customer Name: ' + customerName;
            document.getElementById('currentMonth').textContent = 'Current Month: ' + currentMonth;
            document.getElementById('unitsConsumed').textContent = 'Number of Units: ' + unitsConsumed;
            document.getElementById('ratePerUnit').textContent = 'Charges per Unit: $' + ratePerUnit.toFixed(2);
            document.getElementById('netAmountPayable').textContent = 'Net Amount Payable (within Due Date): $' + netAmountPayable;
            document.getElementById('latePaymentSurcharge').textContent = 'Late Payment Surcharge: $' + latePaymentSurcharge.toFixed(2);
            document.getElementById('grossAmountPayable').textContent = 'Gross Amount Payable (after Due Date): $' + grossAmountPayable;
        }
    















