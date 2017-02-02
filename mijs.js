
var boton=document.getElementsByName('boton')[0];
var mensaje=document.getElementById('mensaje');

var nombre=document.getElementsByName('nombre')[0];
var apellido=document.getElementsByName('apellido')[0];
var ci=document.getElementsByName('ci');
var telefono=document.getElementsByName('telefono');
var fecha=document.getElementsByName('fecha');
var formulario=document.getElementById('formulario');

boton.onclick=function (e)
{
	e.preventDefault();
	var msj='Por favor llenes los siguientes datos:<br>';
	var campos=new Array();
	var estado=false;

	if(nombre || nombre.length)
		{campos.push('<b>* Nombre</b>');estado=true;}

	if(apellido || apellido.length)
		{campos.push('<b>* Apellidos</b>');estado=true;}

	if(ci || ci.length)
		{campos.push('<b>* Ci</b>');estado=true;}

	if(telefono || telefono.length)
		{campos.push('<b>* Telefono</b>');estado=true;}

	if(fecha || fecha.length)
		{campos.push('<b>* Fecha</b>');estado=true;}

	if(estado)
	{
		var faltantes='';
		for(var c in campos)
		{
			faltantes+=campos[c]+'<br>';
		}
		mensaje.innerHTML=msj+faltantes;
	}
	else
	{
		formulario.submit();
	}
}

