
function validar(){   // Validación de datos
 // datos a validar 
 var nombre=document.getElementById("nombre").value;
 var apellidos=document.getElementById("apellidos").value;
 var pwd=document.getElementById("pwd").value;
 var pwd2=document.getElementById("pwd2").value;
 var edad=document.getElementById("edad").value;
 var fecha=document.getElementById("DPC_fechaIngreso_DD/MM/YYYY").value;
 var provincia=document.getElementById("provincia").value;
 var correo=document.getElementById("correo").value;
// var aceptar=document.getElementById("aceptar").value;
/* OJO  LA CASILLA DE VERIFICACIÓN SE COMPRUEBA DIRECTAMENTE
   SIN EXTRAER UN VALUE */
 var valido=true; // si todo va bien después de todas las comprobaciones, sigue a true
 // CONTROLES DE VALIDACIÓN:
 // El nombre ha sido introducido, y no a espacios en blanco o números
 if (nombre.length==0||parseInt(nombre)){
     document.getElementById("nombreHelp").style.visibility="visible";
     valido=false;
 }
 // Los apellidos han sido introducidos, y no a espacios en blanco o números
 if (apellidos.length==0||parseInt(apellidos)){
     document.getElementById("apellidosHelp").style.visibility="visible";
     valido=false;
 }
 // la contraseña supera una serie de requisitos:
 if ((pwd.length<8)||(pwd.length>24)||            /* entre 8 y 24 caracteres */
     !/[a-zñ]/.test(pwd) || !/[A-ZÑ]/.test(pwd)|| /* minúscula y mayúscula */
     !/[0-9]/.test(pwd)                           /* dígito numérico obligatorio */
     ){
     document.getElementById("pwdHelp").style.visibility="visible";
     valido=false;
 }
 // La repetición de la contraseña coincide
 if (pwd!=pwd2){
     document.getElementById("pwd2Help").style.visibility="visible";
     valido=false;
 }
 // La edad debe ser numérica y estar entre 18 y 70 
 if (isNaN(edad)||edad<=0||(edad%1!=0)||(edad<18)||(edad>70)){
     document.getElementById("edadHelp").style.visibility="visible";
     valido=false;
 }
 // La fecha no puede estar vacía
 if (fecha==""){
     document.getElementById("fechaIngresoHelp").style.visibility="visible";
     valido=false;
 }
 // La provincia no puede ser 0 (no haber elegido ninguna)
 if (provincia==0){ 
     document.getElementById("provinciaHelp").style.visibility="visible";
     valido=false;
 }
 // Es obligatorio haber marcado la casilla 
 if (!aceptar.checked){
     document.getElementById("aceptarHelp").style.visibility="visible";
     valido=false;
 }
 if (!(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(correo))) {
    document.getElementById("correoHelp").style.visibility="visible";
    valido=false;
 }
  return valido;  // devuelve false si alguna comprobación ha fallado
}

function quitarError(msg){
 // Cada vez que se camibia un campo, se elimina mensaje de error
  document.getElementById(msg).style.visibility="hidden";
}

function limpiarResultado(){
 // Cada vez que se pulsa el botón submit, se elimina el resultado anterior
  document.getElementById('resultado').innerHTML="";
}
