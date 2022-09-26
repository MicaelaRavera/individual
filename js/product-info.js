function cargarProducto() {
    getJSONData(PRODUCT_INFO_URL + localStorage.getItem("idproduct") + EXT_TYPE)
        .then(producto => mostrarProducto(producto.data))
}
window.addEventListener("load",()=>{
    cargarProducto()
})
function mostrarProducto(producto){
let detallesproducto = document.getElementById("productoinfo")
    detallesproducto.innerHTML = `

    <h2 class="producto">
    ${producto.name}
    <br>
    ${producto.cost}
     ${producto.currency}
    </h2>

    <div>
    <center>
    <h2>
     ${producto.category}
     </h2>
    ${producto.description}
     </center>
     </div>
     <span>
      ${producto.soldCount} vendidos
      </span>
     `
     for ( let image of producto.images){
         detallesproducto.innerHTML += `
             <img src = "${image}"
             width="200"
            height="100">
         ` 
     }
     detallesproducto.innerHTML +=`

    `
    function comment() {
        var name = document.getElementById('name').value;
        var comment = document.getElementById('comment').value;
        let fecha = new date()

        if (name == "" || comment == "") {
        } else {
            var txt_name = document.createTextNode(name);
            var txt_message = document.createTextNode(comment);
            el_name.appendChild(txt_name);
            el_message.appendChild(txt_message);
            el_line.style.border = '1px solid #000';
           
            document.getElementById('name').value = "";
            document.getElementById('comment').value = "";
        }

    }
}