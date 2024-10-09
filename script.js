function  maturityAmount() {
    
    const principle = parseFloat(document.getElementById('principleAmount').value);
    const interest = parseFloat(document.getElementById('interestAmount').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    const maturityAmount = principle + (principle * interest * tenure)/100;

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
};
document.getElementById('calculateBtn').addEventListener('click',maturityAmount);