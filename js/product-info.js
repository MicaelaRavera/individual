function cargarProducto() {
    getJSONData(PRODUCT_INFO_URL + localStorage.getItem("idproduct") + EXT_TYPE)
        .then(producto => mostrarProducto(producto.data))
}
window.addEventListener("load",()=>{
    cargarProducto()
    cargarComentarios()
})
function mostrarProducto(producto){
let detallesproducto = document.getElementById("productoinfo")
    detallesproducto.innerHTML = `

    // hacer boton de ecompras aca
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
    
    let productorelacionado = document.getElementById("productrelacionado")
    for(let relacionado of producto.relatedProducts){
        productorelacionado.innerHTML += `
            <div class="productorelacionado" product-id="${relacionado.id}" >
           <img src="${relacionado.image}"
           width="200"
           height="100"
           >
            <p> ${relacionado.name} </p>
            </div>
            

         ` 
    }
    let domproductos = document.getElementsByClassName("productorelacionado")
    for (let producto of domproductos) {
        producto.addEventListener("click", () => {
            let idproducto = producto.getAttribute("product-id")
            idproducto = localStorage.setItem("idproduct", idproducto)
            window.location.replace("product-info.html")
        })
    }
}
function mostrarComentarios(comentarios){
let detallescomentarios = document.getElementById("comentariosinfo")
   for (let comentario of comentarios ){
detallescomentarios.innerHTML += `
<div class="todo">
<div class="usertime">
    ${comentario.user}
    ${comentario.dateTime}

<span class="fa fa-star ${comentario.score >= 1 ?"checked":""}"></span>
<span class="fa fa-star  ${comentario.score >= 2 ? "checked" : ""}"></span>
<span class="fa fa-star  ${comentario.score >= 3 ? "checked" : ""} "></span>
<span class="fa fa-star ${comentario.score >= 4 ? "checked" : ""} "></span>
<span class="fa fa-star ${comentario.score >= 5 ? "checked" : ""} "></span>
</div>

<div class="descripcion"> 
${comentario.description}
</div>
</div>
`
 }
}
function cargarComentarios (){
    getJSONData(PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("idproduct") + EXT_TYPE)
        .then(comentarios => mostrarComentarios(comentarios.data))
}


