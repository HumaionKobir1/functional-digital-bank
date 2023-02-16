/*
1.Add withdraw button event handler
2.get Withdraw amount by using getInputFieldValueById function
3.Get previous withdraw amount by using getTextElementById function
4.calculate new withdraw total and set the value
5.Get previous vbalance total by using get getTextElementValvueById
*/


function withdrawBtn(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const previousBalanceTotal = getTextElementValueById('balance-total');

    if(newWithdrawAmount > previousBalanceTotal){
        alert("Your account doesn't have enough money");
        return;
    }
    
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    console.log(newBalanceTotal);
    setTextElementValueById('balance-total', newBalanceTotal);
}