function calcularF() {
    let input = document.getElementById('numeroInput').value;
    let numero = parseInt(input)

    if (isNaN(numero) || numero < 0) {
        alert("Ingrese un número entero positivo.");
        document.getElementById('resultado').innerText = '';
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById('resultado').innerText = `El factorial de ${numero} es ${factorial}.`;
}