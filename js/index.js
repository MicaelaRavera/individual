document.addEventListener("DOMContentLoaded",function(){
	document.getElementById("boton").addEventListener("click",function(){

		let inputemail = document.getElementById ("email")
		let inputpassword = document.getElementById("password")
		if (inputemail.value !== undefined && inputemail.value !== "" && inputpassword.value !== undefined && inputpassword.value !== "") {
			window.location.replace("file:///home/fpalacios/Desktop/PROYECTO%20O/PROYECTO%20DE%20%20JaP/workspace-inicial/index.html")
		}else{
			alert("Error en el usuario y/o contraseña")

		}
	})
})