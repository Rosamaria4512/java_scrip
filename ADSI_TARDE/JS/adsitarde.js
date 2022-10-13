'use strict'


function cupos(numero_cupos){
    
    //alert (numero_cupos);
    var Vcupos = [];
    var suma =0;
    

     for (var i = 0; i <= numero_cupos-1; i++) {
      Vcupos[i] = i+1;

      Vcupos[i] = prompt()
    suma= suma+Vcupos[i];
    //alert(suma);
    if(Vnumeros[i]/2==0)
    
    alert("el numero " + Vcupos[i]+"es par");
    else
    alert("el numero " + Vcupos[i]+"es impar");


      
   

     alert("vector en la posicion [" + i + " ] tiene: " + Vcupos[i] );

    document.getElementById('cupos_p').innerHTML = "Los cupos son:"+" "+Vcupos;
    //document.getElementById('suma_p').innerHTML = "La suma:"+" "+suma;
    
     }
    
}

// function v_2(numero_cupos){

//     var Vnumeros =[];
//     for (var i = 0; i <= numero_cupos-1; i++) {
//         Vnumeros[i] = i+1;
  
//         Vnumeros[i] = prompt()
//         alert("vector en la posicion [" + i + " ] tiene: " + Vnumeros[i] );
//     }
//     for 
//        c


// //     if (Vnumeros %2 != 0){
// //  console.log("es numero par");
// //     }else {
// //      console.log("es numero par");

//     }





