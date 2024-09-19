

//Para que funcione el event, debemos poner de parametro "event", lo mismo con la llamada del metodo en el html (onclick)
function mostrarValor(event) {

    event.preventDefault(); // Evita el envío del formulario
    let resultado;

    // Obtener los valores de los inputs

    //parseInt --> pasa una cadena de texto a un valor numerico de tipo int
    const numero1 = parseInt(document.getElementById("numero1").value);
    const operador = document.getElementById("operador").value;
    const numero2 = parseInt(document.getElementById("numero2").value);

    // Verificar si los campos están vacíos o si no son números válidos
    if (numero1 === "" || isNaN(numero1)) {
        alert("Por favor, ingrese un número válido para el Número 1.");
        return;
    }
    if (numero2 === "" || isNaN(numero2)) {
        alert("Por favor, ingrese un número válido para el Número 2.");
        return;
    }
    if (operador !== "+" && operador !== "-" && operador !== "*" && operador !== "/") {
        alert("Por favor, ingrese un operador válido (+, -, *, /).");
        return;  
    }


    //Operaciones (dependiendo del signo elegido)
    if(operador == "+"){

        resultado = numero1 + numero2;
        document.getElementById("Resultado").innerHTML = resultado;
    }

    if(operador == "-"){
        resultado = numero1 - numero2;
        document.getElementById("Resultado").innerHTML = resultado;
    }

    if(operador == "*"){
        resultado = numero1 * numero2;
        document.getElementById("Resultado").innerHTML = resultado;
    }

    if(operador == "/"){
        resultado = numero1 / numero2;
        document.getElementById("Resultado").innerHTML = resultado;
    }
        
    document.getElementById("Resultado").innerHTML = resultado;
    
}

