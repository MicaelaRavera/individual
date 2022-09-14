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
    <h2>
    ${producto.name}
    </h2>
    <center>
    <h2>
     ${producto.category}
     </h2>
     </center>
     `
     for ( let image of producto.images){
         detallesproducto.innerHTML += `
             <img src = "${image}"
             width="200"
            height="100">
         ` 
     }
     detallesproducto.innerHTML +=`
       <div>
    ${producto.cost}
    ${producto.currency}
    <span>
    ${producto.soldCount} vendidos
    </span>
    </div>
    <div>
    <center>
    ${producto.description}
    </center>
    `
}