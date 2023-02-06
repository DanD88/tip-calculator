const tipPercentageButtons = document.getElementById("tipPercentageButtons");
tipPercentageButtons.addEventListener("click", function(event) {
  const amount = document.getElementById("amount").value;
  const tipPercentage = event.target.innerHTML.replace("%", "");
  const tip = amount * tipPercentage / 100;
  const total = parseFloat(amount) + tip;
  document.getElementById("tip").innerHTML = "Tip: $" + tip.toFixed(2);
  document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2);
});

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function() {
  document.getElementById("amount").value = "";
  document.getElementById("tip").innerHTML = "Tip:";
  document.getElementById("total").innerHTML = "Total:";
});








// function calculateTip(tipPercent) {
//     let billAmount = document.getElementById("bill-amount").value;
//     let errorMessage = document.getElementById("error-message");
    
//     if (!billAmount) {
//       errorMessage.innerHTML = "Please enter a valid bill amount.";
//       return;
//     }
//     if (isNaN(billAmount)) {
//       errorMessage.innerHTML = "Please enter a valid bill amount.";
//       return;
//     }
    
//     let tipAmount = billAmount * (tipPercent / 100);
//     let tipResult = document.getElementById("tip-result");
//     tipResult.innerHTML = " $" + tipAmount;
//     tipResult.style.display = "block";
//     errorMessage.innerHTML = "";
//   }

//   function calculateTotal(totalAmount) {


//     let billAmount = document.getElementById("bill-amount").value;

//     let tipAmount = billAmount * (tipPercent / 100);

//     // let tipResult = document.getElementById("tip-result");
//     // let tipAmount = tipResult;

   
//     let Amount = billAmount + tipAmount + totalAmount;
//     let totalResult = document.getElementById("total-result");
//     totalResult.innerHTML = " $" + Amount;
//     totalResult.style.display = "block";

//   }
  