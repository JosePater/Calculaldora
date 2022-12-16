class Calculadora {
    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a,b) {
        return a * b;
    }

    dividir(a,b) {
        return a / b;
    }

    // Método que el residuo de la división
    modulo(a,b) {
        return a % b;
    }

}

var calculadora = new Calculadora();
var resultado = calculadora.sumar(5,6);

console.log(resultado);