// Button events 
let depositBtn = document.getElementById('btn_deposit');
depositBtn.addEventListener('click', function (){
    let inputAmount = getInputValue('deposit_amount');
    let currentAmount = getCurrentValue('deposit_balance');
    let transactionBalance;
    let balanceTotal;
    if(inputAmount > 0){
        transactionBalance = updateTransaction(inputAmount, currentAmount, 'deposit_balance');
        balanceTotal = updateBalance(inputAmount, null, true);
    }

});

let widtrawBtn = document.getElementById('btn-withdraw');
widtrawBtn.addEventListener('click', function (){
    let inputAmount = getInputValue('withdraw_amount');
    let currentAmount = getCurrentValue('withdraw_balance');
    let transactionBalance;
    let balanceTotal;
    if(inputAmount > 0){
        transactionBalance = updateTransaction(inputAmount, currentAmount, 'withdraw_balance');
        balanceTotal = updateBalance(inputAmount, currentAmount, false);
    }
});


// getInputValue
function getInputValue(input){
    let inputValue = document.getElementById(input);
    // console.log(inputValue);
    let inputAmount = parseFloat(inputValue.value);
    // console.log(inputAmount);
    inputValue.value = '';
    return inputAmount;
}

// getCurrentValue
function getCurrentValue(currentInput){
    let currentBalanceText = document.getElementById(currentInput);
    let currentBalance = parseFloat(currentBalanceText.innerText);
    // console.log(currentBalance);
    return currentBalance;
}

function updateTransaction(inputAmount, currentAmount, currentBalance){
    let balanceNow = currentAmount + inputAmount;

    let currentBalanceText = document.getElementById(currentBalance);
    currentBalanceText.innerText = balanceNow;

    return balanceNow;
}


// updateBalance
function updateBalance(inputAmount, currentAmount, bol){
    
    let totalBalanceText = document.getElementById('balance');
    let totalBalance = parseFloat(totalBalanceText.innerText);
    console.log(totalBalance);

    

    if(bol == true){
        totalBalance += inputAmount;
        totalBalanceText.innerText = totalBalance;
    }else if(bol == false){
        if( totalBalance >= inputAmount){
            totalBalance -= inputAmount;
            totalBalanceText.innerText = totalBalance;
        }else{
            let currentBalanceText = document.getElementById('withdraw_balance');
            currentBalanceText.innerText ='00';
        }
    }

}
