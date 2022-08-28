//Get Values 
function getValue() {

    //Getting the values to calculate the loan amount
    let loanAmount = document.getElementById("loanAmount");
    let payments = document.getElementById("payments");
    let rate = document.getElementById("rate");

    //parse into integers 
    loanAmount = parseInt(loanAmount);
    payments = parseInt(payments);
    rate = parseInt(rate);

    if(Number.isInteger(loanAmount)&& Number.IsInteger(payments) && Number.IsInteger(rate)){
        //we call generateNumbers 
        let numbers = generateNumbers(loanAmount, payments, rate);
        //we call displayNumbers 
        displayCalculations(monthlyPayment, totalPrincipal, totalInterest, totalCost);
    } else {
        alert("You must enter integers");
    }


}


// Do the calculations 
function displayCalculations(loanAmount, payments, rate) {

    let monthlyPayment =  (loanAmount)*(rate/1200)/(1-(1 + rate/1200)**(-payments));
}


//display the calculation 
function display(params) {
    
}