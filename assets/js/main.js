function convertirCelsius(conect){
 	var conect = document.getElementById('farenheit').value;
 	if(conect == 0 || conect == null){
 		alert ("Escribe un número");
 	}else{
		alert ("Tus Grados Celsius son : " + (Math.round((conect - 32) * 5/9)));
	}
};

