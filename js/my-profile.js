var forms = document.querySelectorAll('.needs-validation')

Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity()) {
                let nombre = document.getElementById("nombre").value
                let apellido = document.getElementById("apellido").value
                let email = document.getElementById("email").value
                let nombre2 = document.getElementById("nombre2").value
                let apellido2 = document.getElementById("apellido2").value
                let contacto = document.getElementById("contacto").value
                localStorage.setItem("perfil-nombre", nombre)
                localStorage.setItem("perfil-apellido", apellido)
                localStorage.setItem("perfil-email", email)
                localStorage.setItem("perfil-nombre2", nombre2)
                localStorage.setItem("perfil-apellido2", apellido2)
                localStorage.setItem("perfil-contacto", contacto)

            }
           
            event.preventDefault()
            event.stopPropagation()

            form.classList.add('was-validated')
        }, false)
    })

window.addEventListener("load",() =>{
    if (localStorage.getItem("perfil-email")===null){
        window.location.replace("index.html")
    }
    let nombre = localStorage.getItem("perfil-nombre")
    let apellido = localStorage.getItem("perfil-apellido")
    let email = localStorage.getItem("perfil-email")
    let nombre2 = localStorage.getItem("perfil-nombre2")
    let apellido2 = localStorage.getItem("perfil-apellido2")
    let contacto = localStorage.getItem("perfil-contacto") 
    document.getElementById("nombre").value = nombre 
    document.getElementById("apellido").value = apellido 
    document.getElementById("email").value = email 
    document.getElementById("nombre2").value = nombre2 
    document.getElementById("apellido2").value = apellido2 
    document.getElementById("contacto").value = contacto 
})


