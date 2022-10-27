let infoproductos = []

function guardarproductos(jsonlista){
   infoproductos = jsonlista.articles 
   mostrarCarrito ()
}
function cargarCarrito() {
      getJSONData(CART_INFO_URL + 25801 + EXT_TYPE)
        .then(productos => guardarproductos(productos.data))
    
    
}

cargarCarrito()

function mostrarCarrito(){
    let detallescarrito = document.getElementById("carrito")
    detallescarrito.innerHTML = ""
    for (let producto of infoproductos){
    detallescarrito.innerHTML += `
    <tr>
        <th scope="row"> <img class="carrito" src="${producto.image}"> ${producto.name}</th>
        <td> ${producto.currency} ${producto.unitCost}</td>
        <td> <input  oninput="cambiarcantidadproducto(event.target.value,${producto.id})" class="form-control carritoCantidad" type="number"  value=${producto.count}></td>
        <td>${producto.currency} 
        <span  id="subtotal${producto.id}">
         ${producto.unitCost*producto.count}
         </span>
    </tr>
    `
     }
     let subtotalTotal = 0
     for(let producto of infoproductos ){
      subtotalTotal +=  producto.unitCost * producto.count
      }
    let sumasubtotal = document.getElementById("subtotalgeneral")
    sumasubtotal.innerHTML = `
     <span> USD ${subtotalTotal} </span>
    `
    let totalTotal = subtotalTotal
    let costoenvio = document.getElementById("costoenvio")
    let checked15 = document.getElementById("check15")
    if (checked15.checked) {
        costoenvio.innerHTML = ` 
        <span> USD ${subtotalTotal*0.15} </span>
        `
        totalTotal += subtotalTotal*0.15 
    }

    let checked7 = document.getElementById("check7")
    if (checked7.checked) {
        costoenvio.innerHTML = ` 
        <span> USD ${subtotalTotal *0.07} </span>
        `
        totalTotal += subtotalTotal*0.07
    }

    let checked5 = document.getElementById("check5")
    if (checked5.checked) {
        costoenvio.innerHTML = ` 
        <span> USD ${subtotalTotal * 0.05} </span>
        `
        totalTotal += subtotalTotal * 0.05
    }
    
    let total = document.getElementById ("total")
     total.innerHTML =`
    ${totalTotal}
    `
    
}

function cambiarcantidadproducto(cantidad,id) {
  for(let producto of infoproductos) {
    console.log(producto)
    if (producto.id == id){
        console.log(id)
        console.log(cantidad)
        producto.count = cantidad
        mostrarCarrito ()
    }
  } 
}





