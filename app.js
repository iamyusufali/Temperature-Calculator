const convertBtn = document.querySelector('.convert-btn'),
    farenheit = document.querySelector('.farenheit'),
    celcius = document.querySelector('.celcius'),
    errorMsg = document.querySelector('.error-msg');

// Show results
function showResult() {
    let tempF = parseFloat(farenheit.value);
    if(tempF){
        let tempF = parseFloat(farenheit.value);
        let result = ((tempF - 32) * 5/9).toFixed(2);
        celcius.setAttribute('value', result);
    } else {
        showError();
    }
}

// Shows error
function showError() {
    farenheit.className = 'temp-input farenheit error';
    errorMsg.style.display = 'block';

    setTimeout(removeError, 1700);
}

// Remove Error
function removeError() {
    farenheit.className = 'temp-input farenheit';
    errorMsg.style.display = 'none';
}

// Event Listner
convertBtn.addEventListener('click', showResult);