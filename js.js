
//Para que funcione el event, debemos poner de parametro "event", lo mismo con la llamada del metodo en el html (onclick)

var resultadosLista = [];

function mostrarValor(event) {

    event.preventDefault(); // Evita el envío del formulario
    let resultado;
    let operacionMasResultado;

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
        
    //El resultado de la operacion
    document.getElementById("Resultado").innerHTML = resultado;

    const operacionCompleta = `${numero1} ${operador} ${numero2} = ${resultado}`;
    resultadosLista.push(operacionCompleta);

    resultadosLista.forEach(function(resultado){
        
        console.log(numero1 + " " + operador + " " + numero2 + " = " + resultado);
    });
    
    actualizarHistorial();
}

function actualizarHistorial() {
    const listaHistorial = document.getElementById("listaHistorial");
    listaHistorial.innerHTML = "";  // Limpiar la lista antes de volver a llenar

    resultadosLista.forEach(function(resultados) {
        const li = document.createElement("li"); //Para crear la etiqueta "li"
        li.textContent = resultados; //Para insertar el resultado en la lista
        li.classList.add("list-group-item");  // Añadir clase de Bootstrap
        listaHistorial.appendChild(li); //Para añadir el elemento li, dentro de la clase donde se encuentra el id (en la etiqueta ul)
    });
}

