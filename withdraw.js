/*
1.Add withdraw button event handler
2.get Withdraw amount by using getInputFieldValueById function
3.Get previous withdraw amount by using getTextElementById function
4.calculate new withdraw total and set the value
5.Get previous vbalance total by using get getTextElementValvueById
*/


function withdrawBtn(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    console.log(newWithdrawAmount);
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    console.log(previousWithdrawTotal);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    console.log(newBalanceTotal);
    setTextElementValueById('balance-total', newBalanceTotal);
}