function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';    
    if(isNaN(inputFieldValue)){
        alert('Please provide a valid number');
        return 0;
    }
    return inputFieldValue;
    // console.log(inputFieldValue);
}
function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElemetValue = parseFloat(textElementValueString);
    return textElemetValue;
}

function setTextElementValueById (elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}