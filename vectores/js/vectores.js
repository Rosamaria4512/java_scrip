'use strict'
//  var mivectorNum = [5,7,9,2,3,6,8];
//  var mivectorNum1 =new Array();


// // var miVectorCar=['M','i',' ','c','a','s','a'];
// // alert(miVectorCar);

// // var miVectorstr=["perro","gato","cuy","canejo"];
// // alert(miVectorstr);

// // var miVectorVarios=["rosa",22,true,1,69];
// alert(miVectorVarios);

var miMatrizNum=[
    [5,4,6,8,23,32,4,7],
    [12,2,9,24,5,1,34,3],
    [10,22,61,25,13,17,25],
    [16,45,28,30,43,19,26]
];

function vector() {
    var mivectorNum = [];
     for (var i = 0; i <= 7; i++) {
        //  alert(i+mivectorNum+[i]);
        mivectorNum[i] = prompt()

        alert("vector en la posicion [" + i + " ] tiene: " + mivectorNum[i]);
    }


}

function matriz() {
    var mivectorNum = [];
    var miMatrizNum =[];
    for (var i = 0; i <6; i++)
     {
        //  alert(i+mivectorNum+[i]);
        mivectorNum[i] = prompt()
        alert("vector en la posicion [" + i + " ] tiene: " + mivectorNum[i]);
     
    
        for (j=0; j<=3; j++)
         {
            alert("ingrese matriz en pos" +i+j);
            miMatrizNum[i][j] = prompt();
            alert("matriz en pos["+i+"]["+j+"]tiene: " + miMatrizNum[i][j]);
         }
    
    }
}

