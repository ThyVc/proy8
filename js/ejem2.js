//vamos a calcular la edad de una personica
var nom,anio,edad,dia;
nom=prompt("Nombre: ");
anio=parseInt(prompt("AÑo de nacimiento: "));
edad=2024-anio;
if(edad>=18){
    document.writeln(nom+" eres MAYOR de edad");
}else{
    document.writeln(nom+" eres MENOR de edad");
}//elif repasar*
dia=parseInt(prompt("Ingrese un numero del dia entre el 1-7: "));//no olvidar de un parseint para las var int
switch(dia){
    case 1: alert("Lun");break;//el break es salida sin condiciones
    case 2: alert("Mar");break;
    case 3: alert("Mier");break;
    case 4: alert("Juev");break;
    case 5: alert("Vier");break;
    case 6: alert("Saba");break;
    case 7: alert("Domi");break;
   default: alert("Fuera de rango ");//vota el feura de caso
}