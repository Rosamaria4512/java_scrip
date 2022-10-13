'use strict'


function misdias(nroDia) {
    switch (nroDia) {
        case ("1"):
            document.getElementById('pdialetras').innerHTML = 'Lunes'
            break;

        case ("2"):
            document.getElementById('pdialetras').innerHTML = 'Martes'
            break;
        case ("3"):
            document.getElementById('pdialetras').innerHTML = 'Miercoles'
            break;
        case ("4"):
            document.getElementById('pdialetras').innerHTML = 'Jueves'
            break;
        case ("5"):
            document.getElementById('pdialetras').innerHTML = 'Viernes'
            break;
        case ("6"):
            document.getElementById('pdialetras').innerHTML = 'sabado'
            break;
        case ("7"):
            document.getElementById('pdialetras').innerHTML = 'Domingo'
            break;

        default:
            document.getElementById('pdialetras').innerHTML = "opcion invalida, diga otro numero";
            break;
    }
}


function arbolA(id) {
    // definimos la anchura máxima
    var max = id;
    // determina el numero de lineas mostradas
    var j = 1;
    // contiene el resultado a mostrar
    var result = "";

    for (var i = 1; i <= max; i++) {
        result += "<br>" + (Array((1 + (Math.ceil(max / 1)) - j)).join(" ") + Array(i + 1).join("*"));
    }

    document.getElementById('resul').innerHTML = result;
}



function nombres(nom1, nom2, nom3, nom4) {

    const nombre = [];
    nombre.push(nom1)
    nombre.push(nom2)
    nombre.push(nom3)
    nombre.push(nom4)

    document.getElementById('resul').innerHTML = nombre;
    document.getElementById('resul2').innerHTML = "Posiciones: " + Object.keys(nombre);

}

//         let reves = nombre.reverse().slice();
//         document.getElementById('resul3').innerHTML = reves;
//         document.getElementById('resul4').innerHTML = "Posiciones: "+ Object.keys(reves);


 function invertirCadena(nom1, nom2, nom3, nom4) {
    const nombre = [];
    var invertir = "";
    
    nombre.push(nom1)
    nombre.push(nom2)
    nombre.push(nom3)
    nombre.push(nom4)
   
  for (var i = nombre.length - 1; i >= 0; i--) {
   invertir += nombre[i];
    document.getElementById('resul5').innerHTML = invertir;
    document.getElementById('resul6').innerHTML = "Posiciones: "+ Object.keys(invertir);
  }
 
 

 }
