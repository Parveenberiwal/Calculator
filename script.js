let currentValue = '';

function Number(value){
    currentValue += value;
    document.getElementById('result').value = currentValue;
}

function Operator(value){
    currentValue += value;
    document.getElementById('result').value = currentValue;
}

function calculateResult(){
    var num1 = document.getElementById('result').value;
    var num2 = eval(num1);
    document.getElementById('result').value = num2;
}

function clearResult(){
    currentValue = '';
    document.getElementById('result').value = '';
}


