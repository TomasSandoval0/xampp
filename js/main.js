var nombre = "tomas";
var altura= 170;
var concat= nombre+" "+altura;
/*
var datos=document.getElementById("datos");

datos.innerHTML=`
<h2>Mi nombre es: ${nombre}</h2>
<h3>Mido: ${altura}cm</h3>
`;
datos.innerHTML= concat;
for(var i=2000; i<=2020; i++){
    datos.innerHTML += "<h2>Estamos en el año: "+i;
}
*/
function MuestraMiNombre(nombre, altura){
    var misdatos=`
<h2>Mi nombre es: ${nombre}</h2>
<h3>Mido: ${altura} cm</h3>
`;
return misdatos;
}
function imprimir(){
    var datos=document.getElementById("datos");
    datos.innerHTML= MuestraMiNombre(nombre, altura);
}
imprimir();

var nombres= ["tomas", "luis", "rober"];
document.write(`<h1>Listado de Nombres</h1>`);

for(i=0; i<nombres.length; i++){
    document.write(nombres[i]+`<br/>`);
}
/*
nombres.forEach((nombre)=>{
    document.write(nombre + `<br/>`);
});
*/