function cargarCarrito() {
    getJSONData(CART_INFO_URL + 25801 + EXT_TYPE)
        .then(productos => mostrarCarrito(productos.data))
}

cargarCarrito()

function mostrarCarrito(jsonlista){
    let detallescarrito = document.getElementById("carrito")
    for (let producto of jsonlista.articles)
    detallescarrito.innerHTML = `
    <tr>
        <th scope="row"> <img class="carrito" src="${producto.image}"> ${producto.name}</th>
        <td> ${producto.currency} ${producto.unitCost}</td>
        <td> <input class="form-control carritoCantidad" type="number"  value=${producto.count}></td>
        <td>${producto.currency} ${producto.unitCost*producto.count}</td>
    </tr>
    `
}
