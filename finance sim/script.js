// This code is just an example. You can add your own code here.
let progressBar = document.getElementById("progressBar");
let yearCount = document.getElementById("yearCount");
let netWorthValue = document.getElementById("netWorth");
let netWorthBar = document.getElementById("netWorthBar");

progressBar.style.width = `0%`;


let yearTime = 42000;
let monthTime = yearTime/12;

//time
let month = 0;
let quarter = 0;
let year = 1;
//let width = 0;

let  objective  = 10000000;

//savings
let monthSalary = 70000;
let yearSalary = monthSalary*12;
let netWorth = 0;

//investments
let totalInvestment = 0;
let monthlyInvestment = 0;
let bankValue = 0;
let MFvalue = 0;
let stockValue = 0;
let FDvalue = 0;


//expenditures
let monthlyExpenditure = 0;
let rent = 10000;
let food = 4000;
let family = 0;
let EMI = 0;
let tax = 0;


var gameInterval = setInterval(() => {

    // If the month is equal to 3, open a popup.
    if (month !== 0 && month%3 == 0) {
        //TBD
    }

    // If the month is equal to 12, reset the month and quarter.
    if (month === 13) {
        month = 0;
        yearCount.innerHTML = `Year ${++year}`;
    }

    // Increase the progress bar by 1%.
    //width = (month / year) * 100 + "%";
    progressBar.style.width = `${100  * month/12}%`;
    netWorthValue.innerHTML = `₹${calNetWorth()}`;
    netWorthBar.style.width = `${100  * netWorth/objective}%`;

    // If the year is equal to 10, clear the interval.
    if (year == 10) {
        clearInterval(gameInterval);
    }

    // Increase the month by 1.
    month++;

}, monthTime);


function calNetWorth(){
    netWorth = netWorth +  monthSalary - calMonthExpenditure();
    return netWorth;
}

function calMonthlyInvestments(){
    bankValue = monthSalary - calMonthExpenditure();
    monthlyInvestment = bankValue;
    totalInvestment = totalInvestment + monthlyInvestment;

    return monthlyInvestment;
}

function calMonthExpenditure(){
    //if(yearSalary < 800000){
        tax = 0.1*monthSalary
    //}
    monthlyExpenditure = rent + food + family + EMI + tax;
    return monthlyExpenditure;
}
