function setDisplay(numero){
    document.getElementById('display').value += numero;
}

function voltaDisplay(){
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function setOperador(op){
    document.getElementById('display').value += op;
}

function resetDisplay(){
    document.getElementById('display').value = "";
    document.getElementById('display_result').value = "";
}

function setResultado(){
    let resultado = eval(document.getElementById('display').value);
    document.getElementById('display_result').value = resultado;
}