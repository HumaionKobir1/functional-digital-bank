
function depositBtn(){
    // convert string value to a number
    const newDepositAmount = getInputFieldValueById('deposit-field');

    // get previous deposit total by id
    const previousDepositTotal = getElementValueById('deposit-total');

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // get previous balance by using the function
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

}