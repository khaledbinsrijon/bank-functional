function getInputValue(inputId) {
    // get user element 
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputAmount = parseFloat(inputText);

    // clear input field
    input.value ='';
    return inputAmount;
}
function getPreviousValue(elementId,amount) {
    // get previous value
    const previous = document.getElementById(elementId);
    const previousText = previous.innerText;
    const previousValue = parseFloat(previousText);

    // add total value
    previous.innerText = previousValue+amount;
    return previousValue;
}
function getCurrentBalance (){
    const currentBalance = document.getElementById('total-balance');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceNum = parseFloat(currentBalanceText);
    return currentBalanceNum;
}
function updateBalance(amount,isAdd){
    // get total balance 
    const currentBalance = document.getElementById('total-balance');
    const currentBalanceNum = getCurrentBalance();

    // condition for it  will be addition or subtraction
    if (isAdd == true) {
        currentBalance.innerText = currentBalanceNum + amount;
    } else {
        currentBalance.innerText = currentBalanceNum - amount;
    }
    
}



document.getElementById('deposit-btn').addEventListener('click',function(){
   
    // calling function for get input value
    const depositAmount = getInputValue('deposit-input')
    
    
    // condition for undefined Character and num 
    if (depositAmount>0) {
     // calling function for get previous value 
    const previousDepositAmount = getPreviousValue('deposit-total',depositAmount) 

    // calling function for update balance
    updateBalance(depositAmount,true)
    
    }
    
   
    
    
   
})


document.getElementById('Withdraw-btn').addEventListener('click',function(){
    // calling function for get input value
    const withdrawAmount = getInputValue("withdraw-input")
    const currentBalanceNum = getCurrentBalance();
    // condition for undefined Character and num 
    if (withdrawAmount>0 && withdrawAmount < currentBalanceNum) {
         // calling function for previous value
     const previousWithdrawAmount = getPreviousValue('withdraw-total',withdrawAmount)

    //  calling function for update balance
     updateBalance(withdrawAmount,false)
    }
   if (withdrawAmount > currentBalanceNum) {
    console.log("You Can't Withdraw");
   }
})
