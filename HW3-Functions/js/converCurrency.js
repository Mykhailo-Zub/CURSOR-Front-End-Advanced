function convertCurrency() {
    let amount = prompt('Function 7 - "Currency Converter". Enter amount in format "amount$" or "amountUAH":');
    while (!((amount.includes("$") && +amount.slice(0, -1)) || ((amount.includes("UAH") || amount.includes("uah")) && +amount.slice(0, -3)))) {
        amount = prompt('Function 7 - "Currency Converter". Enter CORRECT amount in format "amount$" or "amountUAH":');
    }
    let result;
    let exchangeRates = 25;
    if (amount.includes("$") && +amount.slice(0, -1)) {
        result = +amount.slice(0, -1) * exchangeRates;
        alert(`Your ${amount} equals ${result}UAH`)
    } else {
        result = +amount.slice(0, -3) / exchangeRates;
        alert(`Your ${amount} equals ${result}$`)
    }
}
