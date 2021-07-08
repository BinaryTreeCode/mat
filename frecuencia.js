var n1 = prompt("numero_1 de fi")
var n2 = prompt("numero_2 de fi")
var n3 = prompt("numero_3 de fi")
var n4 = prompt("numero_4 de fi")
var n5 = prompt("numero_5 de fi")

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);
n4 = parseInt(n4);
n5 = parseInt(n5);


var suma = n1 + n2 + n3 + n4 + n5;
var división1 = n1 / suma;
var división2 = n2 / suma;
var división3 = n3 / suma;
var división4 = n4 / suma;
var división5 = n5 / suma;

var multiplicación1 = división1 * 100;
var multiplicación2 = división2 * 100;
var multiplicación3 = división3 * 100;
var multiplicación4 = división4 * 100;
var multiplicación5 = división5 * 100;

var total1 = n1;
var total2 = n1 + n2;
var total3 = n1 + n2 + n3;
var total4 = n1 + n2 + n3 + n4;
var total5 = n1 + n2 + n3 + n4 + n5;

var verificación_división = división1 + división2 + división3 + división4 + división5;
if (verificación_división == 1) {
    console.log("división correcta")
}
else {
console.log("división incorrecta")
}


var verificación_multiplicación = multiplicación1 + multiplicación2 + multiplicación3 + multiplicación4 + multiplicación5;
if (verificación_multiplicación == 100) {
    console.log("multipilcación correcta")
}
else  {
    console.log("multipilcación incorrecta")
}

function onClickButto() {

document.write("fr 1 / " + división1);
document.write('<br>');
document.write("fr 2 / " + división2);
document.write('<br>');
document.write("fr 3 / " + división3);
document.write('<br>');
document.write("fr 4 / " + división4);
document.write('<br>');
document.write("fr 5 / " + división5);

document.write('<br>');
document.write('<br>');

document.write("% 1 / " + multiplicación1 );
document.write('<br>');
document.write("% 2 / " + multiplicación2 );
document.write('<br>');
document.write("% 3 / " + multiplicación3 );
document.write('<br>');
document.write("% 4 / " + multiplicación4 );
document.write('<br>');
document.write("% 5 / " + multiplicación5 );

document.write('<br>');
document.write('<br>');

document.write("F 1 / " + total1);
document.write('<br>');
document.write("F 2 / " + total2);
document.write('<br>');
document.write("F 3 / " + total3);
document.write('<br>');
document.write("F 4 / " + total4);
document.write('<br>');
document.write("F 5 / " + total5);

  }

