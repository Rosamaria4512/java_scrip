'use strict'

//funciones por referencia 
function suma(){

var nombre= document.getElementById('idtxt_nombre').value;
var apellido = document.getElementById('idtxt_apellido').value;
var asignatura = document.getElementById('txt_Asignatura').value;
var nota1=document.getElementById('txt_nota1').value;
var nota2=document.getElementById('txt_nota2').value;
var nota3=document.getElementById('txt_nota3').value;
var pnota1=document.getElementById('txt_pnota1').value;
var pnota2=document.getElementById('txt_pnota2').value;
var pnota3=document.getElementById('txt_pnota3').value;

var suma = parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3);

var pnota1 =parseFloat(nota1)*0.3;
var pnota2 =parseFloat(nota2)*0.3;
var pnota3 =parseFloat(nota3)*0.4;

var definitiva= parseFloat(pnota1)+parseFloat(pnota2)+parseFloat(pnota3);







//var definitiva = parseFloat(pnota1)*parseFloat(nota1)+parseFloat(pnota2)*parseFloat(nota2)+parseFloat(pnota3)*parseFloat(nota3);



document.getElementById("resul_txt_definitiva").value = nombre + " "+apellido;
document.getElementById("txt_parrafo1").value = asignatura;
document.getElementById("resul_txt_sumanotas").value = suma;
document.getElementById("resul_txt_definitiva").value = definitiva;
document.getElementById("txt_pnota1").value = pnota1;
document.getElementById("txt_pnota2").value = pnota2;
document.getElementById("txt_pnota3").value = pnota3;
alert("su  nombre es : "+ nombre+" " +apellido + " "+ "asignatura"+" "+ asignatura+ "  " + "El resultado de la suma es :" +suma +  " " + "su nota definitiva es: " +definitiva);

}

function notas(){
    var nota1=document.getElementById('txt_nota1').value;
    var nota2=document.getElementById('txt_nota2').value;
    var nota3=document.getElementById('txt_nota3').value;
    

    if (nota1>nota2&& nota1>nota3){
        document.getElementById('txt_max').value = nota1;

    }
    if (nota2>nota1&& nota2>nota3){
        document.getElementById('txt_max').value = nota2;

    }
    if (nota3>nota1&& nota3>nota2){
        document.getElementById('txt_max').value = nota3;

    }
    if (nota1<nota2&& nota1<nota3){
        document.getElementById('txt_min').value = nota1;

    }
    if (nota2<nota1&& nota2<nota3){
        document.getElementById('txt_min').value = nota2;

    }
    if (nota3<nota1&& nota3<nota2){
        document.getElementById('txt_min').value = nota3;

    }


}

function llamame(nombre,apellido, asignatura){
    var nom= nombre;
    var apell = apellido;
    var asignature = asignatura; 

    document.getElementById('txt_nya').innerHTML = nom+" "+apell;
    document.getElementById('txt_parrafo1').value = asignature;

}

function division(nota1,nota2,nota3){//parametros

try{
    parceFloat (nota1)/ parceFloat (nota2);

}

catch(error){
    alert("tienes un error");
    alert("tu erros es"+ error);
}
finally{
    alert("proceso finalizado");
}
  ///  alert("notas digitadas"+" "+nota1+" "+nota2+" "+nota3+"y "+"El resultado de la division es:"+" "+ resultado );

}


'use strict'
var mivectorNum = [5,7,9,2,3,6,8];
var mivectorNum1 =new Array();
alert(mivectorNum)

var miVectorCar=['M','i',' ','c','a','s','a'];
alert(miVectorCar);

var miVectorstr=["perro","gato","cuy","canejo"];
alert(miVectorstr);

var miVectorVarios=["rosa",22,true,1,69];
alert(miVectorVarios);


