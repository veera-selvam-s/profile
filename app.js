document.getElementById("bd").innerHTML="6 september 2001";
var bd= new Date("9-6-2001").getFullYear();
var now=new Date().getFullYear();
var age=now-bd;
console.log(age);
document.getElementById("Age").innerHTML=age;
document.getElementById("cp").innerHTML= now;