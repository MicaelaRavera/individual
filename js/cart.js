function cargarCarrito() {
      getJSONData(CART_INFO_URL + 25801 + EXT_TYPE)
        .then(productos => mostrarCarrito(productos.data))
    
    
}

cargarCarrito()

function mostrarCarrito(jsonlista){
    let detallescarrito = document.getElementById("carrito")
    for (let producto of jsonlista.articles)
    detallescarrito.innerHTML += `
    <tr>
        <th scope="row"> <img class="carrito" src="${producto.image}"> ${producto.name}</th>
        <td> ${producto.currency} ${producto.unitCost}</td>
        <td> <input  oninput="subtotal(event.target.value,${producto.unitCost},${producto.id})" class="form-control carritoCantidad" type="number"  value=${producto.count}></td>
        <td>${producto.currency} 
        <span  id="subtotal${producto.id}">
         ${producto.unitCost*producto.count}
         </span>
         </td>
    </tr>
    `
}

function subtotal(cantidad, cost,id) {
    let subtotalspan = document.getElementById("subtotal"+id)
    subtotalspan.innerHTML = `
    ${cantidad * cost }
    `
 
}



