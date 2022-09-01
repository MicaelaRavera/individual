document.addEventListener("DOMContentLoaded",function(){
	document.getElementById("boton").addEventListener("click",function(){

		let inputemail = document.getElementById ("email")
		let inputpassword = document.getElementById("password")
		if (inputemail.value !== undefined && inputemail.value !== "" && inputpassword.value !== undefined && inputpassword.value !== "") {
			localStorage.setItem("mail",inputemail.value)
			window.location.replace("home.html")
		}else{
			alert("Error en el usuario y/o contraseña")

		}
	})
})